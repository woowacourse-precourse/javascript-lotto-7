import { RESULT } from '../constants/Constants.js';
import JackpotController from './JackpotController.js';
import TicketController from './Ticket.js';
import { Console } from '@woowacourse/mission-utils';

class Match {
  constructor() {
    this.count = 0;
  }

  getTicket() {
    const ticketControl = new TicketController();
    return ticketControl.setTicketCount();
  }

  getTicketArray() {
    const ticketControl = new TicketController();
    const ticketArray = ticketControl.getTicketArray();

    return ticketArray;
  }

  getJackpot() {
    const jackpotControl = new JackpotController();
    return jackpotControl.setJackpot();
  }

  getBonus() {
    const jackpotControl = new JackpotController();
    return jackpotControl.setBonusJackpot();
  }

  displayResultHeader() {
    Console.print(RESULT.HEADER);
  }
}

export default Match;
