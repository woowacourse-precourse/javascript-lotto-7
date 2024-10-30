import Lotto from "./Lotto.js";
import readline from "readline";

class App {
  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  run() {
    this.askPurchaseAmount();
  }

  askPurchaseAmount() {
    this.rl.question("Enter purchase amount: ", (amount) => {
      try {
        const tickets = Lotto.purchaseTickets(parseInt(amount, 10));
        console.log(`${tickets.length} tickets purchased:`);
        tickets.forEach((ticket, index) => {
          console.log(`Ticket ${index + 1}:`, ticket.getNumbers());
        });
        this.rl.close();
      } catch (error) {
        console.log(error.message);
        this.askPurchaseAmount();
      }
    });
  }
}

export default App;
