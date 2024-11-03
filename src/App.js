import LottoController from './controllers/LottoController.js';
import Input from './views/Input.js';
import Output from './views/Output.js';

class App {
  async run() {
    // 1. 구입 금액 입력
    const purchaseAmount = await Input.getPurchaseAmount();

    // 2. 로또 컨트롤러 초기화 및 로또 발행
    const lottoController = new LottoController();
    const tickets = lottoController.generateTickets(purchaseAmount);

    // 3. 발행한 로또 출력
    Output.displayLottoCount(tickets.length);
    Output.displayTickets(tickets.map((ticket) => ticket.getNumbers()));

    // 4. 당첨 번호 및 보너스 번호 입력
    const winningNumbers = await Input.getWinningNumbers();
    const bonusNumber = await Input.getBonusNumber(winningNumbers);

    // 5. 당첨 번호 설정
    lottoController.setWinningNumbers(winningNumbers, bonusNumber);

    //  6. 당첨 결과 확인 및 출력
    const result = lottoController.checkResults();
    Output.displayWinningNumbersResult(result);

    //  7. 수익률 계산 및 출력
    const yieldRate = lottoController.calculateYield(purchaseAmount, result);
    Output.displayYield(yieldRate);
  }
}

export default App;
