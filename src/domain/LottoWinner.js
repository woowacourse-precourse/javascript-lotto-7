import { LOTTO_MESSAGES } from "../constants/lottoMessages.js";
import { LOTTO_SETTINGS } from "../constants/lottoSettings.js";

class LottoWinner {
  #numbers;
  #bonusNumber;

  constructor(numbers, bonusNumber) {
    this.#validateParseNumbers(numbers);
    this.#validateParseBonusNumber(bonusNumber);
    this.#validateHasSameNumber(numbers, bonusNumber);
    this.#numbers = numbers;
    this.#bonusNumber = bonusNumber;
  }

  #validateParseNumbers(input) {
    this.#validateNumberIsSix(input);
    input.forEach((number) => this.#validateNumberRange(number));
    input.forEach((number) => this.#validateIsNaN(number));
    input.forEach((number) => {
      const checkDuplicate = input.filter((el) => (el === number));
      this.#validateIsDuplicate(checkDuplicate);
    });
  }

  #validateParseBonusNumber(parseBonusNumber) {
    this.#validateNumberRange(parseBonusNumber);
    this.#validateIsNaN(parseBonusNumber);
  }

  #validateHasSameNumber(number, bonus) {
    number.forEach((input) => this.#validateBonus(input, bonus));
  }

  #validateNumberIsSix(numbers) {
    if (numbers.length !== LOTTO_SETTINGS.numberLength) {
      throw new Error(LOTTO_MESSAGES.error.numberCountNotSix);
    }
  }

  #validateIsDuplicate(input) {
    if (input.length > LOTTO_SETTINGS.minNumber) {
      throw new Error(LOTTO_MESSAGES.error.duplicatedNumber);
    }
  }

  #validateNumberRange(number) {
    if (number <= 0 || number >= 46) {
      throw new Error(LOTTO_MESSAGES.error.numberRangeOver);
    }
  }

  #validateIsNaN(number) {
    if (Number.isNaN(number)) {
      throw new Error(LOTTO_MESSAGES.error.inputNaN);
    }
  }

  #validateBonus(input, bonus) {
    if (input === bonus) {
      throw new Error(LOTTO_MESSAGES.error.BonusNumberIsInLotto);
    }
  }

  // TODO 추가 구현
}

export default LottoWinner;
