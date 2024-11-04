import { Console } from "@woowacourse/mission-utils"
import prizeMoney from "../service/data.js";

const OutputView = {
  printLottoTickets(tickets) {
    Console.print(`\n${tickets.length}개를 구매했습니다.`);
    tickets.forEach((ticket) => Console.print(`[${ticket.numbers.join(", ")}]`));
  },

  printResults(ranks, earningRate) {
    Console.print("\n당첨 통계\n---")
    Object.entries(ranks).forEach(([rank, count]) => {
      Console.print(`${rank} (${prizeMoney[rank].toLocaleString("ko-KR")}원) - ${count}개`)
    });
    Console.print(`총 수익률은 ${earningRate}% 입니다.`);
  },

  printError(message) {
    Console.print(message);
  }
}

export default OutputView;