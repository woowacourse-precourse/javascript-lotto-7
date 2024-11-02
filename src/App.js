import Validator from './utils/Validator.js';
import Handler from './utils/Handler.js';
import Ticket from './Lotto/Ticket.js';
import Lotto from './Lotto/Lotto.js';
import Statistics from './utils/Statistics.js';

class App {
  async run() {
    const money = await Handler.validateInputHandler(
      '구입금액을 입력해 주세요.',
      Validator.validateMoney,
    );
    const ticket = new Ticket(money);
    const ticketNumbers = ticket.getTickets();

    const lottoTickets = [];
    ticketNumbers.forEach((numbers) => {
      lottoTickets.push(new Lotto(numbers));
    });

    const winningNumber = await Handler.validateInputHandler(
      '당첨 번호를 입력해 주세요.',
      Validator.validateLotto,
    );
    const bonusNumber = await Handler.validateInputHandler(
      '보너스 번호를 입력해 주세요.',
      (input) => Validator.validateBonusNumber(input, winningNumber),
    );

    const resultList = [];
    lottoTickets.forEach((lotto) => {
      const result = lotto.getWinningResult(winningNumber, bonusNumber);
      resultList.push(result);
    });
  }
}

export default App;
