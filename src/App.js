import { UserLotto } from "./UserLotto.js";
import { Console } from "@woowacourse/mission-utils";
import { LottoMarket } from "./LottoMarket.js";

class App {
  async run() {
    const userLotto = new UserLotto();
    const lottoMarket = new LottoMarket();

    try {
      // 구입 금액 입력 및 유효성 검사
      const purchaseMoney = await userLotto.getLottoPurchaseInput();
      // 로또 수량 계산
      const count = userLotto.CalculateAmountCount(purchaseMoney);
      // 로또 번호 생성 및 출력
      lottoMarket.PrintLottoInfo(count);
    } catch (error) {
      Console.print(error);
    }
  }
}

export default App;
