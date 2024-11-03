import { INPUT, OUTPUT } from "./constants/message.js";
import { getInput } from "./io/Input.js";
import { getOutput, getTicketNumber } from "./io/Output.js";
import Price from "./domain/Price.js";
import Ticket from "./domain/Ticket.js";

class App {
  async run() {
    try {
      const purchasePriceInput = await getInput(INPUT.PURCHASE_PRICE);
      const purchase = new Price(purchasePriceInput);

      getOutput(`\n${purchase.count}` + OUTPUT.PURCHASE);

      const ticketArr = new Ticket(purchase.count);
      getTicketNumber(ticketArr.results);
    } catch (error) {
      console.log("err", error);
    }
  }
}

export default App;
