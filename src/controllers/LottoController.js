import Lotto from '../models/Lotto.js';
import LottoService from '../services/LottoService.js';
import GenerateLotto from '../utils/generateLotto.js';
import Validator from '../utils/validator.js';
import InputView from '../Views/InputView.js';
import OutputView from '../Views/OutputView.js';

class LottoController {
  #inputView;
  #outputView;
  #lottos;

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
    this.#lottos = [];
  }

  async run() {
    const purchasePrice = await this.#getPurchasePrice();
    await this.#generateLottos(purchasePrice);
    const winningNumbers = await this.#getWinningNumbers();
    const bonusNumber = await this.#getBonusNumber(winningNumbers);
    const lottoService = new LottoService(this.#lottos, winningNumbers, bonusNumber);
    const { lottoResult, rateOfRevenue } = lottoService.getResults(purchasePrice);
    this.#showLottoResults(lottoResult, rateOfRevenue);
  }

  /**
   *  로또 구매 금액을 입력
   * @returns {number}
   * @throws {Error}
   */
  async #getPurchasePrice() {
    try {
      const purchasePriceString = await this.#inputView.getInput();
      const purchasePrice = Number(purchasePriceString);
      Validator.validatePurchasePrice(purchasePrice);
      return purchasePrice;
    } catch (error) {
      this.#outputView.printError(error.message);
      return this.#getPurchasePrice();
    }
  }

  /**
   * 로또 구매 금액에 따른 로또 번호 생성
   * @param {number} purchasePrice
   * @throws {Error}
   */
  async #generateLottos(purchasePrice) {
    const purchaseQuantity = purchasePrice / 1000;
    this.#outputView.printPurchaseQuantity(purchaseQuantity);

    const lottoPromises = Array.from({ length: purchaseQuantity }, async () => {
      const lotto = await this.#createSingleLotto();
      this.#outputView.printLotto(lotto);
      return lotto;
    });

    this.#lottos = await Promise.all(lottoPromises);
  }

  /**
   * 로또 한 장 생성 (오름차순 정렬된 로또 번호)
   * @returns {number[]}
   * @throws {Error}
   */
  async #createSingleLotto() {
    try {
      const lottoString = await GenerateLotto.createRandomNumbers();
      const lotto = new Lotto(lottoString);
      return lotto.getSortedLottoNumbers();
    } catch (error) {
      this.#outputView.printError(error.message);
      return this.#createSingleLotto();
    }
  }

  /**
   * 당첨 번호 입력
   * @returns {number[]}
   * @throws {Error}
   */
  async #getWinningNumbers() {
    try {
      const winningNumberString = await this.#inputView.getWinningNumber();
      const winningNumbers = winningNumberString.split(',').map(Number);
      Validator.validateWinningNumber(winningNumbers);
      return winningNumbers;
    } catch (error) {
      this.#outputView.printError(error.message);
      return this.#getWinningNumbers();
    }
  }

  /**
   * 보너스 번호 입력
   * @param {number[]} winningNumbers
   * @returns {number}
   * @throws {Error}
   */
  async #getBonusNumber(winningNumbers) {
    try {
      const bonusNumber = Number(await this.#inputView.getBonusNumber());
      Validator.validateBonusNumber(bonusNumber, winningNumbers);
      return bonusNumber;
    } catch (error) {
      this.#outputView.printError(error.message);
      return this.#getBonusNumber(winningNumbers);
    }
  }

  /**
   * 로또 결과 출력 (당첨 번호, 수익률)
   * @param {object} lottoResult
   * @param {number} rateOfRevenue
   */
  #showLottoResults(lottoResult, rateOfRevenue) {
    this.#outputView.printWinningResult(lottoResult);
    this.#outputView.printRateOfRevenue(rateOfRevenue);
  }
}

export default LottoController;
