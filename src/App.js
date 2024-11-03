import { Console, MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
class App {
  async run() {
    const money = await Console.readLineAsync("구입금액을 입력해 주세요.");
    if (money % 1000 !== 0)
      throw new Error("[ERROR] 1000원 단위로 입력해주세요.");
    const lottoCount = parseInt(money / 1000);
    Console.print(`${lottoCount}개를 구매했습니다.`);
    let lottoTickets = [];
    for (let i = 0; i < lottoCount; i++) {
      const lottoNumbers = new Lotto(
        MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort(
          (a, b) => a - b
        )
      );
      lottoTickets.push(lottoNumbers);
      Console.print(lottoNumbers.toString());
    }
    const lottoAnswer = await Console.readLineAsync(
      "당첨 번호를 입력해 주세요."
    );
    const lottoNumbers = lottoAnswer.split(",").map((num) => parseInt(num));
    Console.print(lottoNumbers);

    const bonusNumber = await Console.readLineAsync(
      "보너스 번호를 입력해 주세요."
    );
    Console.print(bonusNumber);
  }
}

export default App;
