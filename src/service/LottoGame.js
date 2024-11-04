import Lotto from "../model/Lotto.js";

class LottoGame {
  constructor(purchaseAmount) {
    this.lottoTickets = this.generateLottoTickets(purchaseAmount);
  }

  generateLottoTickets(amount) {
    const ticketCount = Math.floor(amount / 1000);
    return Array.from({ length: ticketCount }, () => new Lotto());
  }
}

export default LottoGame;