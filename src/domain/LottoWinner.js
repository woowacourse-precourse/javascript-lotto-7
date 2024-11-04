import { LOTTO_MESSAGES } from "../constants/lottoMessages.js";
import { LOTTO_SETTINGS } from "../constants/lottoSettings.js";

class LottoWinner {
  #numbers;
  #bonusNumber;

  constructor(numbers, bonusNumber) {
    this.#validateNumbers(numbers, bonusNumber);
    this.#numbers = numbers;
    this.#bonusNumber = bonusNumber;
  }

  matchRate(lotto) {
    const count = this.#matchCount(lotto.getNumbers());
    const isBonus = this.#isMatchBonus(lotto.getNumbers());
    return this.#calculateRank(count, isBonus);
  }

  #matchCount(numbers) {
    return numbers.filter((number) =>
      this.#numbers.includes(number)).length;
  }

  #isMatchBonus(numbers) {
    return numbers.includes(this.#bonusNumber);
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

  #validateNumbers(numbers, bonusNumber) {
    this.#validateHasSameNumber(numbers, bonusNumber);
  }

  #validateHasSameNumber(numbers, bonusNumber) {
    numbers.forEach((input) => this.#validateBonus(input, bonusNumber));
  }

  #validateBonus(input, bonusNumber) {
    if (input === bonusNumber) {
      throw new Error(LOTTO_MESSAGES.error.BonusNumberIsInLotto);
    }
  }
}

export default LottoWinner;
