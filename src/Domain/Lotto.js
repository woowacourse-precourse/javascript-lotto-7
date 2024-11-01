import { BASIC_ERROR } from '../Constants/Message.js';
import { LOTTO_NUMBER_STANDARD, WINNER } from '../Constants/Constant.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== LOTTO_NUMBER_STANDARD.length) {
      throw new Error(BASIC_ERROR.invalidLength);
    }
  }

  getNumbers() {
    return this.#numbers;
  }

  calculateWinningLotto(winningNumbers) {
    return this.#numbers.filter((number) => winningNumbers.includes(number))
      .length;
  }

  compareMatchNumber(matchNumberCount, bonusNumber) {
    const resultTable = {
      [WINNER[1].match]: WINNER[1].rank,
      [WINNER[2].match]: this.#numbers.includes(bonusNumber)
        ? WINNER[2].rank
        : WINNER[3].rank,
      [WINNER[4].match]: WINNER[4].rank,
      [WINNER[5].match]: WINNER[5].rank,
    };

    return resultTable[matchNumberCount] || WINNER[0].rank;
  }

  calculateLottoResult(winningNumbers, bonusNumber) {
    const matchNumberCount = this.calculateMatchNumber(winningNumbers);
    const lottoresult = this.compareMatchNumber(matchNumberCount, bonusNumber);
    return lottoresult;
  }
}

export default Lotto;
