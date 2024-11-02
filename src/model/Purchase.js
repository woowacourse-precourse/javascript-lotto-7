import { Random } from '@woowacourse/mission-utils';

class Purchase {
  #amount;
  #tickets;
  #lotteryNumbers = [];

  constructor(amount) {
    this.#validate(amount);
    this.#amount = amount;
    this.#tickets = this.#amount / 1000;
  }

  #validate(amount) {
    if (amount % 1000 !== 0) {
      throw new Error('[ERROR] 잘못된 구입 금액입니다.');
    }
    if (amount < 1000) {
      throw new Error('[ERROR] 구입 금액은 1000원 이상이어야 합니다.');
    }
  }

  purchaseTickets(amount) {
    return this.#tickets;
  }

  generateLotteryNumbers() {
    for (let i = 0; i < this.#tickets; i++) {
      let numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      this.#lotteryNumbers[i] = numbers.sort((a, b) => a - b).join(', ');
    }
    return this.#lotteryNumbers;
  }
}

export default Purchase;
