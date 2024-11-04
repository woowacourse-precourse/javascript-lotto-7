import UserInput from "./UserInput.js";
import LottoGenerator from './LottoGenerator.js';
import LottoStatistics from './LottoStatistics.js'; 
import Lotto from './Lotto.js';
import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    const userInput = new UserInput();
    const lottoGenerator = new LottoGenerator();
    const lottoStatistics = new LottoStatistics();

    try {
      // 구입 금액 입력 및 유효성 검사를 UserInput에서 처리
      await userInput.inputPurchaseAmount();

      // 티켓 번호 생성
      const ticketNumbers = await lottoGenerator.generateTickets(userInput.purchaseAmount);
      const tickets = await Promise.all(ticketNumbers.map(numbers => new Lotto(numbers)));
      await lottoGenerator.printTickets(ticketNumbers.length, ticketNumbers);

      // 당첨 번호 입력 및 유효성 검사
      await userInput.inputWinningNumbers();

      // 보너스 번호 입력 및 유효성 검사
      await userInput.inputBonusNumber();

      // 통계 계산
      await lottoStatistics.calculateStatistics(tickets, userInput.winningNumbers, userInput.bonusNumber);

      // 통계 출력
      await lottoStatistics.printStatistics(userInput.purchaseAmount);
      
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
