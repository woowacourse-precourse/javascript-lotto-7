import { Console } from '@woowacourse/mission-utils';
import { PRIZE_MONEYS, REVENUE_RATE } from './Constants.js';

class RevenueRate {
  #rate = 0;
  
  constructor() {}

  getRate() {
    return this.#rate;
  }

  calculate(purchaseAmount, winningHistory) {
    let sum = 0;

    for(const key in winningHistory) {
      sum += PRIZE_MONEYS[key] * winningHistory[key];
    }

    this.#rate = (sum / purchaseAmount * 100).toFixed(1);
  }

  print() {
    Console.print(REVENUE_RATE.PREFIX + this.#rate + REVENUE_RATE.POSTFIX);
  }
}

export default RevenueRate;
