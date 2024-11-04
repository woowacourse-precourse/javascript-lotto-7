class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
    return numbers.map(Number);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    
    if (numbers.some(number => number < 1) || numbers.some(number => 45 < number)) {
      throw new Error("[ERROR] 로또 번호는 1 - 45 만 가능합니다.");
    }
    // 중복숫자
    let setNumbers = new Set(numbers);
    if (numbers.length !== setNumbers.size) {
      throw new Error("[ERROR] 로또 번호는 중복될 수 없습니다.");
    }
    // 문자 포함
    if (numbers.some(number => isNaN(number))) {
      throw new Error("[ERROR] 로또 번호에 문자가 포함될 수 없습니다.");
    }
  }

}
export default Lotto;
