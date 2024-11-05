import { Console } from "@woowacourse/mission-utils";
import RANKS from "../Model/Rank.js";
import { ERROR_PREFIX } from "../Error/Error.js";

export function printError(message) {
  Console.print(`${ERROR_PREFIX}${message}`);
}

export function printTicketCount(ticketCount) {
  Console.print(`${ticketCount}개를 구매했습니다.`);
}

export function printLottoTickets(lottoTickets) {
  lottoTickets.forEach((ticket) => {
    const formattedNumbers = `[${ticket.getNumbers().join(", ")}]`;
    Console.print(formattedNumbers);
  });
}

export function printWinningResult(winningResult) {
  Console.print("\n당첨 통계\n---");
  Object.values(RANKS).forEach((rank) => {
    const description = getRankDescription(rank.key);
    const count = winningResult[rank.key] || 0;
    Console.print(
      `${description} (${rank.prize.toLocaleString()}원) - ${count}개`
    );
  });
}

function getRankDescription(rankKey) {
  return rankKey === "fiveMatchWithBonus"
    ? `5개 일치, 보너스 볼 일치`
    : `${getMatchCount(rankKey)}개 일치`;
}

function getMatchCount(key) {
  const matchCounts = {
    threeMatch: 3,
    fourMatch: 4,
    fiveMatch: 5,
    sixMatch: 6,
  };
  return matchCounts[key] || 0;
}

export function printLottoYield(yieldPercentage) {
  Console.print(`총 수익률은 ${yieldPercentage}%입니다.`);
}
