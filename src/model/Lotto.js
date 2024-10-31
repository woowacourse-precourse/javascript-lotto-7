class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }
  isNumber(numbers) {
    const condition =
      numbers.filter((i) => Number.isNaN(Number(i, 10))).length == 0;
    if (!condition) {
      throw new Error("[ERROR] 로또 번호는 숫자만 입력 가능합니다.");
    }
  }
  isValidCount(numbers) {
    const intNumbers = numbers.map((i) => Number(i));
    const isCountSatisfied = numbers.length == 6;
    if (!isCountSatisfied) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    return intNumbers;
  }
  isNotDuplicate(intNumbers) {
    const numberSet = new Set(intNumbers);
    const isNotDuplicate = numberSet.size == 6;
    if (!isNotDuplicate) {
      throw new Error("[ERROR] 로또 번호는 중복된 숫자를 가질 수 없습니다.");
    }
  }
  isInRange(intNumbers) {
    const isInRange = intNumbers.filter((i) => i > 45 || i < 1).length == 0;
    if (!isInRange) {
      throw new Error("[ERROR] 로또 번호는 1~45 사이 숫자만 가능합니다.");
    }
  }
  #validate(numbers) {
    this.isNumber(numbers);
    const intNumbers = this.isValidCount(numbers);
    this.isNotDuplicate(intNumbers);
    this.isInRange(intNumbers);
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
