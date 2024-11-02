import errorHandler from '../utils/errorHandler.js';
import Amount from '../models/Amount.js';
import Input from '../views/Input.js';
import Output from '../views/Output.js';
import { LOTTO_PRICE } from '../constants/numbers.js';
import getRandomValues from '../utils/getRandomValues.js';
import Lotto from '../models/Lotto.js';

function calculateLottoCount(amount) {
  return Math.floor(amount / LOTTO_PRICE);
}

class LottoGame {
  #inputView;
  #outputView;
  #amountModel;
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
}

export default LottoGame;
