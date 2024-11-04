import { Random } from "@woowacourse/mission-utils";

const PRICE_UNIT = 1000;
const MIN_RANDOM = 1;
const MAX_RANDOM = 45;
const COUNT_RANDOM = 6;

class LottoGenerator {
  constructor(price) {
    this.lottoNumbers = [];
    this.numberOfTickets = this.calculateNumberOfTickets(price);
    this.generateNumbers();
  }

  calculateNumberOfTickets(price) {
    return price / PRICE_UNIT;
  }

  generateNumbers() {
    for (let i = 0; i < this.numberOfTickets; i++) {
      this.lottoNumbers.push(this.generateUniqueNumbers());
    }
  }

  generateUniqueNumbers() {
    const numbers = this.pickUniqueNumbers();
    return this.sortNumbers(numbers);
  }

  pickUniqueNumbers() {
    return Random.pickUniqueNumbersInRange(MIN_RANDOM, MAX_RANDOM, COUNT_RANDOM);
  }

  sortNumbers(numbers) {
    return numbers.sort((a, b) => a - b);
  }
}

export default LottoGenerator;
