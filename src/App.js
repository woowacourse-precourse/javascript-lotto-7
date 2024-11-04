import { Console } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import { LOTTO_PRICE } from "./Constants.js";

class App {
  run() {
    Console.readLine(
      "구입 금액을 입력해 주세요.\n",
      (amount) => {
        const count = amount / LOTTO_PRICE;
        Console.print(
          `\n${count}개를 구매했습니다.`
        );

        const lottos = Array.from(
          { length: count },
          () => new Lotto()
        );
        lottos.forEach((lotto) =>
          Console.print(lotto.getNumbers())
        );
      }
    );
  }
}

export default App;
