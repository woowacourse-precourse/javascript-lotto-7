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

  Console.print(
    `3개 일치 (${RANKS.THREE_MATCH.prize.toLocaleString()}원) - ${
      winningResult[RANKS.THREE_MATCH.key] || 0
    }개`
  );
  Console.print(
    `4개 일치 (${RANKS.FOUR_MATCH.prize.toLocaleString()}원) - ${
      winningResult[RANKS.FOUR_MATCH.key] || 0
    }개`
  );
  Console.print(
    `5개 일치 (${RANKS.FIVE_MATCH.prize.toLocaleString()}원) - ${
      winningResult[RANKS.FIVE_MATCH.key] || 0
    }개`
  );
  Console.print(
    `5개 일치, 보너스 볼 일치 (${RANKS.FIVE_MATCH_WITH_BONUS.prize.toLocaleString()}원) - ${
      winningResult[RANKS.FIVE_MATCH_WITH_BONUS.key] || 0
    }개`
  );
  Console.print(
    `6개 일치 (${RANKS.SIX_MATCH.prize.toLocaleString()}원) - ${
      winningResult[RANKS.SIX_MATCH.key] || 0
    }개`
  );
}

export function printLottoYield(yieldPercentage) {
  Console.print(`총 수익률은 ${yieldPercentage}%입니다.`);
}
