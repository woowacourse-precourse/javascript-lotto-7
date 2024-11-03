import { buyOneLotto } from "./utils/lotto.js";

class LottoMachine {
  #amount;
  #tickets;

  constructor(input) {
    const inputNumber = Number(input);
    this.#validate(inputNumber);
    this.#amount = inputNumber / 1000;
    this.#tickets = this.#buyTickets();
  }

  #validate(number) {
    if (Number.isNaN(number)) {
      throw new Error("[ERROR] 구입 금액은 숫자만 입력 가능합니다.");
    }
    if (number % 1000 !== 0) {
      throw new Error("[ERROR] 구입 금액은 1,000원 단위로 입력할 수 있습니다.");
    }
  }

  #buyTickets() {
    return Array.from({ length: this.#amount }, () => buyOneLotto());
  }

  getTicketAmountString() {
    return `${this.#amount}개를 구매했습니다.`;
  }

  getTicketsNumberString() {
    return `${this.#tickets.map((ticket) => `[${ticket.join(", ")}]`).join("\n")}`;
  }
}

export default LottoMachine;
