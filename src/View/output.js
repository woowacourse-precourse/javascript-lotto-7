import { Console } from "@woowacourse/mission-utils";
import RANKS from "../Model/Rank.js";

export function printTicketCount(ticketCount) {
  Console.print(`\n${ticketCount}개를 구매했습니다.`);
}

export function printLottoTickets(lottoTickets) {
  lottoTickets.forEach((ticket) => {
    Console.print(`${ticket.getNumbers().join(", ")}`);
  });
}

export function printWinningResult(winningResult) {
  Console.print("\n당첨 통계");
  Console.print("---");

  Object.values(RANKS).forEach((rank) => {
    if (rank.key === "noMatch") return; // 0개 일치 제외
    let description;
    if (rank.key === "fiveMatchWithBonus") {
      description = `5개 일치, 보너스 볼 일치`;
    } else {
      description = `${getMatchCount(rank.key)}개 일치`;
    }
    Console.print(
      `${description} (${rank.prize.toLocaleString()}원) - ${
        winningResult[rank.key] || 0
      }개`
    );
  });
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
