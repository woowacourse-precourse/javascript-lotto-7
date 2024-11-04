import { MissionUtils } from "@woowacourse/mission-utils";
import OutputView from "./OutputView.js";
import Utils from "../Utils.js";
import { LOTTO_MESSAGES } from "../constants/lottoMessages.js";
import { LOTTO_SETTINGS } from "../constants/lottoSettings.js";

class InputView {
  static async readLinePrice() {
    const price = await MissionUtils.Console.readLineAsync(
      LOTTO_MESSAGES.input.money
    );
    const parsePrice = parseInt(price, 10);

    this.#validatePrice(price);
    this.#validateParsePrice(parsePrice);

    return parsePrice;
  }

  static async readLineNumber() {
    OutputView.printNewLine();
    const input = await MissionUtils.Console.readLineAsync(
      LOTTO_MESSAGES.input.lottoNumber
    );
    const trimLotto = input.toString().trim().split(',');
    const parseLottoNumber = Utils.getParsingNumber(trimLotto);

    return { trimLotto, parseLottoNumber };
  }

  static async readLineBonusNumber() {
    OutputView.printNewLine();
    const bonusNumber = await MissionUtils.Console.readLineAsync(
      LOTTO_MESSAGES.input.bonusNumber
    );
    const parseBonusNumber = parseInt(bonusNumber, 10);

    return { bonusNumber, parseBonusNumber }
  }

  static #validatePrice(input) {
    this.#validateIsInteger(input);
  }

  static #validateParsePrice(input) {
    this.#validateIsNumber(input);
    this.#validateIsOverThousand(input);
    this.#validateIsMultiplesOfThousand(input);
  }

  static #validateIsInteger(input) {
    if (input.includes('.')) {
      throw new Error(LOTTO_MESSAGES.error.canNotUseDecimal);
    }
  }

  static #validateIsNumber(input) {
    if (typeof input !== 'number') {
      throw new Error(LOTTO_MESSAGES.error.inputNaN);
    }
  }

  static #validateIsOverThousand(input) {
    if (input < LOTTO_SETTINGS.minimumPrice) {
      throw new Error(LOTTO_MESSAGES.error.priceUnderThousands);
    }
  }

  static #validateIsMultiplesOfThousand(input) {
    if (input % LOTTO_SETTINGS.minimumPrice !== 0) {
      throw new Error(LOTTO_MESSAGES.error.priceNotMultipleOfThousands);
    }
  }
}

export default InputView;
