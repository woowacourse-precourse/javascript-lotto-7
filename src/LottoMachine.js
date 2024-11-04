import { ERROR_MESSAGE } from "./constants/messages.js";
import { LOTTO_RULE } from "./constants/rule.js";
import { isDividedWithUnit, isNumber } from "./utils/validation.js";
import Ticket from "./LottoMachineEntities/Ticket.js";
import WinningCount from "./LottoMachineEntities/WinningCount.js";

class LottoMachine {
  #amount;
  #tickets;
  #winningCount;

  constructor(number) {
    this.#validate(number);
    this.#amount = number / LOTTO_RULE.PRICE;
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

  countWinningLotto({ winningLotto, bonusNumber }) {
    this.#winningCount = new WinningCount();

    this.#tickets.forEach((ticket) => {
      const ticketNumbers = ticket.getTicketNumbers();
      const matchCount = winningLotto.getMatchCountWith(ticketNumbers);
      const isBonusMatch = bonusNumber.hasBonusNumberIn(ticketNumbers);

      const rank = WinningCount.getRankType(matchCount, isBonusMatch);
      if (rank) this.#winningCount.increaseRankCount(rank);
    });
  }

  getLottoResultString() {
    const winningCountString = this.#winningCount.getWinningRankCountString();

    const investAmount = this.#amount * LOTTO_RULE.PRICE;
    const profitAmount = this.#winningCount.calculateProfit();
    const profitRateString = `\n총 수익률은 ${((profitAmount / investAmount) * 100).toFixed(1)}%입니다.`;

    return winningCountString + profitRateString;
  }
}

export default LottoMachine;
