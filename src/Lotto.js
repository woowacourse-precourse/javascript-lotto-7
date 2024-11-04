import { Validator } from "./Validator";

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
    Validator.isValidWinningNumbers(numbers);
  }

  // TODO: 추가 기능 구현
  getLottoNumbers() {
    return this.#numbers;
  }

  matchLottoNumbers(winningNumbers, bonus) {
    let matchCount = winningNumbers.filter((num) =>
      this.#numbers.includes(num)
    ).length;
    let hasBonus = this.#numbers.includes(bonus);

    return { matchCount, hasBonus };
  }
}

export default Lotto;
