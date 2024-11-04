import { MissionUtils } from "@woowacourse/mission-utils";
const LOTTO_NUMBER_MIN = 1;
const LOTTO_NUMBER_MAX = 45;
const LOTTO_NUMBER_COUNT = 6;
const FIRST_PRIZE = ["1등", 2000000000];
const SECOND_PRIZE = ["2등", 30000000];
const THIRD_PRIZE = ["3등", 1500000];
const FOURTH_PRIZE = ["4등", 50000];
const FIFTH_PRIZE = ["5등", 5000];

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

    const numberSet = new Set(numbers);
    if (numberSet.size !== 6) {
      throw new Error("[ERROR] 로또 번호에는 중복된 숫자가 없어야 합니다.");
    }
  }

  getNumbers() {
    return this.#numbers;
  }

  static generateRandomNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(
      LOTTO_NUMBER_MIN,
      LOTTO_NUMBER_MAX,
      LOTTO_NUMBER_COUNT
    ).sort((a, b) => a - b);
  }

  static getScore(userPickedNumbers, lottoNumbers, userPickedBonusNum) {
    let score = 0;
    let bonus = false;

    userPickedNumbers.forEach((userNumber) => {
      for (let i = 0; i < lottoNumbers.length; i++) {
        lottoNumbers[i].getNumbers().forEach((winNum) => {
          if (userNumber === winNum) {
            score++;
          } else if (userPickedBonusNum === winNum) {
            bonus = true;
          }
        });
      }
    });
    return [score, bonus];
  }

  static getResult(scoreObj) {
    const score = scoreObj[0];
    const bonus = scoreObj[1];
    if (score === 6) return FIRST_PRIZE;
    else if (score === 5 && bonus) return SECOND_PRIZE;
    else if (score === 5) return THIRD_PRIZE;
    else if (score === 4) return FOURTH_PRIZE;
    else if (score === 3) return FIFTH_PRIZE;
    else return NO_PRIZE;
  }
}

export default Lotto;
