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
    const set = new Set(numbers);
    if (numbers.length !== set.size) {
      throw new Error("[ERROR] 중복된 숫자능 불가능 합니다.");
    }
    numbers.forEach((num) => {
      if (num < 1 || num > 45) {
        throw new Error("[ERROR] 로또 번호는 1부터 45까지 입니다.");
      }
      if (Number.isNaN(num)) {
        throw new Error("[ERRROR] 로또 번호 중 숫자가 아닌 것이 있습니다.");
      }
      if (num === "") {
        throw new Error("[ERROR] 로또 번호 중 빈칸이 있습니다.");
      }
    });
  }
  getLotto() {
    return this.#numbers.sort((a, b) => a - b);
  }
}

export default Lotto;
