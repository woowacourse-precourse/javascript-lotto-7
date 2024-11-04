import { Random } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  static createLottoNumber() {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    return new Lotto(numbers.sort((a, b) => a - b));
  }

  static createLotsLotto(count) {
    const lottos = [];
    for (let i = 0; i < count; i++) {
      lottos.push(this.createLottoNumber());
    }
    return lottos;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (numbers.some(num => num < 1 || num > 45)) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
    if (new Set(numbers).size !== numbers.length) {
      throw new Error("[ERROR] 로또 번호는 중복될 수 없습니다.");
    }
  }

  getNumbers() {
    return [...this.#numbers];
  }

  countMatchingNumbers(winningNumbers) {
    return this.#numbers.filter(number => 
      winningNumbers.includes(number)
    ).length;
  }

  contains(number) {
    return this.#numbers.includes(number);
  }
}

export default Lotto;
