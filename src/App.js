import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  async run() {
    await this.GenerateLottoResult();
    const WIN_LOTTO_NUM = await this.InputWinLotto();
    const BONUS_NUM = await this.InputBonus();

    const lotto = new Lotto(WIN_LOTTO_NUM);
    const USER_LOTTOS = this.USER_LOTTOS; // 사용자 로또 묶음을 저장
    const MATCH_CNT = lotto.CalculateResult(USER_LOTTOS, BONUS_NUM); // 채점 진행
    lotto.PrintResult(this.USER_COST, MATCH_CNT);
  }

  async InputCost() {
    this.USER_COST = await Console.readLineAsync("구입 금액을 입력해주세요: ");
    if (this.USER_COST % 1000 !== 0) {
      throw new Error("[ERROR] 구입 금액은 1,000원 단위로 입력해야 합니다.");
    }
    const LOTTO_CNT = Math.floor(Number(this.USER_COST) / 1000);
    Console.print(`\n${LOTTO_CNT}개를 구매했습니다.`);
    return LOTTO_CNT;
  }

  async InputWinLotto() {
    const INPUT_WIN_NUM = await Console.readLineAsync(
      "당첨 번호를 입력해 주세요."
    );
    const INPUT_WIN_NUM_LIST = INPUT_WIN_NUM.split(",").map(Number);
    if (INPUT_WIN_NUM_LIST.some((num) => num < 1 || num > 45)) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
    return INPUT_WIN_NUM_LIST;
  }

  async InputBonus() {
    const BONUS_NUM = await Console.readLineAsync(
      "보너스 번호를 입력해 주세요: "
    );
    if (BONUS_NUM < 1 || BONUS_NUM > 45) {
      throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
    return Number(BONUS_NUM);
  }

  async GenerateLottoResult() {
    const LOTTO_CNT = await this.InputCost();
    this.USER_LOTTOS = []; // 사용자 로또 리스트를 여기에 저장

    for (let i = 0; i < LOTTO_CNT; i++) {
      const RANDOM_LOTTO = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
        (a, b) => a - b
      );
      Console.print(RANDOM_LOTTO);
      this.USER_LOTTOS.push(RANDOM_LOTTO); // 사용자 로또 목록 저장
    }
  }
}

export default App;
