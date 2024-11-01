import { Console } from '@woowacourse/mission-utils';
import LottoController from './controllers/LottoController.js';
import Input from './views/Input.js';
import Output from './views/Output.js';

class App {
  async run() {
    // 1. 구입 금액 입력
    const purchaseAmount = await Input.getPurchaseAmount();
    Console.print('');

    // // 2. 로또 컨트롤러 초기화 및 로또 발행
    const lottoController = new LottoController();
    const tickets = lottoController.generateTickets(purchaseAmount);

    // // 3. 발행한 로또 출력
    Output.displayLottoCount(tickets.length);
    Output.displayTickets(tickets.map((ticket) => ticket.getNumbers()));

    // // 4. 당첨 번호 및 보너스 번호 입력
    const winningNumbers = await Input.getWinningNumbers();
    const bonusNumber = await Input.getBonusNumber();

    // // 5. 당첨 번호 설정
    lottoController.setWinningNumbers(winningNumbers, bonusNumber);
  }
}

export default App;
