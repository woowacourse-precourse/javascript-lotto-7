import { BASIC_ERROR } from '../Constants/Message.js';
import {
  LOTTO_NUMBER_STANDARD,
  fifthWinner,
  fourthWinner,
  thirdWinner,
  secondWinner,
  firstWinner,
  losing_ticket,
} from '../Constants/Constant.js';

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

  printLottoNumbers() {
    Console.print(`[${this.#numbers.join(', ')}]`);
  }

  calculateWinningLotto(winningNumbers, bonusNumber) {
    const matchNumberCount =
      12 - new Set([...this.#numbers, ...winningNumbers]).size;

    const resultTable = {
      [firstWinner.match]: firstWinner.rank,
      [secondWinner.match]: this.#numbers.includes(bonusNumber)
        ? secondWinner.rank
        : thirdWinner.rank,
      [fourthWinner.match]: fourthWinner.rank,
      [fifthWinner.match]: fifthWinner.rank,
    };

    return resultTable[matchNumberCount] || losing_ticket.rank;
  }
}

export default Lotto;
