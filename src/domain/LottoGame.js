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

    const { trimLotto, parseLottoNumber } = await InputView.readLineNumber();
    this.#validateNumber(trimLotto);

    const { bonusNumber, parseBonusNumber } = await InputView.readLineBonusNumber();
    this.#validateBonusNumber(bonusNumber);

    const lottoWinner = new LottoWinner(lottoNumbers, parseLottoNumber, parseBonusNumber);
    lottoWinner.matchWinner();
    const result = lottoWinner.checkLottoNumber();

    const lottoResult = new LottoResult(result, this.#price);
    lottoResult.calculateResult();
  }

  #generateLotto(lottoCount) {
    this.#lottoList = Utils.range(lottoCount).map(() => {
      return new Lotto(this.#sortNumber(this.#getRandomLottoNumber()));
    });
  }

  #createWinnerNumber() {

  }

  #showResult() {
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

  #validateIsInteger(input) {
    if (input.includes('.')) {
      throw new Error(LOTTO_MESSAGES.error.canNotUseDecimal);
    }
  }

  #validateNumber(trimLotto) {
    this.#validateLottoNumber(trimLotto);
    this.#validateNumberIsInteger(trimLotto);
  };

  #validateBonusNumber(bonusNumber) {
    this.#validateIsOneNumber(bonusNumber);
    this.#validateIsInteger(bonusNumber);
  };

  #validateLottoNumber(input) {
    if (input.length !== LOTTO_SETTINGS.numberLength) {
      throw new Error(LOTTO_MESSAGES.error.numberCountNotSix);
    }
  }

  #validateIsOneNumber(input) {
    if (input.includes(',')) {
      throw new Error(LOTTO_MESSAGES.error.BonusCountNotOne);
    }
  }

  #validateNumberIsInteger(input) {
    input.forEach((number) => this.#validateIsInteger(number));
  }
}

export default LottoGame;
