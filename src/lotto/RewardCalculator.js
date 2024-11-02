import { LOTTO_PRICE } from "../constant/constants.js";

export class RewardCalculator {
  calculateRewardRate(myLottoCount, result) {
    const paidPrice = myLottoCount * LOTTO_PRICE;
    let reward = 0;
    Object.values(result).forEach((r) => reward += (r.getResult().price * r.getResult().count))
    return (reward / paidPrice * 100).toFixed(1)
  }
}
