import Validator from './utils/Validator.js';
import InputHandler from './utils/InputHandler.js';
import Ticket from './Lotto/Ticket.js';
import Lotto from './Lotto/Lotto.js';
import Statistics from './utils/Statistics.js';
import OutputHandler from './utils/OutputHandler.js';

class App {
  async run() {
    const money = await InputHandler.validateInputHandler(
      '구입금액을 입력해 주세요.',
      Validator.validateMoney,
    );
    const ticket = new Ticket(money);
    const ticketNumbers = ticket.getTickets();

    const lottoTickets = [];
    ticketNumbers.forEach((numbers) => {
      lottoTickets.push(new Lotto(numbers));
    });

    const winningNumber = await InputHandler.validateInputHandler(
      '당첨 번호를 입력해 주세요.',
      Validator.validateLotto,
    );
    const bonusNumber = await InputHandler.validateInputHandler(
      '보너스 번호를 입력해 주세요.',
      (input) => Validator.validateBonusNumber(input, winningNumber),
    );

    const rankList = [];
    lottoTickets.forEach((lotto) => {
      const result = lotto.getWinningResult(winningNumber, bonusNumber);
      rankList.push(result);
    });
    OutputHandler.printResultOutPut(Statistics.countOccurrences(rankList));
    OutputHandler.printProfitRate(rankList);
  }
}

export default App;
