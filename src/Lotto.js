import ERROR_MESSAGE from './utils/constants/errorMessage.js';
import CONSTANT from './utils/constants/constant.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    const setNumbers = new Set(numbers);
    if (setNumbers.size !== 6) {
      throw new Error(ERROR_MESSAGE.LOTTO_LENGTH_ERROR);
    }
    this.#validateNumberRange(numbers);
    return numbers;
  }

  #validateNumberRange(numbers) {
    numbers.forEach((number) => {
      if (
        number < CONSTANT.LOTTO_MIN_NUMBER ||
        number > CONSTANT.LOTTO_MAX_NUMBER
      ) {
        throw new Error(ERROR_MESSAGE.LOTTO_NUMBER_RANGE_ERROR);
      }
    });
  }

  // TODO: 추가 기능 구현
  getNumbers() {
    return this.#numbers;
  }

  static compareResult(lotteries, userLotto, userBonus) {
    const matchNumber = Lotto.matchNumber(lotteries, userLotto);
    const matchBonus = Lotto.matchBonusNumber(lotteries, userBonus);
    let lottoResult = [];

    for (let result = 0; result < lotteries.length; result++) {
      let matchLotto = {
        numberMatch: matchNumber[result],
        bonusMatch: matchBonus[result],
      };
      lottoResult.push(matchLotto);
    }
    return lottoResult;
  }

  static matchNumber(lotteries, userLotto) {
    return lotteries.map(
      (lotto) => lotto.filter((num) => userLotto.includes(num)).length,
    );
  }

  static matchBonusNumber(lotteries, userBonus) {
    return lotteries.map((lotto) => lotto.filter((num) => userBonus === num));
  }
}
export default Lotto;
