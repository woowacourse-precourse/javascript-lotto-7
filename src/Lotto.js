import { LOTTO_CONSTANTS, LOTTO_MESSAGES } from './util/constant.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    const isDuplicate = new Set(numbers).size !== LOTTO_CONSTANTS.length;
    const isNotInRange = numbers.some(
      (number) =>
        number < LOTTO_CONSTANTS.minLottoNumber ||
        number > LOTTO_CONSTANTS.maxLottoNumber
    );

    if (numbers.length !== LOTTO_CONSTANTS.length)
      throw new Error(LOTTO_MESSAGES.notLength6);
    if (isDuplicate) throw new Error(LOTTO_MESSAGES.notDuplcate);
    if (isNotInRange) throw new Error(LOTTO_MESSAGES.notInRange);
  }

  // TODO: 추가 기능 구현
  getNumbers() {
    return this.#numbers;
  }

  getRankResult(winningNumbers, bonusNumber) {
    let numberOfWinning = 0;
    let isBonus = false;

    winningNumbers.forEach((winNumber) => {
      if (this.#numbers.includes(Number(winNumber))) numberOfWinning += 1;
    });

    if (this.#numbers.includes(Number(bonusNumber))) isBonus = true;
    if (numberOfWinning === 6) return 1;
    if (numberOfWinning === 5 && isBonus) return 2;
    return 8 - numberOfWinning;
  }
}

export default Lotto;
