import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  async run() {
    try {
      let input = await MissionUtils.Console.readLineAsync('구입 금액을 입력해 주세요.\n');
      const PURCHASE = Lotto.checkPurchase(input);
      MissionUtils.Console.print(PURCHASE);
      // buyLottos()
      // const lotto = new Lotto();
      // const WINNUMS = await MissionUtils.Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
      // MissionUtils.Console.print("");
      // setWINNUMS()
      // const BONUSNUM = await MissionUtils.Console.readLineAsync('보너스 번호를 입력해 주세요.\n');
      // setBONUSNUM()

      // showResult()
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

// function checkPruchase(num) {
//   if (Number(num)) {
//     if (num%1000) {
//       throw new Error("[ERROR] 구입 금액은 1,000의 배수여야 합니다.");
//     }

//   }
// }

export default App;
