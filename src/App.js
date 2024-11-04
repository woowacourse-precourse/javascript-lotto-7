import { Console } from "@woowacourse/mission-utils";
// import Lotto from "./Lotto.js";

class App {
  async run() {
    try {
      const purchaseAmount = await this.getPurchaseAmount();
      // Console.print(`구입금액은 ${purchaseAmount}원입니다.`);
      
      // 로또 티켓 생성
      
      
      // 생성된 로또 티켓 출력
      

      // 사용자로부터 당첨 번호 입력 받기
      

      // 사용자로부터 보너스 번호 입력 받기
      

      // 로또 결과 계산
      

      // 결과 출력
      
    } catch (error) {
      // 예외가 발생하면 오류 메시지를 출력
      Console.print(error.message);
    }
  }

  async getPurchaseAmount() {
    const input = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    const amount = parseInt(input, 10);
    
    if (isNaN(amount) || amount % 1000 !== 0) {
      throw new Error("[ERROR] 구입 금액은 1,000원 단위로 입력해야 합니다.");
    }
    return amount;
  }
}

export default App;
