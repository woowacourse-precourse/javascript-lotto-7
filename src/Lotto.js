class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }

    // 중복된 번호가 있을 경우 에러 처리
    const uniqueWinningNumbers = new Set(numbers);
    if (numbers.length !== uniqueWinningNumbers.size) {
      throw new Error('[ERROR] 로또 번호는 중복되면 안됩니다.');
    }

    const allNumbersCheck = numbers.every((element) => typeof element === 'number');
    if (allNumbersCheck !== true) {
      throw new Error('[ERROR] 모든 로또 번호가 숫자가 아닙니다.');
    }

    const rangeCheck = numbers.every((element) => element > 0 && element < 46);
    if (rangeCheck !== true) {
      throw new Error('[ERROR] 로또 번호가 1부터 45까지가 아닙니다.');
    }
  }
}

export default Lotto;
