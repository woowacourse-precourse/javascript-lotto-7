import { RULE, ERROR_MESSAGE, LOTTO_PRIZE } from './constants/index.js';
import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class LottoManager {
  validatePrice(price) {
    this.#validatePriceIsNumber(price);
    this.#validatePriceMinimum(price);
    this.#validatePriceDivisible(price);
  }

  validateBonus(bonusNumber, winningNumber) {
    const number = bonusNumber.trim();
    this.#validateBonusIsNumber(number);
    this.#validateBonusRange(number);
    this.#validateBonusDuplication(number, winningNumber);
    return Number(number);
  }

  generateLotto() {
    const lottoNumbers = this.#pickRandomNumbers();
    return new Lotto(lottoNumbers.sort((a, b) => a - b));
  }

  buyLottos(price) {
    const lottoCount = this.#calculateLottoCount(price);
    return this.#generateLottos(lottoCount);
  }

  getWinningLotto(lottoInput) {
    const numbers = this.#splitAndTrimInput(lottoInput);
    return new Lotto(numbers).numbers;
  }

  getResult(lottos, winningNumber, bonusNumber) {
    const result = this.#initializeResult();
    this.#calculateResults(lottos, winningNumber, bonusNumber, result);
    return result;
  }

  #validatePriceIsNumber(price) {
    if (isNaN(price)) {
      throw new Error(ERROR_MESSAGE.NOT_A_NUMBER);
    }
  }

  #validatePriceMinimum(price) {
    if (price < RULE.LOTTO_PRICE) {
      throw new Error(ERROR_MESSAGE.OUT_OF_RANGE_PRICE(RULE.LOTTO_PRICE));
    }
  }

  #validatePriceDivisible(price) {
    if (price % RULE.LOTTO_PRICE !== 0) {
      throw new Error(ERROR_MESSAGE.INVALID_PURCHASE_AMOUNT(RULE.LOTTO_PRICE));
    }
  }

  #validateBonusIsNumber(number) {
    if (isNaN(number)) {
      throw new Error(ERROR_MESSAGE.NOT_A_NUMBER);
    }
  }

  #validateBonusRange(number) {
    if (number < RULE.LOTTO_MIN_NUMBER || number > RULE.LOTTO_MAX_NUMBER) {
      throw new Error(
        ERROR_MESSAGE.OUT_OF_RANGE_NUMBER(RULE.LOTTO_MIN_NUMBER, RULE.LOTTO_MAX_NUMBER),
      );
    }
  }

  #validateBonusDuplication(number, winningNumber) {
    if (winningNumber.includes(number)) {
      throw new Error(ERROR_MESSAGE.DUPLICATE_BONUS_NUMBER);
    }
  }

  #calculateLottoCount(price) {
    return price / RULE.LOTTO_PRICE;
  }

  #generateLottos(count) {
    return Array.from({ length: count }, () => this.generateLotto());
  }

  #pickRandomNumbers() {
    return Random.pickUniqueNumbersInRange(
      RULE.LOTTO_MIN_NUMBER,
      RULE.LOTTO_MAX_NUMBER,
      RULE.LOTTO_BALL_NUMBER,
    );
  }

  #splitAndTrimInput(input) {
    return input.split(RULE.SEPARATOR).map((number) => number.trim());
  }

  #initializeResult() {
    return { 3: 0, 4: 0, 5: 0, 5.5: 0, 6: 0 };
  }

  #calculateResults(lottos, winningNumber, bonusNumber, result) {
    const winningNumbers = winningNumber.map(Number);
    const bonusNum = Number(bonusNumber);

    lottos.forEach((lotto) => {
      const numbers = lotto.numbers.map(Number);
      const matchCount = this.#getMatchCount(numbers, winningNumbers);
      this.#updateResult(result, matchCount, numbers, bonusNum);
    });
  }

  #getMatchCount(numbers, winningNumbers) {
    return numbers.filter((num) => winningNumbers.includes(num)).length;
  }

  #updateResult(result, matchCount, numbers, bonusNum) {
    if (matchCount === 6) {
      result[6]++;
      return;
    }
    if (matchCount === 5 && numbers.includes(bonusNum)) {
      result['5.5']++;
      return;
    }
    if (matchCount === 5) {
      result[5]++;
      return;
    }
    if (matchCount >= 3) {
      result[matchCount]++;
    }
  }

  calculatePrize(result, purchasePrice) {
    const totalPrize = this.#calculateTotalPrize(result);
    return this.#calculatePrizeRate(totalPrize, purchasePrice);
  }

  #calculateTotalPrize(result) {
    return (
      result[3] * LOTTO_PRIZE.FIFTH +
      result[4] * LOTTO_PRIZE.FOURTH +
      result[5] * LOTTO_PRIZE.THIRD +
      result['5.5'] * LOTTO_PRIZE.SECOND +
      result[6] * LOTTO_PRIZE.FIRST
    );
  }

  #calculatePrizeRate(totalPrize, purchasePrice) {
    return ((totalPrize / purchasePrice) * 100).toFixed(1);
  }
}

export default LottoManager;
