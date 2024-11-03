import { Console } from "@woowacourse/mission-utils";
import MESSAGE from "../constants/message.js";

class Output {
  printRandomLotto(count, lottos) {
    Console.print(MESSAGE.BUYING_COUNT(count));
    lottos.forEach((lotto) => {
      const sortedNumbers = lotto.getNumbers().sort((a, b) => a - b);
      Console.print(`[${sortedNumbers.join(", ")}]`);
    });
  }
}

export default Output;
