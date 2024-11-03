import matchLottoNumbers from "./lottoUtils/matchLottoNumbers.js";
import { RANKS } from "./constants.js";
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

    if (new Set(numbers).size !== 6) {
      throw new Error("[ERROR] 로또 번호는 중복이 없어야 합니다.");
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

    if (matchedCount === 6) return RANKS.FIRST;
    if (matchedCount === 5 && isBonusNumberMatched) return RANKS.SECOND;
    if (matchedCount === 5) return RANKS.THIRD;
    if (matchedCount === 4) return RANKS.FOURTH;
    if (matchedCount === 3) return RANKS.FIFTH;

    return RANKS.NO_PRIZE;
  }
}

export default Lotto;
