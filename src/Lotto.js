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
  }

  getNumbers() {
    return this.#numbers;
  }

  countMatchingNumbers(numbers) {
    const winningNumbers = [...numbers];
    const lottoNumberSet = new Set([...this.#numbers]);
    const matchingNumbers = winningNumbers.filter((number) =>
      lottoNumberSet.has(number),
    );

    return matchingNumbers.length;
  }
}

export default Lotto;
