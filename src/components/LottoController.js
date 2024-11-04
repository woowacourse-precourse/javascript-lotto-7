import { Random } from '@woowacourse/mission-utils';
import { Lotto } from '../resources/Constants.js';
import purchaseAmountValidator from '../validation/purchaseAmountValidator.js';
import { bonusNumberValidator } from '../validation/bonusNumberValidator.js';
import LottoIOHandler from './LottoIOHandler.js';
import isEmpty from '../utils/isEmpty.js';

class LottoController {
  #purchaseAmount;
  #lottoTickets;
  #bonusNumber;
  ioHandler;

  constructor() {
    this.ioHandler = new LottoIOHandler();
  }

  getPurchaseAmount() {
    return this.#purchaseAmount;
  }

  setPurchaseAmount(purchaseAmount) {
    purchaseAmountValidator(purchaseAmount);
    this.#purchaseAmount = purchaseAmount;
  }

  getLottoTickets() {
    return this.#lottoTickets;
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }

  setBonusNumber(bonusNumber) {
    bonusNumberValidator(bonusNumber);
    this.#bonusNumber = Number(bonusNumber);
  }

  #sortAscending(lottoTickets) {
    return lottoTickets.map((ticket) => ticket.slice().sort((a, b) => a - b));
  }

  async promptPurchaseAmount() {
    const purchaseAmount = await this.ioHandler.promptPurchaseAmount();
    this.setPurchaseAmount(purchaseAmount);
  }

  async promptBonusNumber() {
    const bonusNumber = await this.ioHandler.promptBonusNumber();
    this.setBonusNumber(bonusNumber);
  }

  generateLottoTickets() {
    if (!isEmpty(this.#purchaseAmount)) {
      const ticketCount = this.#purchaseAmount / 1000;

      const lottoTickets = Array.from({ length: ticketCount }, () =>
        Random.pickUniqueNumbersInRange(
          Lotto.MIN_NUMBER,
          Lotto.MAX_NUMBER,
          Lotto.COUNT,
        ),
      );

      this.#lottoTickets = this.#sortAscending(lottoTickets);
    }
  }

  getMatchCount(lottoTicket, winningNumbers) {
    let matchCount = lottoTicket.filter((number) =>
      winningNumbers.includes(number),
    ).length;

    if (matchCount === 5 && lottoTicket.includes(this.#bonusNumber)) {
      matchCount = '5B';
    }

    return matchCount;
  }

  compareLottoTickets(winningNumbers) {
    const winningResult = { 3: 0, 4: 0, 5: 0, '5B': 0, 6: 0 };

    this.#lottoTickets.forEach((lottoTicket) => {
      const matchCount = this.getMatchCount(lottoTicket, winningNumbers);
      if (matchCount !== 0 && matchCount !== 1 && matchCount !== 2) {
        winningResult[this.getMatchCount(lottoTicket, winningNumbers)] += 1;
      }
    });

    return winningResult;
  }
}

export default LottoController;
