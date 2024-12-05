class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  isDuplicate(array) {
    const uniqueChars = new Set(array);
    if (uniqueChars.size !== array.length) {
      throw new Error(
        "[ERROR] 로또 번호에 중복된 값이 존재합니다. 다시 입력해주세요."
      );
    }
    return true;
  }
}

export default Lotto;
