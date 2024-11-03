import { Random, Console, MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  async run() {
    // 로또 구입금액 숫자 입력 받기
    const inputlottospurchase = await Console.readLineAsync(
      '구입금액을 입력해 주세요.\n'
    );
    
    // 입력값을 숫자로 변환
    const purchaseAmount = parseInt(inputlottospurchase, 10);

    
  }
}


export default App;
접기