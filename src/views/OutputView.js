import { Console } from "@woowacourse/mission-utils";
import { MESSAGES } from "../constants/Constants.js";

class OutputView {
  displayTickets(tickets) {
    Console.print(`\n${tickets.length}개를 구매했습니다.`);

    tickets.forEach((ticket) => {
      Console.print(`[${ticket.getNumbers().join(", ")}]`);
    });
  }

  displayResults(statistics, returnRate) {
    Console.print(MESSAGES.DISPLAY_RESULTS);
    Console.print(
      `${3}개 일치 (${(5000).toLocaleString()}원) - ${statistics.FIFTH}개`
    );
    Console.print(
      `${4}개 일치 (${(50000).toLocaleString()}원) - ${statistics.FOURTH}개`
    );
    Console.print(
      `${5}개 일치 (${(1500000).toLocaleString()}원) - ${statistics.THIRD}개`
    );
    Console.print(
      `${5}개 일치, 보너스 볼 일치 (${(30000000).toLocaleString()}원) - ${
        statistics.SECOND
      }개`
    );
    Console.print(
      `${6}개 일치 (${(2000000000).toLocaleString()}원) - ${statistics.FIRST}개`
    );
    Console.print(`총 수익률은 ${returnRate.toFixed(1)}%입니다.`);
  }

  displayError(message) {
    Console.print(message);
  }
}

export default OutputView;
