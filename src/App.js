import JackpotController from './controller/JackpotController.js';
import TicketController from './controller/TicketController.js';

class App {
  async run() {
    const ticket = new TicketController();
    await ticket.getTicket();

    const jackpot = new JackpotController();
    await jackpot.getJackpot();
  }
}

export default App;
