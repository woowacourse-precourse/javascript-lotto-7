import Validator from "../util/Validator.js";

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
  CountWinningStats(lottoNumbers, bonusNumber) {
    let winningCount = [0, 0, 0, 0, 0];
    let result = this.CalculateWinningStats(lottoNumbers, bonusNumber);
    result = result.filter((i) => i > 2);
    result.map((i) => (winningCount[i - 3] += 1));
    return winningCount;
  }
  //각 로또 번호 배열별 정답 개수 계산
  CalculateWinningStats(lottoNumbers, bonusNumber) {
    let correctScore = [];
    for (let numberArray of lottoNumbers) {
      let winning = this.#numbers.filter((i) => numberArray.includes(i)).length;
      if (winning == 5) {
        winning = this.isGetBonus(numberArray, bonusNumber);
      }
      correctScore.push(winning);
    }
    return correctScore;
  }
  isGetBonus(numberArray, bonusNumber) {
    let winning = 5;
    if (numberArray.includes(bonusNumber)) {
      winning = 7;
    }
    return winning;
  }
}

export default Lotto;
