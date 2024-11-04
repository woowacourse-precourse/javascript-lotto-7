import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const purchaseAmount = await this.getPurchaseAmount();
      const lottoCount = purchaseAmount / 1000;

      MissionUtils.Console.print(`\n${lottoCount}개를 구매했습니다.`);
      const lottoNumbers = this.getLottoNumbers(lottoCount);

      const winningNumbers = await this.promptWinningNumbers();
      MissionUtils.Console.print(`\n당첨 번호: ${winningNumbers.join(", ")}`);

      const bonusNumber = await this.promptBonusNumber(winningNumbers);
      MissionUtils.Console.print(`보너스 번호: ${bonusNumber}`);

      this.calculateStatistics(lottoNumbers, winningNumbers, bonusNumber);
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

  getLottoNumbers(lottoCount) {
    const lottoNumbers = [];

    for (let i = 0; i < lottoCount; i++) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      numbers.sort((a, b) => a - b);
      lottoNumbers.push(numbers);
      MissionUtils.Console.print(`[${numbers.join(", ")}]`);
    }

    return lottoNumbers;
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

  calculateStatistics(lottoNumbers, winningNumbers, bonusNumber) {
    const prizeArray = [
      { match: 3, text: "3개 일치 (5,000원)", key: "3" },
      { match: 4, text: "4개 일치 (50,000원)", key: "4" },
      { match: 5, text: "5개 일치 (1,500,000원)", key: "5" },
      {
        match: "5_bonus",
        text: "5개 일치, 보너스 볼 일치 (30,000,000원)",
        key: "5_bonus",
      },
      { match: 6, text: "6개 일치 (2,000,000,000원)", key: "6" },
    ];

    const winCounts = { 3: 0, 4: 0, 5: 0, "5_bonus": 0, 6: 0 };

    lottoNumbers.forEach((lotto) => {
      const matchCount = lotto.filter((num) =>
        winningNumbers.includes(num)
      ).length;
      const bonusMatch = lotto.includes(bonusNumber);

      if (matchCount === 5 && bonusMatch) {
        winCounts["5_bonus"]++;
      } else if (matchCount >= 3) {
        winCounts[matchCount]++;
      }
    });

    MissionUtils.Console.print("\n당첨 통계\n---");
    prizeArray.forEach(({ key, text }) => {
      MissionUtils.Console.print(`${text} - ${winCounts[key]}개`);
    });
  }
}

export default App;
