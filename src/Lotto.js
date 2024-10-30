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

  formatSortedNumber() {
    return this.#numbers.sort((a, b) => a - b).join(', ');
  }

  // TODO: 당첨 번호와 보너스 번호가 일치하는 갯수 반환
}

export default Lotto;
