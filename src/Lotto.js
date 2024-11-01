class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#checkDuplicate(numbers);
    this.#numbers = numbers;
  }

  get numbers() {
    return this.#numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  #checkDuplicate(numbers) {
    const LOTTO_LENGTH = 6;
    const checked = Array(LOTTO_LENGTH + 1).fill(false);
    for (let i = 0; i < LOTTO_LENGTH; i++) {
      if (checked[numbers[i]]) {
        throw new Error('[ERROR] 로또 번호는 중복될 수 없습니다.');
      }
      checked[numbers[i]] = true;
    }
  }
}

export default Lotto;
