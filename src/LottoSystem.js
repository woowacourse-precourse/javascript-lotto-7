import InputManagement from './InputManagement.js';
import LottoPublication from './LottoPublication.js';
import VerifyingLotto from './VerifyingLotto.js';
import RevenueRate from './RevenueRate.js';

class LottoSystem {
  #inputManagement;
  #lottoPublication;
  #verifyingLotto;
  #revenueRate;

  constructor() {
    this.#inputManagement = new InputManagement();
    this.#lottoPublication = new LottoPublication();
    this.#verifyingLotto = new VerifyingLotto();
    this.#revenueRate = new RevenueRate();
  }

  async run() {
    await this.#inputManagement.inputPurchaseAmount();

    this.#lottoPublication.publicationLotto(this.#inputManagement.getPublicationCount());
    this.#lottoPublication.showPublishedLottoList();

    await this.#inputManagement.inputWinningNumbers();
    await this.#inputManagement.inputBonusNumber();

    this.#verifyingLotto.verifyWinningLottoList(
      this.#inputManagement.getWinningNumbers(),
      this.#inputManagement.getBonusNumber(),
      this.#lottoPublication.getPublishedLottoList()
    );
    this.#verifyingLotto.printWinningHistory();

    this.#revenueRate.calculate(
      this.#inputManagement.getPurchaseAmount(),
      this.#verifyingLotto.getWinningHistory()
    );
    this.#revenueRate.print();
  }
}

export default LottoSystem;
