import { INIT_RANK_COUNT } from './Constants/LottoConstants.js';

class Controller {
  lotto;
  user;

  constructor(lotto, user) {
    this.lotto = lotto;
    this.user = user;
  }

  playLottoSystem(bonusNumber) {
    this.createLottoTickets();
    this.updateUserRankCountResult(this.lotto, this.user, bonusNumber);
  }

  updateUserRankCountResult(bonusNumber) {
    const winnerRankCountResult = this.lotto.getAllofLottoTicketsResult(
      this.user.tickets,
      INIT_RANK_COUNT,
      bonusNumber
    );

    this.user.setWinnerCountResult(winnerRankCountResult);
  }

  createLottoTickets() {
    const tickets = this.lotto.makeLottoTicketsAsCount(
      this.user.purchasedLottoCount
    );
    this.user.setTickets(tickets);
  }
}

export default Controller;
