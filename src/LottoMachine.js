import { ERROR_MESSAGE } from "./constants/messages.js";
import { LOTTO_RULE } from "./constants/rule.js";
import { isDividedWithUnit, isNumber } from "./utils/validation.js";
import Ticket from "./Ticket.js";
import WinningRankCount from "./WinningRankCount.js";

class LottoMachine {
  #amount;
  #tickets;
  #winningRankCount;

  constructor(input) {
    const inputNumber = Number(input);
    this.#validate(inputNumber);
    this.#amount = inputNumber / LOTTO_RULE.PRICE;
    this.#tickets = Array.from({ length: this.#amount }, () => new Ticket());
  }

  #validate(number) {
    if (!isNumber(number)) {
      throw new Error(ERROR_MESSAGE.NOT_A_NUMBER_MONEY);
    }
    if (!isDividedWithUnit(number)) {
      throw new Error(ERROR_MESSAGE.NOT_DIVIDED_WITH_UNIT);
    }
  }

  getTicketsString() {
    return `\n${this.#amount}개를 구매했습니다.\n${this.#tickets.map((ticket) => ticket.getTicketString()).join("\n")}`;
  }

  getWinningLottoString({ winningLotto, bonusNumber }) {
    this.#winningRankCount = new WinningRankCount();

    this.#tickets.forEach((ticket) => {
      const ticketNumbers = ticket.getTicketNumbers();
      const matchCount = winningLotto.getMatchCountWith(ticketNumbers);
      const isBonusMatch = bonusNumber.hasBonusNumberIn(ticketNumbers);

      const rank = WinningRankCount.getRankType(matchCount, isBonusMatch);
      if (rank) this.#winningRankCount.increaseRankCount(rank);
    });

    return this.#winningRankCount.getWinningRankCountString();
  }

  getProfitRateString() {
    const investAmount = this.#amount * LOTTO_RULE.PRICE;
    const profitAmount = this.#winningRankCount.calculateProfit();

    return `총 수익률은 ${((profitAmount / investAmount) * 100).toFixed(1)}%입니다.`;
  }
}

export default LottoMachine;
