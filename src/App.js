import { LOTTO_PRICE } from "./constants.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import { calculateTotalPrize } from "./resultCal.js";
import { generateLottoNumbers } from "./lottoGenerate.js";
import { printResult } from "./printResult.js";
import { validateBonusNumber } from "./validateBonusNumber.js";
import { validatePurchaseAmount } from "./validate.js";
import { validateWinningNumbers } from "./validateWinningNumbers.js";

class App {
  async run() {
    let lottoPurchaseAmount;
    while (true) {
      try {
        lottoPurchaseAmount = await MissionUtils.Console.readLineAsync(
          "구입금액을 입력해 주세요.\n"
        );
        validatePurchaseAmount(lottoPurchaseAmount);
        break;
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }

    const lottoQuantity = lottoPurchaseAmount / LOTTO_PRICE;
    MissionUtils.Console.print(`\n${lottoQuantity}개를 구매했습니다.`);

    const allLottos = generateLottoNumbers(lottoQuantity);
    allLottos.forEach((lotto) => {
      MissionUtils.Console.print(`[${lotto.getNumbers().join(", ")}]`);
    });

    let winningNumbers;
    while (true) {
      try {
        const winningNumbersInput = await MissionUtils.Console.readLineAsync(
          "당첨 번호를 입력해 주세요.\n"
        );
        winningNumbers = validateWinningNumbers(winningNumbersInput);
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
        bonusNumber = validateBonusNumber(bonusNumberInput, winningNumbers);
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

    printResult(counts);

    const prizes = {
      3: 5000,
      4: 50000,
      5: 1500000,
      "5_bonus": 30000000,
      6: 2000000000,
    };

    const totalPrize = calculateTotalPrize(counts, prizes);
    const profitRate = (totalPrize / lottoPurchaseAmount) * 100;
    MissionUtils.Console.print(`총 수익률은 ${profitRate.toFixed(1)}%입니다.`);
  }
}

export default App;
