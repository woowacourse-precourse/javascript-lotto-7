import Validator from './utils/Validator.js';
import Handler from './utils/Handler.js';
import Ticket from './Lotto/Ticket.js';

class App {
  async run() {
    const ticket = new Ticket();
    ticket.initiatePurchase();
    const tickets = ticket.getTickets();

    const winningNumber = await Handler.validateInputHandler(
      '당첨 번호를 입력해 주세요.',
      Validator.validateWinningNumbers,
    );
    const bonusNumber = await Handler.validateInputHandler(
      '보너스 번호를 입력해 주세요.',
      (input) => Validator.validateBonusNumber(input, winningNumber),
    );
  }
}

export default App;
