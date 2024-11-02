import { ERROR, INPUT } from './constants/Constants.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  async setJackpotNumber() {
    const jackpotNumber = await Console.readLineAsync(INPUT.JACKPOT);
    this.#numbers = jackpotNumber.split(',');
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR.LOTTO_ARRAY_COUNT);
    }
  }

  getJackpot() {
    return this.#numbers;
  }
}

export default Lotto;
