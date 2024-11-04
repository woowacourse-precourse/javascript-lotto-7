import Lotto from "./Lotto.js";
import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    let lottoPurchaseAmount;
    while (true) {
      try {
        lottoPurchaseAmount = await MissionUtils.Console.readLineAsync(
          "구입금액을 입력해 주세요.\n"
        );
        if (lottoPurchaseAmount % 1000 !== 0) {
          throw new Error("[ERROR] 구입금액이 1000원 단위로 나누어지지 않음.");
        }
        break;
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }

    const lottoQuantity = lottoPurchaseAmount / 1000;
    MissionUtils.Console.print(`\n${lottoQuantity}개를 구매했습니다.`);

    const allLottos = this.generateLottoNumbers(lottoQuantity);
    allLottos.forEach((lotto) => {
      MissionUtils.Console.print(`[${lotto.getNumbers().join(", ")}]`);
    });

    let winningNumbers;
    while (true) {
      try {
        const winningNumbersInput = await MissionUtils.Console.readLineAsync(
          "당첨 번호를 입력해 주세요.\n"
        );
        winningNumbers = winningNumbersInput.split(",").map(Number);
        Lotto.validateWinningNumbers(winningNumbers);
        break;
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }

    let bonusNumber;
    while (true) {
      try {
        const bonusNumberInput = await MissionUtils.Console.readLineAsync(
          "보너스 번호를 입력해 주세요.\n"
        );
        bonusNumber = Number(bonusNumberInput);
        Lotto.validateBonusNumber(bonusNumber, new Set(winningNumbers));
        break;
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }

    const counts = {
      3: 0,
      4: 0,
      5: 0,
      "5_bonus": 0,
      6: 0,
    };

    allLottos.forEach((lotto) => {
      const { matchedCount, hasBouns } = lotto.getMatchResult(
        winningNumbers,
        bonusNumber
      );

      if (matchedCount === 5 && hasBouns) {
        counts["5_bonus"]++;
      } else if (matchedCount >= 3) {
        counts[matchedCount]++;
      }
    });

    this.printResult(counts);

    const prizes = {
      3: 5000,
      4: 50000,
      5: 1500000,
      "5_bonus": 30000000,
      6: 2000000000,
    };

    const totalPrize = this.calculateTotalPrize(counts, prizes);
    const profitRate = (totalPrize / lottoPurchaseAmount) * 100;
    MissionUtils.Console.print(`총 수익률은 ${profitRate.toFixed(1)}%입니다.`);
  }

  generateLottoNumbers(quantity) {
    const allLottos = [];
    for (let i = 0; i < quantity; i++) {
      const lottoNumbers = MissionUtils.Random.pickUniqueNumbersInRange(
        1,
        45,
        6
      );
      const lotto = new Lotto(lottoNumbers);
      allLottos.push(lotto);
    }
    return allLottos;
  }

  calculateTotalPrize(counts, prizes) {
    return (
      counts[3] * prizes[3] +
      counts[4] * prizes[4] +
      counts[5] * prizes[5] +
      counts["5_bonus"] * prizes["5_bonus"] +
      counts[6] * prizes[6]
    );
  }

  printResult(counts) {
    console.log(`3개 일치(5,000원) - ${counts[3]}`);
    console.log(`4개 일치(50,000원) - ${counts[4]}`);
    console.log(`5개 일치(1,500,000원) - ${counts[5]}`);
    console.log(`5개 일치(30,000,000원) - ${counts["5_bonus"]}`);
    console.log(`6개 일치(2,000,000,000원) - ${counts[6]}`);
  }
}

export default App;
