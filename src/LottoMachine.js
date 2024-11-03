import { ERROR_MESSAGE } from "./constants/messages.js";
import { LOTTO_RULE } from "./constants/rule.js";
import {
  buyMultipleTickets,
  calculateProfit,
  getRankType,
  getWinningLottoString,
} from "./utils/lotto.js";

class LottoMachine {
  #amount;
  #tickets;
  #winningRankCount = {
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
    this.#tickets = buyMultipleTickets(this.#amount);
  }

  #validate(number) {
    if (Number.isNaN(number)) {
      throw new Error(ERROR_MESSAGE.NOT_A_NUMBER_MONEY);
    }
    if (number % LOTTO_RULE.PRICE !== 0) {
      throw new Error(ERROR_MESSAGE.NOT_DIVIDED_WITH_UNIT);
    }
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
      if (rank) this.#winningRankCount[rank] += 1;
    });

    return getWinningLottoString(this.#winningRankCount);
  }

  getProfitRate() {
    const investAmount = this.#amount * LOTTO_RULE.PRICE;
    const profitAmount = calculateProfit(this.#winningRankCount);

    return ((profitAmount / investAmount) * 100).toFixed(1);
  }
}

export default LottoMachine;
