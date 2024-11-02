import Validator from "../util/Validator.js";

const INVALID_ANSWER_COUNT = 2;
const SCORE_FOR_BONUS = 5;
const BONUS_SCORE = 7;
const WINNING_STATS_OFFSET = 3;

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validator = new Validator();
    this.#numbers = this.#validate(numbers);
  }

  #validate(numbers) {
    const intNumbers = this.validator.isAnswerNumber(numbers);
    this.validator.isAnswerValidCount(intNumbers);
    this.validator.isAnswerNotDuplicate(intNumbers);
    this.validator.isAnswerInRange(intNumbers);
    return intNumbers;
  }
  //정답 개수별 통계
  countWinningStats(lottoNumbers, bonusNumber) {
    let winningCount = [0, 0, 0, 0, 0];
    let result = this.calculateWinningStats(lottoNumbers, bonusNumber);
    result = result.filter((i) => i > INVALID_ANSWER_COUNT);
    result.map((i) => (winningCount[i - WINNING_STATS_OFFSET] += 1));
    return winningCount;
  }
  //각 로또 번호 배열별 정답 개수 계산
  calculateWinningStats(lottoNumbers, bonusNumber) {
    let correctScore = [];
    for (let numberArray of lottoNumbers) {
      let winning = this.#numbers.filter((i) => numberArray.includes(i)).length;
      if (winning == SCORE_FOR_BONUS) {
        winning = this.isGetBonus(numberArray, bonusNumber);
      }
      correctScore.push(winning);
    }
    return correctScore;
  }
  isGetBonus(numberArray, bonusNumber) {
    let winning = SCORE_FOR_BONUS;
    if (numberArray.includes(bonusNumber)) {
      winning = BONUS_SCORE;
    }
    return winning;
  }
}

export default Lotto;
