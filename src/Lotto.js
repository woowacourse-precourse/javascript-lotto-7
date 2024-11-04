import { MissionUtils } from "@woowacourse/mission-utils";

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

    const hasDuplicate = new Set(numbers).size !== numbers.length;
    if (hasDuplicate) {
      throw new Error("[ERROR] 로또 번호에 중복된 숫자가 있습니다.");
    }

    numbers.forEach((num) => {
      if (num < 1 || num > 45) {
        throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
      }
    });
  }

  static generateRandomNumbers() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    return numbers.sort((a, b) => a - b); // 오름차순 정렬
  }

  get numbers() {
    return this.#numbers;
  }

  static getStatistics(userNumbers, winningNumbers, bonusNumber) {
    const result = {
      "3개 일치 (5,000원)": 0,
      "4개 일치 (50,000원)": 0,
      "5개 일치 (1,500,000원)": 0,
      "5개 일치, 보너스 볼 일치 (30,000,000원)": 0,
      "6개 일치 (2,000,000,000원)": 0,
    };

    const winningCount = winningNumbers.filter((num) =>
      userNumbers.includes(num)
    ).length;

    const isBonusMatched = userNumbers.includes(bonusNumber);

    if (winningCount === 6) result["6개 일치 (2,000,000,000원)"]++;
    else if (winningCount === 5 && isBonusMatched)
      result["5개 일치, 보너스 볼 일치 (30,000,000원)"]++;
    else if (winningCount === 5) result["5개 일치 (1,500,000원)"]++;
    else if (winningCount === 4) result["4개 일치 (50,000원)"]++;
    else if (winningCount === 3) {
      result["3개 일치 (5,000원)"]++;
      if (isBonusMatched) {
        result["3개 일치 (5,000원)"]--;
      }
    }

    return result;
  }

  static getTotalStatistics(userLottos, winningNumbers, bonusNumber) {
    const totalStatistics = {
      "3개 일치 (5,000원)": 0,
      "4개 일치 (50,000원)": 0,
      "5개 일치 (1,500,000원)": 0,
      "5개 일치, 보너스 볼 일치 (30,000,000원)": 0,
      "6개 일치 (2,000,000,000원)": 0,
    };

    userLottos.forEach((userLotto) => {
      const statistics = Lotto.getStatistics(
        userLotto.numbers,
        winningNumbers,
        bonusNumber
      );
      Object.keys(totalStatistics).forEach((key) => {
        totalStatistics[key] += statistics[key];
      });
    });

    return totalStatistics;
  }
}

export default Lotto;
