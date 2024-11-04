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

  checkLottoNumber() {
    const matchCount = this.#lotto.filter((lottoNumber) => this.#numbers.includes(lottoNumber)).length;
    const rank = this.#calculateRank(matchCount, this.#matchBonus);
    this.#result[rank] += 1;
    return this.#result;
  }

  #matchCount(numbers) {
    return numbers.filter((number) =>
      this.#numbers.includes(number)).length;
  }

  #checkMatchBonus(numbers) {
    numbers.forEach((number) => this.#checkBonusNumber(number));
  }

  #checkBonusNumber(number) {
    if (number.includes(this.#bonusNumber)) {
      this.#matchBonus = true;
    }
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
    this.#validateHasSameNumber(numbers, bonusNumber);
  }

  #validateHasSameNumber(number, bonus) {
    number.forEach((input) => this.#validateBonus(input, bonus));
  }

  #validateBonus(input, bonus) {
    if (input === bonus) {
      throw new Error(LOTTO_MESSAGES.error.BonusNumberIsInLotto);
    }
  }
}

export default LottoWinner;
