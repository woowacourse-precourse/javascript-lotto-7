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
    let returnRate;
    for (let lotto of lottos) {
      let rank = this.checkWinNum(lotto, bonus);
      if (rank !== -1) {
        result[rank] += 1;
      }
    }
    returnRate = this.calculateMoney(result, money);
    this.printResult(result, returnRate);
  }

  checkWinNum(lotto, bonus) {
    let result = 0;
    let bonusResult = 0;
    for (let num of lotto) {
      if (this.#numbers.includes(num)) {
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
    } else if (result === 0 || result === 1 || result === 2) {
      return -1;
    }
  }

  calculateMoney(result, money) {
    let winMoney = 0;
    let returnRate = 0;
    let awardList = [5000, 50000, 1500000, 30000000, 2000000000]
    for (let i = 0; i < 5; i++) {
      winMoney += awardList[i] * result[i];
    }
    returnRate = Math.round(winMoney / money * 10000) / 100;
    return returnRate;
  }

  printResult(result, returnRate) {
    let awardList = ["5,000", "50,000", "1,500,000", "30,000,000", "2,000,000,000"]
    Console.print("\n당첨 통계\n---");
    for (let i = 0; i < 5; i++) {
      if (i < 3) {
        Console.print(`${i + 3}개 일치 (${awardList[i]}원) - ${result[i]}개`)
      } else if (i === 3) {
        Console.print(`5개 일치, 보너스 볼 일치 (${awardList[i]}원) - ${result[i]}개`)
      } else if (i === 4) {
        Console.print(`6개 일치 (${awardList[i]}원) - ${result[i]}개`)
      }
    }
    Console.print(`총 수익률은 ${returnRate}%입니다.`);
  }
}

export default Lotto;
