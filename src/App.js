import MatchController from './controller/MatchController.js';
import TicketController from './controller/TicketController.js';

class App {
  async run() {
    const ticket = new TicketController();
    await ticket.getTicket();

    const jackpot = new MatchController();
    await jackpot.setJackpot();
  }
}

export default App;
