// import Lotto from "./Lotto";
import { MissionUtils } from "@woowacourse/mission-utils"
import PurchaseAmount from "./PurchaseAmount.js";


class App {
  async run() {
    const INPUT_AMOUNT = await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.\n');
    const purchaseAmount = new PurchaseAmount(INPUT_AMOUNT);
    purchaseAmount.getLottoCount();

    // 구매 횟수만큼 로또 배열을 생성
    // 당첨 번호 입력
    // 보너스 번호 입력 생성 후 모든 로또 배열에 추가
    // 보너스 번호를 추가한 당첨 번호 만들기
    // 당첨 통계와 총 수익률 추가
  }
}

export default App;
