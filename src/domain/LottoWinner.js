import { LOTTO_MESSAGES } from "../constants/lottoMessages.js";
import { LOTTO_SETTINGS } from "../constants/lottoSettings.js";

class LottoWinner {
  #numbers;
  #bonusNumber;
  #matchBonus = false;

  constructor(numbers, bonusNumber) {
    this.#validateParseNumbers(numbers);
    this.#validateParseBonusNumber(bonusNumber);
    this.#validateHasSameNumber(numbers, bonusNumber);
    this.#numbers = numbers;
    this.#bonusNumber = bonusNumber;
  }

  matchWinner(numbers) {
    const count = this.#matchCount(numbers);
    return this.#calculateRank(count, this.#matchBonus);
  }

  checkMatchBonus(numbers) {
    numbers.map((number) => {
      return number.includes(this.#bonusNumber);
    });
  }

  checkLottoNumber(lottoNumbers, winnerNumbers, result) {
    const matchCount = lottoNumbers.filter((lottoNumber) =>
      winnerNumbers.includes(lottoNumber)).length;
    const rank = this.#calculateRank(matchCount, this.#matchBonus);
    result[rank] += 1;
  }

  #matchCount(numbers) {
    return numbers.filter((number) =>
      this.#numbers.includes(number)).length;
  }

  #calculateRank(matchCount, matchBonus) {
    if (matchCount === LOTTO_SETTINGS.matchCount.first) {
      return 1;
    }
    if (matchCount === LOTTO_SETTINGS.matchCount.second && matchBonus) {
      return 2;
    }
    if (matchCount === LOTTO_SETTINGS.matchCount.third) {
      return 3;
    }
    if (matchCount === LOTTO_SETTINGS.matchCount.fourth) {
      return 4;
    }
    if (matchCount === LOTTO_SETTINGS.matchCount.fifth) {
      return 5;
    }
    return 0;
  }

  getMatchBonus() {
    return this.#matchBonus;
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
}

export default LottoWinner;
