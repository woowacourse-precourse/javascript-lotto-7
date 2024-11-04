import { Console } from "@woowacourse/mission-utils"

const OutputView = {
  printLottoTickes(tickets) {
    Console.print(`\n${tickets.length}개를 구매했습니다.`);
    tickets.forEach((ticket) => Console.print(`[${ticket.numbers.join(", ")}]`));
  }
}

export default OutputView;