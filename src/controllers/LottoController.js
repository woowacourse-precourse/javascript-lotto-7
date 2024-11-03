import errorMessages from "../constants/errorMessages.js";
import { WINNING_RESULT } from "../constants/lottoConstants.js";
import Lotto from "../models/Lotto.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import Validator from "../utils/Validator.js";

class LottoController {
  constructor(winningNumbers, bonusNum, purchasedLotto) {
    const nums = this.#splitNumsByComma(winningNumbers);
    this.#validate(nums);
    this.winningNumbers = new Lotto(this.#convertStringToNumber(nums));
    this.bonusNum = bonusNum;
    this.purchasedLotto = purchasedLotto;
  }

  #validate(numbers) {
    Validator.validateNumsLength(numbers);
    Validator.validateNumsInRange(numbers);
    Validator.validateNumsDuplicate(numbers);
  }
  #splitNumsByComma(winningNumbers) {
    return winningNumbers.split(",");
  }

  #convertStringToNumber(winningNumbers) {
    return winningNumbers.map((num) => Number(num));
  }

  start() {
    const purchasedLotto = this.purchasedLotto.getTickets();

    const counts = [];
    purchasedLotto.forEach((pLotto) => {
      counts.push(this.#calculateMatchCount(pLotto));
    });

    const awards = counts.reduce((acc, value) => {
      acc[value] = (acc[value] || 0) + 1;
      return acc;
    }, {});

    this.printResult(awards);

    const profitRate = this.#calculateProfitRate(awards);

    MissionUtils.Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }

  #calculateMatchCount(numbers) {
    let count = 0;
    const winningNumbers = this.winningNumbers.getNumbers();
    numbers.forEach((num) => {
      if (num in winningNumbers) count += 1;
    });
    if (count === 5 && this.#checkBonusBallMatch(numbers)) count = "5+bonus";
    return count;
  }

  #checkBonusBallMatch(numbers) {
    if (this.bonusNum in numbers) return true;
    return false;
  }

  printResult(counts) {
    WINNING_RESULT.forEach((win) => {
      let bonusText = "";
      let matchCount = counts[String(win.count)] || 0;

      if (win.bonus) {
        bonusText = ", 보너스 볼 일치";
        matchCount = counts[`${win.count}_bonus`] || 0;
      }

      MissionUtils.Console.print(
        `${win.count}개 일치${bonusText} (${win.price}원) - ${matchCount}개`
      );
    });
  }

  #calculateProfitRate(counts) {
    const purchaseAmount = this.purchasedLotto.getPurchaseAmount();
    let totalPrize = 0;

    WINNING_RESULT.forEach((win) => {
      let matchCount;
      if (win.bonus) {
        matchCount = counts[`${win.count}_bonus`] || 0;
      } else {
        matchCount = counts[String(win.count)] || 0;
      }

      totalPrize += matchCount * parseInt(win.price.replace(/,/g, ""));
    });

    const profitRate = ((totalPrize / purchaseAmount) * 100).toFixed(1);
    return profitRate;
  }
}

export default LottoController;
