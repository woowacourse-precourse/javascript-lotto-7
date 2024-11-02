import { RepeatHandler } from "./handler/RepeatHandler.js";
import { PriceInputHandler } from "./handler/PriceInputHandler.js";
import { LottoMaker } from "./LottoMaker.js";
import { LottoPrintHandler } from "./handler/LottoPrintHandler.js";
import { LottoNumberInputHandler } from "./handler/LottoNumberInputHandler.js";

class App {
  #repeatHandler;
  #priceInputHandler;
  #lottoMaker;
  #lottoPrintHandler;
  #lottoNumberInputHandler;

  constructor() {
    this.#repeatHandler = new RepeatHandler();
    this.#priceInputHandler = new PriceInputHandler();
    this.#lottoMaker = new LottoMaker();
    this.#lottoPrintHandler = new LottoPrintHandler();
    this.#lottoNumberInputHandler = new LottoNumberInputHandler();
  }

  async run() {
    const lottoArr = await this.#repeatHandler.repeatUntilSuccess(async () => await this.#purchaseLotto());
    const winningNumbers = await this.#repeatHandler.repeatUntilSuccess(async () => await this.#lottoNumberInputHandler.readWinningNumbers());
    console.log(winningNumbers);
  }

  async #purchaseLotto() {
    const price = await this.#priceInputHandler.readPrice();
    const lottoArr = this.#lottoMaker.makeLotto(price);
    await this.#lottoPrintHandler.printMyLotto(lottoArr);
    return lottoArr;
  }
}

export default App;
