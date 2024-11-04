import { Console } from '@woowacourse/mission-utils';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    const uniqueArray = new Set(numbers);
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    for (let num of numbers) {
      if (num < 0 || num > 45) {
        throw new Error("[ERROR] 당첨번호는 1부터 45까지 사이의 수여야 합니다.");
      }
      if (isNaN(num)) {
        throw new Error("[ERROR] 숫자를 입력해야 합니다.");
      }
    }
    if (uniqueArray.size !== numbers.length) {
      throw new Error("[ERROR] 당첨번호는 중복되지 않는 6개 숫자여야 합니다.");
    }
  }

  getResult(money, lottos, bonus) {
    let result = Array(5).fill(0);
    for (let lotto of lottos) {
      let rank = this.checkWinNum(lotto, bonus)
      result[rank] += 1;
    }
  }

  checkWinNum(lotto, bonus) {
    let result = 0;
    let bonusResult = 0;
    for (let num of lotto) {
      if (this.#numbers.include(num)) {
        result += 1;
      } else if (bonus === num) {
        bonusResult += 1
      }
    }
    return this.ranking(result, bonusResult);
  }

  ranking(result, bonusResult) {
    if (bonusResult === 1 && result === 5) {
      return 3;
    } else if (bonusResult === 0 && result === 5) {
      return 2;
    } else if (result === 6) {
      return 4;
    } else if (result === 4) {
      return 1;
    } else if (result === 3) {
      return 0;
    }
  }
}

export default Lotto;
