import { Console } from '@woowacourse/mission-utils';
import { Input } from './inputHandler.js';
import LotteryTickets from './lotteryTicket.js';
import Lotto from './Lotto.js';
import LotteryResult from './lotteryResult.js';

// import { Validator } from './validate.js';

class App {
   async run() {
      try {
         const purchaseAmount = await Input.getPurchaseAmount(); // 로또 장 수 lotteryTickets를 위한 구매 금액
         const lotteryTickets = new LotteryTickets(purchaseAmount); // 로또 티켓 생성, 클래스의 인스턴스
         const tickets = lotteryTickets.getTickets(); // 인스턴스를 통해 메서드 호출

         Console.print(`${tickets.length}개를 구매했습니다.`);
         tickets.forEach((ticket) => Console.print(`[${ticket.join(', ')}]`));

         const winningNumbers = await Input.getWinningNumbers();
         const bonusNumber = await Input.getBonusNumber();
         LotteryResult.printResults(tickets, winningNumbers, bonusNumber, purchaseAmount);
      } catch (error) {
         Console.print(error.message); // 에러 메시지만 출력
      }
   }
}

export default App;
