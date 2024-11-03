import { ERROR_MESSAGE } from "./constants/messages.js";
import { LOTTO_RULE, LOTTO_WIN_RANK } from "./constants/rule.js";
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
    this.#amount = inputNumber / LOTTO_RULE.PRICE;
    this.#tickets = this.#buyTickets();
  }

  #validate(number) {
    if (Number.isNaN(number)) {
      throw new Error(ERROR_MESSAGE.NOT_A_NUMBER_MONEY);
    }
    if (number % LOTTO_RULE.PRICE !== 0) {
      throw new Error(ERROR_MESSAGE.NOT_DIVIDED_WITH_UNIT);
    }
  }

  #buyTickets() {
    return Array.from({ length: this.#amount }, () => buyOneLotto().sort((a, b) => a - b));
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

    return `${LOTTO_WIN_RANK.threeMatch.string} (${LOTTO_WIN_RANK.threeMatch.prize.toLocaleString()}원) - ${this.#winningTicketsRank.threeMatch}개
${LOTTO_WIN_RANK.fourMatch.string} (${LOTTO_WIN_RANK.fourMatch.prize.toLocaleString()}원) - ${this.#winningTicketsRank.fourMatch}개
${LOTTO_WIN_RANK.fiveMatch.string} (${LOTTO_WIN_RANK.fiveMatch.prize.toLocaleString()}원) - ${this.#winningTicketsRank.fiveMatch}개
${LOTTO_WIN_RANK.fiveMatchAndBonus.string} (${LOTTO_WIN_RANK.fiveMatchAndBonus.prize.toLocaleString()}원) - ${this.#winningTicketsRank.fiveMatchAndBonus}개
${LOTTO_WIN_RANK.allMatch.string} (${LOTTO_WIN_RANK.allMatch.prize.toLocaleString()}원) - ${this.#winningTicketsRank.allMatch}개`;
  }

  getProfitRate() {
    const investAmount = this.#amount * LOTTO_RULE.PRICE;
    const profitAmount =
      this.#winningTicketsRank.threeMatch * LOTTO_WIN_RANK.threeMatch.prize +
      this.#winningTicketsRank.fourMatch * LOTTO_WIN_RANK.fourMatch.prize +
      this.#winningTicketsRank.fiveMatch * LOTTO_WIN_RANK.fiveMatch.prize +
      this.#winningTicketsRank.fiveMatchAndBonus * LOTTO_WIN_RANK.fiveMatchAndBonus.prize +
      this.#winningTicketsRank.allMatch * LOTTO_WIN_RANK.allMatch.prize;

    return ((profitAmount / investAmount) * 100).toFixed(1);
  }
}

export default LottoMachine;
