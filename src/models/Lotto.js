import {LOTTO_NUMBER_COUNT, MAX_NUMBER, MIN_NUMBER} from "../constants/gameConstants.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.sort((a,b) => a - b);
  }

  #validate(numbers) {
    if (numbers.length !== LOTTO_NUMBER_COUNT) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (new Set(numbers).size !== LOTTO_NUMBER_COUNT) {
      throw new Error("[ERROR] 로또 번호에 중복된 숫자가 있습니다.")
    }
    if (!numbers.every(num =>
        Number.isInteger(num) &&
        num >= MIN_NUMBER &&
        num <= MAX_NUMBER
    )) {
      throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 정수여야 합니다.')
    }
  }

  match(winnersNumbers, bonusNumber) {
    const matchCount = this.#numbers.filter(num =>
    winnersNumbers.includes(num)
    ).length;

    const matchBonus = this.#numbers.includes(bonusNumber);
    return { matchCount, matchBonus };
  }

  getNumbers() {
    return [...this.#numbers];
  }
}

export default Lotto;
