import { LOTTO_MESSAGES } from "../constants/lottoMessages.js";
import { LOTTO_SETTINGS } from "../constants/lottoSettings.js";

class LottoWinner {
  #lotto;
  #numbers;
  #bonusNumber;
  #matchBonus = false;

  constructor(lotto, numbers, bonusNumber) {
    this.#validateNumbers(numbers);
    this.#lotto = lotto;
    this.#numbers = numbers;
    this.#bonusNumber = bonusNumber;
  }

  matchWinner() {
    const count = this.#matchCount(this.#lotto);
    this.#checkMatchBonus(this.#lotto);
    return this.#calculateRank(count, this.#matchBonus);
  }

  #checkMatchBonus(numbers) {
    numbers.forEach((number) => this.#checkBonusNumber(number));
  }

  #checkBonusNumber(number) {
    console.log(number);
    if (number.includes(this.#bonusNumber)) {
      this.#matchBonus = true;
    }
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

  #validateNumbers(numbers, bonusNumber) {
    this.#validateParseNumbers(numbers);
    this.#validateParseBonusNumber(bonusNumber);
    this.#validateHasSameNumber(numbers, bonusNumber);
  }

  #validateParseNumbers(input) {
    this.#validateNumberIsSix(input);
    input.forEach((number) => {
      this.#validateNumberRange(number);
      this.#validateIsNaN(number);
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
