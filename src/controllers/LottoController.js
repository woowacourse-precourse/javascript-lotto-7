import errorMessages from "../constants/errorMessages.js";
import { WINNING_RESULT } from "../constants/lottoConstants.js";
import Lotto from "../models/Lotto.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import Validator from "../utils/Validator.js";

class LottoController {
  constructor(winningNumbers, bonusNum, purchasedLotto) {
    const nums = this.#splitNumsByComma(winningNumbers);
    this.#validateWinningNums(nums);
    this.winningNumbers = new Lotto(this.#convertStringToNumber(nums));

    this.#validateBonusNum(nums, bonusNum);
    this.bonusNum = bonusNum;

    this.purchasedLotto = purchasedLotto;
  }

  #validateWinningNums(numbers) {
    Validator.validateNumsLength(numbers);
    Validator.validateNumsInRange(numbers);
    Validator.validateNumsDuplicate(numbers);
  }

  #validateBonusNum(nums, bonusNum) {
    Validator.checkBonusNotInWinning(nums, bonusNum);
  }

  #splitNumsByComma(winningNumbers) {
    return winningNumbers.split(",");
  }

  #convertStringToNumber(winningNumbers) {
    return winningNumbers.map(Number);
  }

  start() {
    const purchasedLotto = this.purchasedLotto.getTickets();
    const counts = this.#getMatchCounts(purchasedLotto);
    const awards = this.#countAwards(counts);

    this.printResult(awards);
    const profitRate = this.#calculateProfitRate(awards);
    this.#printProfitRate(profitRate);
  }

  #getMatchCounts(purchasedLotto) {
    return purchasedLotto.map((pLotto) => this.#calculateMatchCount(pLotto));
  }

  #countAwards(counts) {
    return counts.reduce(
      (acc, value) => {
        acc[value] = (acc[value] || 0) + 1;
        return acc;
      },
      {
        "5+bonus": 0, // 기본값 추가
      }
    );
  }

  #calculateMatchCount(numbers) {
    let count = this.#getMatchCount(numbers);
    if (count === 5 && this.#checkBonusBallMatch(numbers)) {
      return "5+bonus";
    }
    return count;
  }

  #getMatchCount(numbers) {
    return this.winningNumbers
      .getNumbers()
      .filter((num) => numbers.includes(num)).length;
  }

  #checkBonusBallMatch(numbers) {
    return numbers.includes(this.bonusNum);
  }

  printResult(counts) {
    WINNING_RESULT.forEach((win) => this.#printResultLine(win, counts));
  }

  #printResultLine(win, counts) {
    const matchCount = this.#determineMatchCount(win, counts);
    const bonusText = this.#getBonusText(win);

    this.#printOutput(win, matchCount, bonusText);
  }

  #determineMatchCount(win, counts) {
    if (win.bonus) {
      return counts[`${win.count}_bonus`] || 0;
    }
    return counts[String(win.count)] || 0;
  }

  #getBonusText(win) {
    if (win.bonus) {
      return ", 보너스 볼 일치";
    }
    return "";
  }

  #printOutput(win, matchCount, bonusText) {
    MissionUtils.Console.print(
      `${win.count}개 일치${bonusText} (${win.price}원) - ${matchCount}개`
    );
  }

  #calculateProfitRate(counts) {
    const purchaseAmount = this.purchasedLotto.getPurchaseAmount();
    const totalPrize = this.#calculateTotalPrize(counts);
    return ((totalPrize / purchaseAmount) * 100).toFixed(1);
  }

  #calculateTotalPrize(counts) {
    return WINNING_RESULT.reduce((total, win) => {
      const matchCount = this.#getMatchCountForWin(win, counts);
      return total + matchCount * parseInt(win.price.replace(/,/g, ""));
    }, 0);
  }

  #getMatchCountForWin(win, counts) {
    if (win.bonus) {
      return counts[`${win.count}_bonus`] || 0;
    }
    return counts[String(win.count)] || 0;
  }

  #printProfitRate(profitRate) {
    MissionUtils.Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }
}

export default LottoController;
