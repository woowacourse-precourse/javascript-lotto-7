import { RepeatHandler } from "./handler/RepeatHandler.js";
import { PriceInputHandler } from "./handler/PriceInputHandler.js";
import { LottoMaker } from "./LottoMaker.js";
import { LottoPrintHandler } from "./handler/LottoPrintHandler.js";

class App {
  #repeatHandler;
  #priceInputHandler;
  #lottoMaker;
  #lottoPrintHandler;

  constructor() {
    this.#repeatHandler = new RepeatHandler();
    this.#priceInputHandler = new PriceInputHandler();
    this.#lottoMaker = new LottoMaker();
    this.#lottoPrintHandler = new LottoPrintHandler();
  }

  async run() {
    const lottoArr = await this.#repeatHandler.repeatUntilSuccess(async () => await this.#purchaseLotto());
    console.log(lottoArr);
  }

  async #purchaseLotto() {
    const price = await this.#priceInputHandler.readPrice();
    const lottoArr = this.#lottoMaker.makeLotto(price);
    await this.#lottoPrintHandler.printMyLotto(lottoArr);
    return lottoArr;
  }
}

export default App;
