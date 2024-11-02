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

    const arr = [...numbers];
    const onlyNumber = arr.filter((number) => number === ',');
    if (onlyNumber.length !== 5) {
      throw new Error('[ERROR] 로또 번호는 쉼표(,) 로 구분되어야 합니다.');
    }
  }
}

export default Lotto;
