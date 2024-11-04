import { INPUT, OUTPUT, RATE, SECTION } from "./constants/message.js";
import { getInput } from "./io/Input.js";
import { getLottoNumber, getOutput, getResult } from "./io/Output.js";
import Price from "./domain/Price.js";
import Ticket from "./domain/Ticket.js";
import Bonus from "./domain/Bonus.js";
import Lotto from "./domain/Lotto.js";
import Rate from "./domain/Rate.js";

class App {
  async run() {
    try {
      const purchasePriceInput = await getInput(INPUT.PURCHASE_PRICE);
      const purchase = new Price(purchasePriceInput);

      await getOutput(`\n${purchase.count}` + OUTPUT.PURCHASE);
      const ticketArr = new Ticket(purchase.count);

      const userLottos = ticketArr.generateTickets();
      const generateLottoNumbers = userLottos.map((lotto) => lotto.value);

      await getLottoNumber(generateLottoNumbers);

      const lottoInput = await getInput(INPUT.LOTTO_NUMBER);
      const winningNumbers = lottoInput.split(",").map(Number);

      const lottoNumber = new Lotto(winningNumbers);

      const bonusInput = await getInput(INPUT.BONUS);
      const bonus = new Bonus(bonusInput, lottoNumber.value);

      await getOutput(`\n` + RATE + `\n` + SECTION);

      const lottoResult = new Rate(lottoNumber.value, bonus.value);
      const winningStatus = lottoResult.calculateResult(userLottos);
      const rate = lottoResult.calculateRate(userLottos);

      await getResult(winningStatus);
      await getOutput(`총 수익률은 ${rate}%입니다.`);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default App;
