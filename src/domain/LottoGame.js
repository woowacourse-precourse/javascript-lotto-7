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
  #lotto = [];
  #price;

  async play() {
    await this.#purchaseLotto();
    await this.#matchingLottoWinner();
    this.#showResult();
  }

  async #purchaseLotto() {
    const { prise, parsePrice } = await InputView.readLinePrice();

    this.validatePrice(prise);
    this.validateParsePrice(parsePrice);

    this.#price = parsePrice;

    const getLottoCount = (number) => number / LOTTO_SETTINGS.minimumPrice;
    const lottoCount = getLottoCount(this.#price);

    this.#generateLotto(lottoCount);

    const lottoNumbers = this.#lotto.map((lotto) => lotto.getNumbers());

    OutputView.printLottoCount(lottoCount)
    lottoNumbers.forEach((number) => OutputView.printLotto(number));

    const { trimLotto, parseLottoNumber } = await InputView.readLineNumber();
    this.#validateNumber(trimLotto);

    const { bonusNumber, parseBonusNumber } = await InputView.readLineBonusNumber();
    this.#validateBonusNumber(bonusNumber);

    const lottoWinner = new LottoWinner(lottoNumbers, parseLottoNumber, parseBonusNumber);
    lottoWinner.matchWinner();

    const lottoResult = new LottoResult(this.#price);
    // lottoWinner.checkLottoNumber(result);
    lottoResult.calculateResult();
  }

  #generateLotto(lottoCount) {
    this.#lotto = Utils.range(lottoCount).map(() => {
      return new Lotto(this.#sortNumber(this.#getRandomLottoNumber()));
    });
  }

  #matchingLottoWinner() {
  }

  #showResult() {
  }

  getLotto() {
    return this.#lotto;
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

  validatePrice(input) {
    this.#validateIsInteger(input);
  }

  validateParsePrice(input) {
    this.#validateIsNumber(input);
    this.#validateIsOverThousand(input);
    this.#validateIsMultiplesOfThousand(input);
  }

  #validateIsNumber(input) {
    if (typeof input !== 'number') {
      throw new Error(LOTTO_MESSAGES.error.inputNaN);
    }
  }

  #validateIsOverThousand(input) {
    if (input < LOTTO_SETTINGS.minimumPrice) {
      throw new Error(LOTTO_MESSAGES.error.priceUnderThousands);
    }
  }

  #validateIsMultiplesOfThousand(input) {
    if (input % LOTTO_SETTINGS.minimumPrice !== 0) {
      throw new Error(LOTTO_MESSAGES.error.priceNotMultipleOfThousands);
    }
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
