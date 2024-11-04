import { Amount, Lotto, WinningNumber, LottoResult, ProfitRate } from '../models/index.js';
import { Input, Output } from '../views/index.js';
import { LOTTO_PRICE } from '../constants/numbers.js';
import getRandomValues from '../utils/getRandomValues.js';
import errorHandler from '../utils/errorHandler.js';

function calculateLottoCount(amount) {
  return Math.floor(amount / LOTTO_PRICE);
}

class LottoGame {
  #inputView;
  #outputView;
  #amountModel;
  #winNumberModel;
  #lottoResultModel;
  #profitRateModel;
  #lottoCount;
  #lottos = [];

  constructor() {
    this.#inputView = new Input();
    this.#outputView = new Output();
  }

  async startGame() {
    // 로또 구매 금액 입력
    await errorHandler(async () => await this.#purchaseLotto());

    // 로또 구매 개수 계산
    this.#lottoCount = calculateLottoCount(this.#amountModel.getAmount());
    this.#outputView.printLottoCount(this.#lottoCount);

    // 로또 구매
    this.#lottos = this.#generateLottos(this.#lottoCount);
    this.#outputView.printLottos(this.#lottos);

    // 당첨 번호 입력
    await errorHandler(async () => await this.#setWinningNumber());

    // 보너스 번호 입력
    await errorHandler(async () => await this.#setBonusNumber());

    // 결과 출력
    this.#printResult();
  }

  async #purchaseLotto() {
    const inputAmount = await this.#inputView.getPurchaseAmount();
    this.#amountModel = new Amount(inputAmount);
  }

  #generateLottos(lottoCount) {
    const lottos = [];

    for (let i = 0; i < lottoCount; i++) {
      lottos.push(this.#getLotto());
    }

    return lottos;
  }

  #getLotto() {
    const numbers = getRandomValues();
    const lotto = new Lotto(numbers);
    return lotto;
  }

  async #setWinningNumber() {
    const inputNumbers = await this.#inputView.getWinningNumber();
    this.#winNumberModel = new WinningNumber(inputNumbers);
  }

  async #setBonusNumber() {
    const bonusNumber = await this.#inputView.getBonusNumber();
    this.#winNumberModel.setBonusNumber(bonusNumber);
  }

  #printResult() {
    this.#lottoResultModel = new LottoResult(this.#lottos, this.#winNumberModel);
    this.#outputView.printWinning(this.#lottoResultModel);

    this.#profitRateModel = new ProfitRate(this.#lottoResultModel, this.#amountModel);
    const profit = this.#profitRateModel.getProfitRate();
    this.#outputView.printProfitRate(profit);
  }
}

export default LottoGame;
