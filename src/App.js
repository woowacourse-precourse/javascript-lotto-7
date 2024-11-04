import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js"; // Lotto 클래스를 불러옴

class App {
  async run() {
    try {
      const purchaseAmount = await this.getPurchaseAmount();
      const lottoCount = purchaseAmount / 1000;

      MissionUtils.Console.print(`\n${lottoCount}개를 구매했습니다.`);
      const lottoTickets = this.generateLottoTickets(lottoCount); // Lotto 인스턴스 생성

      const winningNumbers = await this.promptWinningNumbers();

      const bonusNumber = await this.promptBonusNumber(winningNumbers);

      const totalPrize = this.calculateStatistics(
        lottoTickets,
        winningNumbers,
        bonusNumber
      );

      this.calculateProfitRate(purchaseAmount, totalPrize);
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }

  async getPurchaseAmount() {
    while (true) {
      try {
        const input = await MissionUtils.Console.readLineAsync(
          "구입금액을 입력해 주세요.\n"
        );
        const amount = Number(input);

        if (isNaN(amount) || amount <= 0 || amount % 1000 !== 0) {
          throw new Error(
            "[ERROR] 금액은 1,000원 단위의 양수로 입력해 주세요."
          );
        }
        return amount;
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }
  }

  generateLottoTickets(lottoCount) {
    const tickets = [];
    for (let i = 0; i < lottoCount; i++) {
      const ticket = new Lotto(); // 랜덤 번호로 Lotto 인스턴스 생성
      tickets.push(ticket);
      MissionUtils.Console.print(`[${ticket.getNumbers().join(", ")}]`); // 번호 출력
    }
    return tickets;
  }

  async promptWinningNumbers() {
    while (true) {
      try {
        const input = await MissionUtils.Console.readLineAsync(
          "\n당첨 번호를 입력해 주세요.\n"
        );
        const winningNumbers = input.split(",").map(Number);

        if (
          winningNumbers.length !== 6 ||
          winningNumbers.some((num) => isNaN(num) || num < 1 || num > 45) ||
          new Set(winningNumbers).size !== 6
        ) {
          throw new Error(
            "[ERROR] 당첨 번호는 1부터 45 사이의 중복되지 않는 숫자 6개여야 합니다."
          );
        }
        return winningNumbers;
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }
  }

  async promptBonusNumber(winningNumbers) {
    while (true) {
      try {
        const input = await MissionUtils.Console.readLineAsync(
          "\n보너스 번호를 입력해 주세요.\n"
        );
        const bonusNumber = Number(input);

        if (
          isNaN(bonusNumber) ||
          bonusNumber < 1 ||
          bonusNumber > 45 ||
          winningNumbers.includes(bonusNumber)
        ) {
          throw new Error(
            "[ERROR] 보너스 번호는 1부터 45 사이의 중복되지 않는 숫자여야 합니다."
          );
        }
        return bonusNumber;
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }
  }

  calculateStatistics(lottoTickets, winningNumbers, bonusNumber) {
    const prizeArray = [
      { match: 3, text: "3개 일치 (5,000원)", key: "3", prize: 5000 },
      { match: 4, text: "4개 일치 (50,000원)", key: "4", prize: 50000 },
      { match: 5, text: "5개 일치 (1,500,000원)", key: "5", prize: 1500000 },
      {
        match: "5_bonus",
        text: "5개 일치, 보너스 볼 일치 (30,000,000원)",
        key: "5_bonus",
        prize: 30000000,
      },
      {
        match: 6,
        text: "6개 일치 (2,000,000,000원)",
        key: "6",
        prize: 2000000000,
      },
    ];

    const winCounts = { 3: 0, 4: 0, 5: 0, "5_bonus": 0, 6: 0 };
    let totalPrize = 0;

    lottoTickets.forEach((ticket) => {
      const matchCount = ticket.getMatchCount(winningNumbers);
      const bonusMatch = ticket.hasBonusNumber(bonusNumber);

      if (matchCount === 5 && bonusMatch) {
        winCounts["5_bonus"]++;
        totalPrize += 30000000;
      } else if (matchCount >= 3) {
        winCounts[matchCount]++;
        totalPrize += prizeArray.find(
          (prize) => prize.key === String(matchCount)
        ).prize;
      }
    });

    MissionUtils.Console.print("\n당첨 통계\n---");
    prizeArray.forEach(({ key, text }) => {
      MissionUtils.Console.print(`${text} - ${winCounts[key]}개`);
    });

    return totalPrize;
  }

  calculateProfitRate(purchaseAmount, totalPrize) {
    const profitRate = ((totalPrize / purchaseAmount) * 100).toFixed(1);
    MissionUtils.Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }
}

export default App;
