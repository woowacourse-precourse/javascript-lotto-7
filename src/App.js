import { RepeatHandler } from "./handler/RepeatHandler.js";
import { PriceInputHandler } from "./handler/PriceInputHandler.js";
import { LottoMaker } from "./lotto/LottoMaker.js";
import { LottoPrintHandler } from "./handler/LottoPrintHandler.js";
import { LottoNumberInputHandler } from "./handler/LottoNumberInputHandler.js";
import { WinningLotto } from "./lotto/WinningLotto.js";
import { LottoResult } from "./result/LottoResult.js";
import { ResultPrintHandler } from "./handler/ResultPrintHandler.js";
import { RewardCalculator } from "./lotto/RewardCalculator.js";

class App {
  #repeatHandler;
  #priceInputHandler;
  #lottoMaker;
  #lottoPrintHandler;
  #lottoNumberInputHandler;
  #lottoResult;
  #resultPrintHandler;
  #rewardCalculator;

  constructor() {
    this.#repeatHandler = new RepeatHandler();
    this.#priceInputHandler = new PriceInputHandler();
    this.#lottoMaker = new LottoMaker();
    this.#lottoPrintHandler = new LottoPrintHandler();
    this.#lottoNumberInputHandler = new LottoNumberInputHandler();
    this.#lottoResult = new LottoResult();
    this.#resultPrintHandler = new ResultPrintHandler();
    this.#rewardCalculator = new RewardCalculator();
  }

  async run() {
    const lottoArr = await this.#repeatHandler.repeatUntilSuccess(async () => await this.#purchaseLotto());
    const winningLotto = await this.#repeatHandler.repeatUntilSuccess(async () => await this.#makeWinningLotto());
    const result = this.#lottoResult.calculateResult(lottoArr, winningLotto);
    const rewardRate = this.#rewardCalculator.calculateRewardRate(lottoArr.length, result);
    this.#resultPrintHandler.printResult(result, rewardRate);
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
