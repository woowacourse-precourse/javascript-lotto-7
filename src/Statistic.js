import BuyPriceConfig from './Constants/buyPriceConfig.js';
import Errors from './Constants/Errors.js';
import { PrizeMoney } from './Constants/prizeConfig.js';
import { throwError } from './Utils/handleError.js';
import roundToOne from './Utils/roundToOne.js';
import Rules from './Utils/Rules.js';

class Statistic {
  #buyPrice;
  #winningResult;

  constructor(buyPrice) {
    this.#validate(buyPrice);
    this.#buyPrice = buyPrice;
    this.#winningResult = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
      miss: 0,
    };
  }

  #validate(buyPrice) {
    if (Rules.isNotNumber(buyPrice))
      throwError(Errors.BuyPrice.NOT_NUMBER_INPUT);
    if (Rules.isLessThanMin(buyPrice, BuyPriceConfig.Min.VALUE))
      throwError(Errors.BuyPrice.LESS_THAN_MIN);
    if (Rules.isMoreThanMax(buyPrice, BuyPriceConfig.Max.VALUE))
      throwError(Errors.BuyPrice.MORE_THAN_MAX);
    if (Rules.isRestWhenDivided(buyPrice, BuyPriceConfig.Unit.VALUE))
      throwError(Errors.BuyPrice.NOT_UNIT_NUMBER);
  }

  #calculateGainPrice() {
    return (
      this.#winningResult.first * PrizeMoney.FIRST +
      this.#winningResult.second * PrizeMoney.SECOND +
      this.#winningResult.third * PrizeMoney.THIRD +
      this.#winningResult.fourth * PrizeMoney.FOURTH +
      this.#winningResult.fifth * PrizeMoney.FIFTH
    );
  }

  addWinningCount(prizeName) {
    this.#winningResult[prizeName] += 1;
  }

  getWinningResult() {
    return this.#winningResult;
  }

  getEarningRate() {
    const rate = (this.#calculateGainPrice() / this.#buyPrice) * 100;
    return roundToOne(rate);
  }
}

export default Statistic;
