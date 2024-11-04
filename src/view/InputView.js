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

    this.#validateNumber(trimLotto);
    this.#validateParseNumber(parseLottoNumber);

    return parseLottoNumber;
  }

  static async readLineBonusNumber() {
    OutputView.printNewLine();
    const bonusNumber = await MissionUtils.Console.readLineAsync(
      LOTTO_MESSAGES.input.bonusNumber
    );
    const parseBonusNumber = parseInt(bonusNumber, 10);

    this.#validateBonusNumber(bonusNumber);
    this.#validateParseBonusNumber(parseBonusNumber);

    return parseBonusNumber;
  }

  static #validatePrice(input) {
    this.#validateIsInteger(input);
  }

  static #validateParsePrice(input) {
    this.#validateIsNumber(input);
    this.#validateIsOverThousand(input);
    this.#validateIsMultiplesOfThousand(input);
  }

  static #validateNumber(trimLotto) {
    this.#validateLottoNumber(trimLotto);
    this.#validateNumberIsInteger(trimLotto);
  };

  static #validateBonusNumber(bonusNumber) {
    this.#validateIsOneNumber(bonusNumber);
    this.#validateIsInteger(bonusNumber);
  };

  static #validateParseNumber(numbers, bonusNumber) {
    this.#validateParseNumbers(numbers);
    this.#validateParseBonusNumber(bonusNumber);
  }

  static #validateParseNumbers(input) {
    this.#validateNumberIsSix(input);
    input.forEach((number) => {
      this.#validateNumberRange(number);
      this.#validateIsNaN(number);
      const checkDuplicate = input.filter((el) => (el === number));
      this.#validateIsDuplicate(checkDuplicate);
    });
  }

  static #validateParseBonusNumber(parseBonusNumber) {
    this.#validateNumberRange(parseBonusNumber);
    this.#validateIsNaN(parseBonusNumber);
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

  static #validateLottoNumber(input) {
    if (input.length !== LOTTO_SETTINGS.numberLength) {
      throw new Error(LOTTO_MESSAGES.error.numberCountNotSix);
    }
  }

  static #validateNumberIsInteger(input) {
    input.forEach((number) => this.#validateIsInteger(number));
  }

  static #validateIsOneNumber(input) {
    if (input.includes(',')) {
      throw new Error(LOTTO_MESSAGES.error.BonusCountNotOne);
    }
  }

  static #validateNumberIsSix(numbers) {
    if (numbers.length !== LOTTO_SETTINGS.numberLength) {
      throw new Error(LOTTO_MESSAGES.error.numberCountNotSix);
    }
  }

  static #validateIsDuplicate(input) {
    if (input.length > LOTTO_SETTINGS.minNumber) {
      throw new Error(LOTTO_MESSAGES.error.duplicatedNumber);
    }
  }

  static #validateNumberRange(number) {
    if (number < LOTTO_SETTINGS.minNumber || number > LOTTO_SETTINGS.maxNumber) {
      throw new Error(LOTTO_MESSAGES.error.numberRangeOver);
    }
  }

  static #validateIsNaN(number) {
    if (Number.isNaN(number)) {
      throw new Error(LOTTO_MESSAGES.error.inputNaN);
    }
  }
}

export default InputView;
