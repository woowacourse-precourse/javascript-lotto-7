import { PrizeMoney } from '../Constants/constants.js';
import roundToOne from '../Utils/roundToOne.js';

class Statistic {
  constructor(buyPrice) {
    this.buyPrice = buyPrice;
    this.winningResult = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
      miss: 0,
    };
  }

  addWinningCount(prizeName) {
    this.winningResult[prizeName] += 1;
  }

  #getGainPrice() {
    return (
      this.winningResult.first * PrizeMoney.FIRST +
      this.winningResult.second * PrizeMoney.SECOND +
      this.winningResult.third * PrizeMoney.THIRD +
      this.winningResult.fourth * PrizeMoney.FOURTH +
      this.winningResult.fifth * PrizeMoney.FIFTH
    );
  }

  getEarningRate() {
    const rate = (this.#getGainPrice() / this.buyPrice) * 100;
    return roundToOne(rate);
  }
}

export default Statistic;
