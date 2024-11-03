import Jackpot from './Jackpot.js';
import Ticket from './Ticket.js';

class App {
  async run() {
    const ticket = new Ticket();
    await ticket.startGetTicket();

    const jackpot = new Jackpot();
    await jackpot.startGetJackpot();
  }
}

export default App;
