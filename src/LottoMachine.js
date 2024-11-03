import { buyOneLotto, getRankType } from "./utils/lotto.js";

class LottoMachine {
  #amount;
  #tickets;
  #winningTicketsRank = {
    allMatch: 0,
    fiveMatchAndBonus: 0,
    fiveMatch: 0,
    fourMatch: 0,
    threeMatch: 0,
  };

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

  getWinningLottery({ winningLotto, bonusNumber }) {
    this.#tickets.forEach((ticket) => {
      const matchCount = winningLotto.getMatchCountFrom(ticket);
      const isBonusMatch = bonusNumber.hasBonusNumberIn(ticket);
      const rank = getRankType(matchCount, isBonusMatch);
      this.#winningTicketsRank[rank] += 1;
    });

    return `3개 일치 (5,000원) - ${this.#winningTicketsRank.threeMatch}개
4개 일치 (50,000원) - ${this.#winningTicketsRank.fourMatch}개
5개 일치 (1,500,000원) - ${this.#winningTicketsRank.fiveMatch}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.#winningTicketsRank.fiveMatchAndBonus}개
6개 일치 (2,000,000,000원) - ${this.#winningTicketsRank.allMatch}개`;
  }
}

export default LottoMachine;
