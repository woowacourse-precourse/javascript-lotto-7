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

    // 로또 구입금액 입력 유효 검사에 따른 에러 처리
    try {
      this.validlottospurchase(purchaseAmount);
    } catch (error) {
      throw new Error(`[ERROR] ${error.message}`);
    }
}


  // 로또금액 입력 받은 숫자 유효검사
  validlottospurchase(purchaseAmount) {
    if (!purchaseAmount) 
      throw new Error('로또 구입 금액을 입력해주세요.');
    if (isNaN(purchaseAmount))
      throw new Error('로또 구입 금액은 숫자만 입력해주세요.');
    if (purchaseAmount <= 0)
      throw new Error('로또 구입 금액은 양수만 입력해주세요.');
    if (purchaseAmount % 1000 !== 0)
      throw new Error('로또 구입 금액은 1000원 단위로 입력해주세요.');
  }

}


export default App;
