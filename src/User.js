import {
  WINNER_PRIZE,
  UNIT,
  INIT_RANK_COUNT,
  INIT_NUMBER,
} from './Constants/LottoConstants.js';

class User {
  purchaseMoney;
  bonusNumber;
  sumOfPrize = INIT_NUMBER;
  winnerRankCount = INIT_RANK_COUNT;
  tickets = [];
  purchasedLottoCount = INIT_NUMBER;

  constructor(purchaseMoney) {
    this.purchaseMoney = purchaseMoney;
    this.purchasedLottoCount = this.getPurchasedLottoCount();
  }

  getWinnerCountResult() {
    return this.winnerRankCount;
  }

  setWinnerCountResult(winnerRankCount) {
    this.winnerRankCount = winnerRankCount;
  }

  setTickets(tickets) {
    this.tickets = [...tickets];
  }

  calculatePrizeAmount() {
    for (let key of Object.keys(this.winnerRankCount)) {
      this.sumOfPrize += WINNER_PRIZE[key] * this.winnerRankCount[key];
    }
  }

  getProfitRate() {
    this.calculatePrizeAmount();
    return (
      (Number(this.sumOfPrize) / Number(this.purchaseMoney)) *
      100
    ).toFixed(1);
  }

  getPurchasedLottoCount() {
    return this.purchaseMoney / UNIT;
  }
}

// 클래스 자체를 export
export default User;
