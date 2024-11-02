import { WINNING_INDEX, REWARD } from "../constants/Constants.js";

class CalculateProfitModel {
  getRate(winningCount, lottoPrice) {
    const profit = this.getProfits(winningCount);
    const rate = (profit / lottoPrice) * 100;
    return rate;
  }
  getProfits(winningCount) {
    const profits =
      winningCount[WINNING_INDEX.THREE_MATCH] * REWARD.THREE_MATCH +
      winningCount[WINNING_INDEX.FOUR_MATCH] * REWARD.FOUR_MATCH +
      winningCount[WINNING_INDEX.FIFTH_MATCH] * REWARD.FIFTH_MATCH +
      winningCount[WINNING_INDEX.SIXTH_MATCH] * REWARD.SIXTH_MATCH +
      winningCount[WINNING_INDEX.FIFTH_BONUS_MATCH] * REWARD.FIFTH_BONUS_MATCH;
    return profits;
  }
}

export default CalculateProfitModel;
