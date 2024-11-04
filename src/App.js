import { Console, MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  async run() {
    try {
      const purchaseAmount = await this.getPurchaseAmount();
      // Console.print(`구입금액은 ${purchaseAmount}원입니다.`);

      const lottoTickets = this.generateLottoTickets(purchaseAmount);
      this.printLottoTickets(lottoTickets);

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

  generateLottoTickets(amount) {
    const ticketCount = amount / 1000;
    const tickets = [];
    // 구매한 금액에 따라 로또 티켓을 생성
    for (let i = 0; i < ticketCount; i++) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
      tickets.push(new Lotto(numbers));
    }
    return tickets;
  }

  printLottoTickets(tickets) {
    Console.print(`\n${tickets.length}개를 구매했습니다.`);
    tickets.forEach((ticket) => Console.print(`[${ticket.getNumbers().join(", ")}]`));
  }
}

export default App;
