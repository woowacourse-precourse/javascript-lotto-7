import { Console } from '@woowacourse/mission-utils';

class Result {
  #first;
  #second;
  #third;
  #fourth;
  #fifth;
  #prizeMoney;
  #rateOfReturn;

  constructor() {
    this.#first = 0;
    this.#second = 0;
    this.#third = 0;
    this.#fourth = 0;
    this.#fifth = 0;
  }

  calcRanking(lottoList, winningNumbers, bonusNumber) {
    lottoList.forEach((lotto) => {
      const numbers = lotto.getNumbers;
      const matchNum = numbers.filter(it => winningNumbers.includes(it));
      const matchNumLen = matchNum.length;
      this.rank(numbers, matchNumLen, bonusNumber);
    })
  }

  calcPrizeMoney() {
    this.#prizeMoney = 5000 * this.#fifth
                      + 50000 * this.#fourth
                      + 1500000 * this.#third
                      + 30000000 * this.#second
                      + 2000000000 * this.#first;
  }

  calcRateOfReturn(purchaseAmount) {
    this.calcPrizeMoney();
    this.#rateOfReturn = this.#prizeMoney / purchaseAmount * 100;
  }

  printResult() {
    Console.print('\n당첨 통계\n---');
    Console.print(`3개 일치 (5,000원) - ${this.#fifth}개`);
    Console.print(`4개 일치 (50,000원) - ${this.#fourth}개`);
    Console.print(`5개 일치 (1,500,000원) - ${this.#third}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.#second}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${this.#first}개`);
    Console.print(`총 수익률은 ${this.#rateOfReturn}%입니다.`);
  }

  rank(numbers, matchNumLen, bonusNumber) {
    if (matchNumLen === 5 && numbers.includes(bonusNumber)) {
      this.#second ++;
    } else {
      this.updateRank(matchNumLen)
    }
  }

  updateRank(matchNumLen) {
    switch (matchNumLen) {
      case 3:
        this.#fifth ++;
        break;
      case 4:
        this.#fourth ++;
        break;
      case 5:
        this.#third ++;
        break;
      case 6:
        this.#first ++;
        break;
      default:
        break;
    }
  }
}

export default Result;