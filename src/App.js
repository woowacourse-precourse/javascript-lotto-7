import TicketController from './controller/TicketController.js';

class App {
  async run() {
    const ticket = new TicketController();
    ticket.getTicket();
  }
}

export default App;
