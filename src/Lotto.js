import { MissionUtils } from "@woowacourse/mission-utils";
const LOTTO_NUMBER_MIN = 1;
const LOTTO_NUMBER_MAX = 45;
const LOTTO_NUMBER_COUNT = 6;

const FIRST_PRIZE_MONEY = 2000000000;
const SECOND_PRIZE_MONEY = 30000000;
const THIRD_PRIZE_MONEY = 1500000;
const FOURTH_PRIZE_MONEY = 50000;
const FIFTH_PRIZE_MONEY = 5000;

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

    return scores; // {점수, 보너스여부(1)} 객체가 한 칸씩 들어가있는 배열 반환
  }

  static getCounts(scoreObj) {
    let count3 = 0,
      count4 = 0,
      count5 = 0,
      countBonus = 0,
      count6 = 0;

    scoreObj.forEach(({ score, isBonusMatched }) => {
      if (score === 6) count6++;
      else if (score === 5 && isBonusMatched) countBonus++;
      else if (score === 5) count5++;
      else if (score === 4) count4++;
      else if (score === 3) count3++;
    });

    return [count3, count4, count5, countBonus, count6];
  }

  static getResultMessage(count3, count4, count5, countB, count6) {
    const RESULT_MESSAGE = `당첨 통계\n---\n
    3개 일치 (5,000원) - ${count3}개\n
    4개 일치 (50,000원) - ${count4}개\n
    5개 일치 (1,500,000원) - ${count5}개\n
    5개 일치, 보너스 볼 일치 (30,000,000원) - ${countB}개\n
    6개 일치 (2,000,000,000원) - ${count6}개\n`;
    return RESULT_MESSAGE;
  }

  static calculateTotalPrizeMoney(countArr) {
    let totalPrizeMoney = 0;
    for (let i = 0; i < countArr.length; i++) {
      if (i === 0) {
        totalPrizeMoney += FIFTH_PRIZE_MONEY * countArr[i];
      } else if (i === 1) {
        totalPrizeMoney += FOURTH_PRIZE_MONEY * countArr[i];
      } else if (i === 2) {
        totalPrizeMoney += THIRD_PRIZE_MONEY * countArr[i];
      } else if (i === 3) {
        totalPrizeMoney += SECOND_PRIZE_MONEY * countArr[i];
      } else if (i === 4) {
        totalPrizeMoney += FIRST_PRIZE_MONEY * countArr[i];
      }
    }

    return totalPrizeMoney;
  }

  static getProfitRatio(lottoCost, prize) {
    let ratio = prize / lottoCost;
    ratio = Math.trunc(ratio * 10000);
    ratio = Math.round(ratio);
    ratio = ratio / 100;

    return ratio;
  }

  static isValidLottoNumberRange(number) {
    return number >= LOTTO_NUMBER_MIN && number <= LOTTO_NUMBER_MAX;
  }

  static hasDuplicatedLottoNumber(numbers) {
    const numberSet = new Set(numbers);
    return numberSet.size !== numbers.length;
  }
}

export default Lotto;
