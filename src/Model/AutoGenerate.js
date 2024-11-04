import { Random } from "@woowacourse/mission-utils";

class AutoGenerate {
  purchaseNumber;
  lotto_tickets;

  constructor(value) {
    this.purchaseNumber = this.calculateCount(value);
    this.lotto_tickets = this.generateTickets();
  }

  calculateCount(value) {
    const UNIT = 1000;

    return value / UNIT;
  }

  generateTickets() {
    const LOTTO_NUMBERS = [];
    for (let i = 0; i < this.purchaseNumber; i++) {
      LOTTO_NUMBERS.push(this.pickNumbers());
    }

    return LOTTO_NUMBERS;
  }

  pickNumbers() {
    return Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
  }
}

export default AutoGenerate;