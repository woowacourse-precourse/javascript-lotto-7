import Jackpot from './modules/Jackpot.js';
import PracticeMatch from './Prac_Match.js';
import Ticket from './modules/Ticket.js';

class App {
  async run() {
    const ticket = new Ticket();
    await ticket.startGetTicket();

    const jackpot = new Jackpot();
    await jackpot.startGetJackpot();

    const match = new PracticeMatch();
    match.getLottos();
    match.matchLottos();
  }
}

export default App;
