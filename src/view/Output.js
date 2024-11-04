import { Console } from "@woowacourse/mission-utils";
import MESSAGE from "../constants/message.js";

class Output {
  //로또 구매 개수와 랜덤 생성된 로또 출력
  printRandomLotto(count, lottos) {
    Console.print(MESSAGE.OUTPUT_MESSAGE.BUYING_COUNT(count));
    lottos.forEach((lotto) => {
      const sortedNumbers = lotto.getNumbers().sort((a, b) => a - b);
      Console.print(`[${sortedNumbers.join(', ')}]`);
    });
  }
}

export default Output;
