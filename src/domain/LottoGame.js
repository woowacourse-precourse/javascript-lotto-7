import { MissionUtils } from "@woowacourse/mission-utils";
import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import Lotto from "./Lotto.js";
import LottoWinner from "./LottoWinner.js";
import LottoResult from "./LottoResult.js";
import Utils from "../Utils.js";
import { LOTTO_MESSAGES } from "../constants/lottoMessages.js";
import { LOTTO_SETTINGS } from "../constants/lottoSettings.js";

class LottoGame {
  #lottoList = [];
  #price;
  #lottoWinner;

  async play() {
    await this.#purchaseLotto();
    await this.#createWinnerNumber();
    this.#showResult();
  }

  async #purchaseLotto() {
    this.#price = await InputView.readLinePrice();

    const lottoCount = this.#getLottoCount(this.#price);

    this.#generateLotto(lottoCount);

    OutputView.printLotto(this.#lottoList, lottoCount);
  }

  #generateLotto(lottoCount) {
    this.#lottoList = Utils.range(lottoCount).map(() =>
      new Lotto(this.#sortNumber(this.#getRandomLottoNumber())));
  }

  async #createWinnerNumber() {
    const winnerNumbers = await InputView.readLineNumber();
    const bonusNumber = await InputView.readLineBonusNumber();
  }

  #showResult() {
    const lottoWinner = new LottoWinner(lottoNumbers, parseLottoNumber, parseBonusNumber);
    lottoWinner.matchWinner();
    const result = lottoWinner.checkLottoNumber();

    const lottoResult = new LottoResult(result, this.#price);
    lottoResult.calculateResult();
  }

  getLottoList() {
    return this.#lottoList;
  }

  getPrice() {
    return this.#price;
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
