import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  async run() {
    const PRICE = await funcLoop("구입금액을 입력해 주세요.\n", Lotto.checkMoney);
    const TICKETS = Lotto.buyTickets(PRICE);

    while (TICKETS[0]) {
      MissionUtils.Console.print(TICKETS.pop().getters())
    }
    // const WINNUMS = await funcLoop("당첨 번호를 입력해 주세요.\n", Lotto.setWinNum);
  }
}

async function funcLoop(getInput, callback) {
  while (true) {
    try {
      let input = await MissionUtils.Console.readLineAsync(getInput);
      const RESULT = callback(input);
      return RESULT;
    } catch (error) {
      MissionUtils.Console.print(error);
    }
  }
}

export default App;