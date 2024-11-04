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
    let scores = [];
    lottoNumbers.forEach((lottoSet) => {
      const winNum = lottoSet.getNumbers(); // 로또세트 순서대로 하나 가져오기
      let score = 0; // 각 로또세트 별 점수 세고 계속 초기화되는 i 이터레이터
      let isBonusMatched = 0;

      // 사용자 번호와 로또 번호 비교
      userPickedNumbers.forEach((userNumber) => {
        if (winNum.includes(userNumber)) {
          score++;
        }
      });

      // 보너스 번호 확인
      if (winNum.includes(userPickedBonusNum)) {
        isBonusMatched = 1;
      }

      // 점수 객체를 scores 배열에 추가
      scores.push({ score, isBonusMatched });
    });
    return [score, bonus];

    return scores; // {점수, 보너스여부(1)} 객체가 한 칸씩 들어가있는 배열 반환
  }
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
