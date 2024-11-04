class Lotto {
  constructor(numbers) {
    if (numbers.length !== 6 || new Set(numbers).size !== 6) {
      throw new Error(
        "[ERROR] 로또 번호는 중복되지 않는 6개의 숫자여야 합니다."
      );
    }
    this.numbers = numbers;
  }

  getNumbers() {
    return this.numbers;
  }
}

export default Lotto;
