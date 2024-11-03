import UserInput from "../../javascript-lotto-7/src/UserInput.js";
import LottoGenerator from '../../javascript-lotto-7/src/LottoGenerator.js';
import LottoStatistics from '../../javascript-lotto-7/src/LottoStatistics.js'; 
import Lotto from '../../javascript-lotto-7/src/Lotto.js';

class App {
  async run() {
    const userInput = new UserInput();
    const lottoGenerator = new LottoGenerator();
    const lottoStatistics = new LottoStatistics();

    // 구입 금액 입력 및 유효성 검사
    await userInput.inputPurchaseAmount();

    // 티켓 번호 생성
    const ticketNumbers = lottoGenerator.generateTickets(userInput.purchaseAmount);
    const tickets = ticketNumbers.map(numbers => new Lotto(numbers)); 
    lottoGenerator.printTickets(ticketNumbers.length, ticketNumbers);

    // 당첨 번호 입력 및 유효성 검사
    await userInput.inputWinningNumbers();

    // 보너스 번호 입력 및 유효성 검사
    await userInput.inputBonusNumber();

    // 통계 계산
    lottoStatistics.calculateStatistics(tickets, userInput.winningNumbers, userInput.bonusNumber);
    
    // 통계 출력
    lottoStatistics.printStatistics(userInput.purchaseAmount);
  }
}

export default App;
