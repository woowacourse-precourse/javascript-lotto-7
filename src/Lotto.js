import { Random } from "@woowacourse/mission-utils";

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
    if (new Set(numbers).size !== 6) {
      throw new Error("[ERROR] 로또 번호는 중복되지 않아야 합니다.");
    }
    if (numbers.some((num) => num < 1 || num > 45)) {
      throw new Error("[ERROR] 로또 번호는 1에서 45 사이의 숫자여야 합니다.");
    }
  }

  static purchaseTickets(amount, ticketPrice = 1000) {
    if (amount % ticketPrice !== 0) {
      throw new Error("[ERROR] 구매 금액은 1000의 배수여야 합니다.");
    }
    const numOfTickets = amount / ticketPrice;
    return Array.from({ length: numOfTickets }, () =>
      new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b))
    );
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
