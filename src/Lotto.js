class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  get lottoNumbers() {
    return this.#numbers;
  }

  #validate(numbers) {
    const numberSizwErrorMessage = '[ERROR] 로또 번호는 6개여야 합니다.';

    if (numbers.length !== 6) {
      throw new Error(numberSizwErrorMessage);
    }

    const set = new Set(numbers);
    const numberDuplicateErrorMessage = '[ERROR] 로또 번호가 중복되었습니다. 다시 실행해주세요.';

    if (numbers.length !== set.size) {
      throw new Error(numberDuplicateErrorMessage);
    }
  }
}

export default Lotto;
