import { Console, MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  async run() {
    const purchaseMoney = await Console.readLineAsync(
      "구입금액을 입력해 주세요."
    );
    let lottos = Array.from({ length: purchaseMoney / 1000 }, () =>
      MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6)
    );

    Console.print(`${lottos.length}개를 구매했습니다.`);
    lottos = lottos.map((lotto) => {
      Console.print(lotto);
      return new Lotto(lotto);
    });

    // const winningNumber = await Console.readLineAsync(
    //   "당첨 번호를 입력해 주세요."
    // );

    // const bonusNumber = await Console.readLineAsync(
    //   "보너스 번호를 입력해 주세요."
    // );
  }
}

export default App;
