import Validator from './utils/Validator.js';
import Handler from './utils/Handler.js';
import Ticket from './Lotto/Ticket.js';
import Lotto from './Lotto/Lotto.js';
import Statistics from './utils/Statistics.js';
import Formatter from './utils/Formater.js';
import ProfitCal from './utils/ProfitCal.js';
import Parsing from './utils/Parsing.js';

class App {
  async run() {
    const money = await Handler.validateHandler(
      '구입금액을 입력해 주세요.',
      Validator.validateMoney,
    );
    const ticket = new Ticket(money);
    const ticketNumbers = ticket.getTickets();
    Handler.print(`${ticketNumbers.length}개를 구매했습니다.`);
    Handler.listPrintHandler(ticketNumbers);

    const lottoTickets = [];
    ticketNumbers.forEach((numbers) => {
      lottoTickets.push(new Lotto(numbers));
    });

    const winningNumber = await Handler.validateHandler(
      '당첨 번호를 입력해 주세요.',
      Validator.validateInputLotto,
    );
    const bonusNumber = await Handler.validateHandler(
      '보너스 번호를 입력해 주세요.',
      (input) => Validator.validateBonusNumber(input, winningNumber),
    );
    const parsedWinNumber = Parsing.parseList(winningNumber);

    const rankList = [];
    lottoTickets.forEach((lotto) => {
      const result = lotto.getWinningResult(
        parsedWinNumber,
        parseInt(bonusNumber, 10),
      );
      rankList.push(result);
    });
    const rankArray = Statistics.countOccurrences(rankList);
    Handler.print(Formatter.formatResult(rankArray));
    const profit = new ProfitCal(rankList);
    Handler.print(Formatter.formatProfile(profit.getProfitRate()));
  }
}

export default App;
