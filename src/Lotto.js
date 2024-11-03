class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;

    this.uniqueWinningNumbers = new Set(numbers);
    this.allNumbersCheck = numbers.every((element) => typeof element === 'number');
    this.rangeCheck = numbers.every((element) => element > 0 && element < 46);

    this.#validate(numbers);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    if (numbers.length !== this.uniqueWinningNumbers.size) {
      throw new Error('[ERROR] 로또 번호는 중복되면 안됩니다.');
    }
    if (this.allNumbersCheck !== true) {
      throw new Error('[ERROR] 모든 로또 번호가 숫자가 아닙니다.');
    }
    if (this.rangeCheck !== true) {
      throw new Error('[ERROR] 로또 번호가 1부터 45까지가 아닙니다.');
    }
  }
}

export default Lotto;
