import { LOTTO } from './constants/lotto.js';
import { ERROR_MESSAGE } from './constants/message.js';

class Lotto {
  #numbers;
  static winnings = [
    { rank: 5, basicCount: 3, bonusCount: 0, prize: 5000 },
    { rank: 4, basicCount: 4, bonusCount: 0, prize: 50000 },
    { rank: 3, basicCount: 5, bonusCount: 0, prize: 1500000 },
    { rank: 2, basicCount: 5, bonusCount: 1, prize: 30000000 },
    { rank: 1, basicCount: 6, bonusCount: 0, prize: 2000000000 },
  ];

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (!Validate.arrayCount(numbers, LOTTO.BASIC_COUNT))
      throw new Error(ERROR_MESSAGE.LOTTO_NUMBERS_COUNT_IS_NOT_BASIC_COUNT);

    if (!Validate.uniqueArray(numbers)) throw new Error(ERROR_MESSAGE.LOTTO_NUMBERS_IS_NOT_UNIQUE);
  }

  // TODO: 추가 기능 구현
  static getWinnings() {
    return Lotto.winnings;
  }
}

export default Lotto;
