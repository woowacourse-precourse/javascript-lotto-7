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
    if (numbers.some(isNaN)) {
      throw new Error("[ERROR] 로또 번호는 숫자여야 합니다.");
    }
    if (new Set(numbers).size !== numbers.length) {
      throw new Error("[ERROR] 로또 번호는 중복될 수 없습니다.");
    }
    if (numbers.some((number) => number < 1 || number > 45)) {
      throw new Error("[ERROR] 로또 번호는 1에서 45 사이여야 합니다.");
    }
  }
  getLottoNumbers() {
    return this.#numbers;
  }
}
export default Lotto;
