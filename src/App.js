import { Console } from '@woowacourse/mission-utils';
import { Input } from './inputHandler.js';
import LotteryTickets from './lotteryTicket.js';
// import Lotto from './Lotto.js';
// import { Validator } from './validate.js';

class App {
   async run() {
      const purchaseAmount = await Input.getPurchaseAmount(); //로또 장 수 lotteryTickets를 위한 구매 금액
      const lotteryTickets = new LotteryTickets(purchaseAmount);
      const tickets = lotteryTickets.getTickets(); //인스턴스를 통해 메서드 호출
      Console.print(`${tickets.length}개를 구매했습니다.`);
      tickets.forEach((ticket) => Console.print(ticket));

      const winningNumbers = await Input.getWinningNumbers();
      const bonusNumber = await Input.getBonusNumber();

      console.log('app.js에서의 winningNumbers ', winningNumbers);
      console.log('app.js에서의 bonusNumber ', bonusNumber);
      console.log('app.js에서의 purchaseAmount', purchaseAmount);
      console.log('app.js에서의 lotteryTickets', lotteryTickets);
      console.log('app.js에서의 tickets', tickets);
   }
}

export default App;
