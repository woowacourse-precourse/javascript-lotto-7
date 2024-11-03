import {
  ERR_MSG_WINNING_NUMBERS_INVALID_LENGTH,
  ERR_MSG_WINNING_NUMBERS_INVALID_DUPLICATION,
  ERR_MSG_WINNING_NUMBERS_INVALID_RANGE,
  MSG_WINNING_STAT
} from "./constants.js";
import { printOutput } from "./handlers/IOhandler.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    // 길이가 6이 아닐 때 예외 발생
    if (numbers.length !== 6) {
      throw new Error(ERR_MSG_WINNING_NUMBERS_INVALID_LENGTH);
    }
    // 번호가 1 ~ 45 범위 외일 때 예외 발생
    if (numbers.some(v => v < 1 || v > 45)) {
      throw new Error(ERR_MSG_WINNING_NUMBERS_INVALID_RANGE);
    }
    // 번호가 중복이 있을 때 예외 발생
    if (new Set(numbers).size !== 6) {
      throw new Error(ERR_MSG_WINNING_NUMBERS_INVALID_DUPLICATION);
    }
  }

  // TODO: 추가 기능 구현
  #getPrizeCount(lottos, bonusNum) {
    const set = new Set(this.#numbers);
    let prizeCount = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0
    }

    lottos.forEach(lotto => {
      const count = lotto.filter(v => set.has(v)).length;

      switch (count) {
        case 3 :
          prizeCount[5]++;
          break;
        case 4 :
          prizeCount[4]++;
          break;
        case 5 : 
          if (new Set(lotto).has(bonusNum)) {
            prizeCount[2]++;
            break;
          }
          prizeCount[3]++;
          break;
        case 6 :
          prizeCount[1]++;
          break;
      }
    })

    return prizeCount;
  }

  #getMoney(prizeCount) {
    return prizeCount[5] * 5000 +
      prizeCount[4] * 50000 +
      prizeCount[3] * 1500000 +
      prizeCount[2] * 30000000 +
      prizeCount[1] * 2000000000;
  }

  #getReturnRate(fee, money) {
    return (money / fee * 100).toFixed(1);
  }

  printResult(fee, lottos, bonusNum) {
    const prize = this.#getPrizeCount(lottos, bonusNum);
    const money = this.#getMoney(prize);
    const returnRate = this.#getReturnRate(fee, money);

    printOutput(
      MSG_WINNING_STAT +
      `3개 일치 (5,000원) - ${prize[5]}개
4개 일치 (50,000원) - ${prize[4]}개
5개 일치 (1,500,000원) - ${prize[3]}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${prize[2]}개
6개 일치 (2,000,000,000원) - ${prize[1]}개
총 수익률은 ${returnRate}%입니다.
      `
    )
  }
}

export default Lotto;
