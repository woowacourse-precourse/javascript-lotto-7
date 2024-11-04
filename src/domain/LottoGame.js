import { MissionUtils } from "@woowacourse/mission-utils";
import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import Lotto from "./Lotto.js";
import LottoWinner from "./LottoWinner.js";
import LottoResult from "./LottoResult.js";
import { LOTTO_SETTINGS } from "../constants/lottoSettings.js";
import { range } from "../utils/utils.js";

class LottoGame {
  #lottoList = [];
  #price;
  #winnerNumbers;
  #lottoWinner;

  async play(step = LOTTO_SETTINGS.gameStep.purchase) {
    try {
      if (step === LOTTO_SETTINGS.gameStep.purchase) {
        await this.#purchaseLotto();
        return this.play(LOTTO_SETTINGS.gameStep.winnerNumber);
      }

      if (step === LOTTO_SETTINGS.gameStep.winnerNumber) {
        await this.#createWinnerNumber();
        return this.play(LOTTO_SETTINGS.gameStep.bonusNumber);
      }

      if (step === LOTTO_SETTINGS.gameStep.bonusNumber) {
        await this.#createBonusNumber();
      }
        this.#showResult();
    } catch (e) {
      MissionUtils.Console.print(e.message);
      return this.play(step);
    }
  }

  async #purchaseLotto() {
    this.#price = await InputView.readLinePrice();

    const lottoCount = this.#getLottoCount(this.#price);

    this.#generateLotto(lottoCount);

    OutputView.printLotto(this.#lottoList, lottoCount);
  }

  #generateLotto(lottoCount) {
    this.#lottoList = range(lottoCount).map(() =>
      new Lotto(this.#sortNumber(this.#getRandomLottoNumber())));
  }

  async #createWinnerNumber() {
    this.#winnerNumbers = await InputView.readLineNumber();
  }

  async #createBonusNumber() {
    const bonusNumber = await InputView.readLineBonusNumber();

    this.#lottoWinner = new LottoWinner(this.#winnerNumbers, bonusNumber);
  }

  #showResult() {
    const lottoResult = new LottoResult(this.#lottoList, this.#lottoWinner);
    const rateOfReturn = lottoResult.calculateResult();
    const result = lottoResult.getResult();

    OutputView.printStatisticsResult(result, rateOfReturn);
  }

  #getRandomLottoNumber() {
    return MissionUtils.Random.pickUniqueNumbersInRange(
      LOTTO_SETTINGS.minNumber,
      LOTTO_SETTINGS.maxNumber,
      LOTTO_SETTINGS.numberLength
    );
  }

  #sortNumber(numbers) {
    return numbers.sort((a, b) => a - b);
  }

  #getLottoCount(number) {
    return number / LOTTO_SETTINGS.minimumPrice;
  }
}

export default LottoGame;
