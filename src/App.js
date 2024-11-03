import { INPUT, OUTPUT, RATE, SECTION } from "./constants/message.js";
import { getInput } from "./io/Input.js";
import { getOutput, getTicketNumber } from "./io/Output.js";
import Price from "./domain/Price.js";
import Ticket from "./domain/Ticket.js";
import Bonus from "./domain/Bonus.js";
import Lotto from "./domain/Lotto.js";

class App {
  async run() {
    try {
      const purchasePriceInput = await getInput(INPUT.PURCHASE_PRICE);
      const purchase = new Price(purchasePriceInput);

      getOutput(`\n${purchase.count}` + OUTPUT.PURCHASE);

      const ticketArr = new Ticket(purchase.count);
      await getTicketNumber(ticketArr.results);

      const lottoInput = await getInput(INPUT.LOTTO_NUMBER);
      const lottoNumber = new Lotto(lottoInput);

      const bonusInput = await getInput(INPUT.BONUS);
      const bonus = new Bonus(bonusInput, lottoNumber.value);

      getOutput(`\n` + RATE + `\n` + SECTION);
    } catch (error) {
      console.log("err", error);
    }
  }
}

export default App;
