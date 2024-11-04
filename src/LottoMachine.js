import { ERROR_MESSAGE } from "./constants/messages.js";
import { LOTTO_RULE } from "./constants/rule.js";
import {
  buyMultipleTickets,
  calculateProfit,
  createWinningRankCount,
  getRankType,
  parseWinningLottoString,
} from "./utils/lotto.js";

class LottoMachine {
  #amount;
  #tickets;
  #winningRankCount;

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

  getTicketsString() {
    return `\n${this.#amount}개를 구매했습니다.\n${this.#tickets.map((ticket) => `[${ticket.join(", ")}]`).join("\n")}`;
  }

  getWinningLottoString({ winningLotto, bonusNumber }) {
    this.#winningRankCount = createWinningRankCount();

    this.#tickets.forEach((ticket) => {
      const matchCount = winningLotto.getMatchCountFrom(ticket);
      const isBonusMatch = bonusNumber.hasBonusNumberIn(ticket);
      const rank = getRankType(matchCount, isBonusMatch);
      if (rank) this.#winningRankCount[rank] += 1;
    });

    return parseWinningLottoString(this.#winningRankCount);
  }

  getProfitRateString() {
    const investAmount = this.#amount * LOTTO_RULE.PRICE;
    const profitAmount = calculateProfit(this.#winningRankCount);

    return `총 수익률은 ${((profitAmount / investAmount) * 100).toFixed(1)}%입니다.`;
  }
}

export default LottoMachine;
