import { InputMessages } from '../resources/Constants.js';
import purchaseAmountValidator from '../utils/validation/purchaseAmountValidator.js';
import { bonusNumberValidator } from '../utils/validation/bonusNumberValidator.js';
import Input from '../utils/io/Input.js';
import LottoDisplayHandler from './LottoDisplayHandler.js';
import LottoClass from './Lotto.js';
import LottoTicketsGenerator from './LottoTicketsGenerator.js';

class LottoController {
  #purchaseAmount;
  #lottoTickets;
  #bonusNumber;
  displayHandler;
  lotto;
  lottoTicketGenerator;

  constructor() {
    this.displayHandler = new LottoDisplayHandler();
    this.lottoTicketGenerator = new LottoTicketsGenerator();
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

  generateLottoTickets() {
    this.#lottoTickets = this.lottoTicketGenerator.execute(
      this.#purchaseAmount,
    );
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

  #isMatchCountValid(matchCount) {
    return matchCount !== 0 && matchCount !== 1 && matchCount !== 2;
  }

  #compareLottoTickets(winningNumbers) {
    const winningResult = { 3: 0, 4: 0, 5: 0, '5B': 0, 6: 0 };

    this.#lottoTickets.forEach((lottoTicket) => {
      const matchCount = this.#getMatchCount(lottoTicket, winningNumbers);

      if (this.#isMatchCountValid(matchCount)) {
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
