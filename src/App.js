import { RepeatHandler } from "./handler/RepeatHandler.js";
import { PriceInputHandler } from "./handler/PriceInputHandler.js";
import { LottoMaker } from "./lotto/LottoMaker.js";
import { LottoPrintHandler } from "./handler/LottoPrintHandler.js";
import { LottoNumberInputHandler } from "./handler/LottoNumberInputHandler.js";
import { WinningLotto } from "./lotto/WinningLotto.js";
import { LottoResult } from "./result/LottoResult.js";
import { ResultPrintHandler } from "./handler/ResultPrintHandler.js";

class App {
  #repeatHandler;
  #priceInputHandler;
  #lottoMaker;
  #lottoPrintHandler;
  #lottoNumberInputHandler;
  #lottoResult;
  #resultPrintHandler;

  constructor() {
    this.#repeatHandler = new RepeatHandler();
    this.#priceInputHandler = new PriceInputHandler();
    this.#lottoMaker = new LottoMaker();
    this.#lottoPrintHandler = new LottoPrintHandler();
    this.#lottoNumberInputHandler = new LottoNumberInputHandler();
    this.#lottoResult = new LottoResult();
    this.#resultPrintHandler = new ResultPrintHandler();
  }

  async run() {
    const lottoArr = await this.#repeatHandler.repeatUntilSuccess(async () => await this.#purchaseLotto());
    const winningLotto = await this.#repeatHandler.repeatUntilSuccess(async () => await this.#makeWinningLotto());
    const result = this.#lottoResult.calculateResult(lottoArr, winningLotto);
    this.#resultPrintHandler.printResult(result)
  }

  async #purchaseLotto() {
    const price = await this.#priceInputHandler.readPrice();
    const lottoArr = this.#lottoMaker.makeLotto(price);
    await this.#lottoPrintHandler.printMyLotto(lottoArr);
    return lottoArr;
  }

  async #makeWinningLotto() {
    const winningNumbers = await this.#lottoNumberInputHandler.readWinningNumbers();
    const bonusNumber = await this.#lottoNumberInputHandler.readBonusNumber();
    return new WinningLotto(winningNumbers, bonusNumber);
  }
}

export default App;
