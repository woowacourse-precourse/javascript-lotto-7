class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  // TODO: validate 함수 추가
  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  #sortLottoNumbers() {
    return this.#numbers.sort((a, b) => a - b);
  }

  createLotto() {
    const lotto = this.#sortLottoNumbers();
    return lotto;
  }
}

export default Lotto;
