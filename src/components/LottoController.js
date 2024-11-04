import { Random } from '@woowacourse/mission-utils';
import { InputMessages, Lotto } from '../resources/Constants.js';
import purchaseAmountValidator from '../utils/validation/purchaseAmountValidator.js';
import { bonusNumberValidator } from '../utils/validation/bonusNumberValidator.js';
import isEmpty from '../utils/isEmpty.js';
import Input from '../utils/io/Input.js';
import LottoDisplayHandler from './LottoDisplayHandler.js';
import LottoClass from './Lotto.js';

class LottoController {
  #purchaseAmount;
  #lottoTickets;
  #bonusNumber;
  displayHandler;
  lotto;

  constructor() {
    this.displayHandler = new LottoDisplayHandler();
  }

  getPurchaseAmount() {
    return this.#purchaseAmount;
  }

  async setPurchaseAmount() {
    const purchaseAmount = await Input.promptRetry(
      InputMessages.PURCHASE_AMOUNT,
      purchaseAmountValidator,
    );
    this.#purchaseAmount = Number(purchaseAmount);
  }

  async setBonusNumber() {
    const localBonusNumber = await Input.promptRetry(
      InputMessages.BONUSE_NUMBER,
      bonusNumberValidator,
    );
    this.#bonusNumber = Number(localBonusNumber);
  }

  getLottoTickets() {
    return this.#lottoTickets;
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }

  async createLotto() {
    this.lotto = await LottoClass.createLotto();
  }

  #sortAscending(lottoTickets) {
    return lottoTickets.map((ticket) => ticket.slice().sort((a, b) => a - b));
  }

  #createLottoTicket() {
    Random.pickUniqueNumbersInRange(
      Lotto.MIN_NUMBER,
      Lotto.MAX_NUMBER,
      Lotto.COUNT,
    );
  }

  generateLottoTickets() {
    if (!isEmpty(this.#purchaseAmount)) {
      const ticketCount = this.#purchaseAmount / 1000;

      const lottoTickets = Array.from({ length: ticketCount }, () =>
        this.#createLottoTicket(),
      );
      this.#lottoTickets = this.#sortAscending(lottoTickets);
    }
  }

  #getMatchCount(lottoTicket, winningNumbers) {
    let matchCount = lottoTicket.filter((number) =>
      winningNumbers.includes(number),
    ).length;

    if (matchCount === 5 && lottoTicket.includes(this.#bonusNumber)) {
      matchCount = '5B';
    }

    return matchCount;
  }

  #compareLottoTickets(winningNumbers) {
    const winningResult = { 3: 0, 4: 0, 5: 0, '5B': 0, 6: 0 };

    this.#lottoTickets.forEach((lottoTicket) => {
      const matchCount = this.#getMatchCount(lottoTicket, winningNumbers);

      if (matchCount !== 0 && matchCount !== 1 && matchCount !== 2) {
        winningResult[matchCount] += 1;
      }
    });

    return winningResult;
  }

  displayResults(winningNumbers) {
    const winningResult = this.#compareLottoTickets(winningNumbers);

    this.displayHandler.printLottoWinningResult(winningResult);
    this.displayHandler.printRateOfReturn(winningResult, this.#purchaseAmount);
  }

  displayLottoTickets() {
    this.displayHandler.displayLottoTickets(
      this.#lottoTickets,
      this.#purchaseAmount,
    );
  }
}

export default LottoController;
