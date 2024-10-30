class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.sort();
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    if (numbers.some((number) => isNaN(number))) {
      throw new Error('[ERROR] 로또 번호는 숫자로 구성되어야 합니다.');
    }
    if (this.isDuplicateValue(numbers)) {
      throw new Error('[ERROR] 로또 번호는 중복이 없어야 합니다.');
    }
    if (numbers.some((number) => number < 1 || number > 45)) {
      throw new Error('[ERROR] 로또 번호는 1~45 사이의 숫자이어야 합니다.');
    }
  }

  isDuplicateValue(list) {
    const set = new Set(list);
    return list.length != set.size;
  }

  getNumbers() {
    return this.#numbers;
  }
}

const lotto = new Lotto([2, 1, 3, 4, 5, 6]);
const numbers = lotto.getNumbers();

export default Lotto;
