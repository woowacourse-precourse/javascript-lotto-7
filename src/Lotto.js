class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }
//로또 번호의 유효성을 검증
  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    const numberSet = new Set(numbers);
    if (numberSet.size !== 6) {
      throw new Error("[ERROR] 로또 번호에는 중복된 숫자가 없어야 합니다.");
    }
    numbers.forEach((number) => {
      if (!Number.isInteger(number) || number < 1 || number > 45) {
        throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
      }
    });
  }
  getNumbers() {
    return this.#numbers;
  }
  
}

export default Lotto;
