import { MissionUtils } from "@woowacourse/mission-utils";
import { purchaseError } from "./utils/validator.js";
import Lotto from "./Lotto.js";
class App {
  async run() {
    try {
      const lottoPurchaseInput = await MissionUtils.Console.readLineAsync("구입금액을 입력해 주세요.\n");
      purchaseError(lottoPurchaseInput);
      const lottoQuantity = lottoPurchaseInput / 1000;
      MissionUtils.Console.print(`\n${lottoQuantity}개를 구매했습니다.\n`);

      const lottoTickets = {}; // 로또 번호를 저장할 객체

      // 로또 개수만큼 번호 생성 및 객체에 저장
      for (let i = 0; i < lottoQuantity; i++) {
        const lotto = Lotto.generate(); // Lotto.generate()로 번호 생성
        lottoTickets[i] = lotto.getNumbers(); // 객체에 로또 번호 저장, 키는 1부터 시작
        MissionUtils.Console.print(`[${lotto.getNumbers().join(", ")}]`);
      }
    } catch (error) {
      MissionUtils.Console.print(`[ERROR] ${error.message}`);
      throw error;
    }
  }
}

export default App;
