import { Random } from "@woowacourse/mission-utils";
import { ERROR_MESSAGE } from "./constants/messages.js";
import { LOTTO_RULE, LOTTO_WIN_RANK } from "./constants/rule.js";

class LottoMachine {
  #amount;
  #tickets;
  #winningRankCount;

  constructor(input) {
    const inputNumber = Number(input);
    this.#validate(inputNumber);
    this.#amount = inputNumber / LOTTO_RULE.PRICE;
    this.#tickets = LottoMachine.#buyMultipleTickets(this.#amount);
  }

  #validate(number) {
    if (Number.isNaN(number)) {
      throw new Error(ERROR_MESSAGE.NOT_A_NUMBER_MONEY);
    }
    if (number % LOTTO_RULE.PRICE !== 0) {
      throw new Error(ERROR_MESSAGE.NOT_DIVIDED_WITH_UNIT);
    }
  }

  static #buyMultipleTickets = (amount) =>
    Array.from({ length: amount }, () =>
      Random.pickUniqueNumbersInRange(LOTTO_RULE.MIN_NUMBER, LOTTO_RULE.MAX_NUMBER, 6).sort(
        (a, b) => a - b,
      ),
    );

  getTicketsString() {
    return `\n${this.#amount}개를 구매했습니다.\n${this.#tickets.map((ticket) => `[${ticket.join(", ")}]`).join("\n")}`;
  }

  static #createWinningRankCount = () =>
    Object.keys(LOTTO_WIN_RANK).reduce((acc, rank) => {
      acc[rank] = 0;
      return acc;
    }, {});

  static #getRankType = (matchCount, isBonusMatch) => {
    const [rankType] = Object.entries(LOTTO_WIN_RANK)
      .filter(
        ([, details]) =>
          details.matchCount === matchCount && details.requiresBonus === isBonusMatch,
      )
      .map(([rank]) => rank);

    return rankType;
  };

  static #parseWinningLottoString = (
    winningRankCount,
  ) => `${LOTTO_WIN_RANK.threeMatch.string} (${LOTTO_WIN_RANK.threeMatch.prize.toLocaleString()}원) - ${winningRankCount.threeMatch}개
${LOTTO_WIN_RANK.fourMatch.string} (${LOTTO_WIN_RANK.fourMatch.prize.toLocaleString()}원) - ${winningRankCount.fourMatch}개
${LOTTO_WIN_RANK.fiveMatch.string} (${LOTTO_WIN_RANK.fiveMatch.prize.toLocaleString()}원) - ${winningRankCount.fiveMatch}개
${LOTTO_WIN_RANK.fiveMatchAndBonus.string} (${LOTTO_WIN_RANK.fiveMatchAndBonus.prize.toLocaleString()}원) - ${winningRankCount.fiveMatchAndBonus}개
${LOTTO_WIN_RANK.allMatch.string} (${LOTTO_WIN_RANK.allMatch.prize.toLocaleString()}원) - ${winningRankCount.allMatch}개`;

  getWinningLottoString({ winningLotto, bonusNumber }) {
    this.#winningRankCount = LottoMachine.#createWinningRankCount();

    this.#tickets.forEach((ticket) => {
      const matchCount = winningLotto.getMatchCountFrom(ticket);
      const isBonusMatch = bonusNumber.hasBonusNumberIn(ticket);
      const rank = LottoMachine.#getRankType(matchCount, isBonusMatch);
      if (rank) this.#winningRankCount[rank] += 1;
    });

    return LottoMachine.#parseWinningLottoString(this.#winningRankCount);
  }

  static #calculateProfit = (winningRankCount) =>
    winningRankCount.threeMatch * LOTTO_WIN_RANK.threeMatch.prize +
    winningRankCount.fourMatch * LOTTO_WIN_RANK.fourMatch.prize +
    winningRankCount.fiveMatch * LOTTO_WIN_RANK.fiveMatch.prize +
    winningRankCount.fiveMatchAndBonus * LOTTO_WIN_RANK.fiveMatchAndBonus.prize +
    winningRankCount.allMatch * LOTTO_WIN_RANK.allMatch.prize;

  getProfitRateString() {
    const investAmount = this.#amount * LOTTO_RULE.PRICE;
    const profitAmount = LottoMachine.#calculateProfit(this.#winningRankCount);

    return `총 수익률은 ${((profitAmount / investAmount) * 100).toFixed(1)}%입니다.`;
  }
}

export default LottoMachine;
