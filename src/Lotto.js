import matchLottoNumbers from "./lottoUtils/matchLottoNumbers";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = this.#sortNumbers(numbers);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
  getNumbers() {
    return this.#numbers;
  }

  #sortNumbers(numbers) {
    return numbers.sort((a, b) => a - b);
  }

  winningRank(winningNumbers, bonusNumber) {
    const matchedCount = matchLottoNumbers(this.#numbers, winningNumbers);
    const isBonusNumberMatched = this.#numbers.includes(bonusNumber);

    if (matchedCount === 6) return 1;
    if (matchedCount === 5 && isBonusNumberMatched) return 2;
    if (matchedCount === 5) return 3;
    if (matchedCount === 4) return 4;
    if (matchedCount === 3) return 5;

    return -1;
  }
}

export default Lotto;
