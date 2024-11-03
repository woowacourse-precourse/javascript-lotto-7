import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  async run() {
    await this.GenerateLottoResult();
    const WIN_LOTTO_NUM = await this.InputWinLotto();
    const lotto = new Lotto(WIN_LOTTO_NUM); // 변수 이름을 lottoResult로 변경
    await lotto.InputBonus();
  }
  async InputCost() {
    const USER_COST = await Console.readLineAsync("구입 금액을 입력해주세요: ");
    const LOTTO_CNT = Math.floor(Number(USER_COST) / 1000);
    Console.print(`\n${LOTTO_CNT}개를 구매했습니다.`);
    return LOTTO_CNT;
  }
  async InputWinLotto() {
    const INPUT_WIN_NUM = await Console.readLineAsync(
      "당첨 번호를 입력해 주세요."
    );
    const INPUT_WIN_NUM_LIST = INPUT_WIN_NUM.split(",").map(Number);
    return INPUT_WIN_NUM_LIST;
  }

  async GenerateLottoResult() {
    const LOTTO_CNT = await this.InputCost(); // 구매 개수 가져오기
    const USER_LOTTO_LIST = [];

    for (let i = 0; i < LOTTO_CNT; i++) {
      const RANDOM_LOTTO = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
        (a, b) => a - b
      );

      Console.print(RANDOM_LOTTO);
    }
  }
}

export default App;
