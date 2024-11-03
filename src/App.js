import { Console } from "@woowacourse/mission-utils";
import InputValue from "./InputValue.js";
import PurchaseMoney from "./PurchaseMoney.js";
import LottoGenerator from "./LottoGenerator.js";
import OutputValue from "./OutputValue.js";
import Lotto from "./Lotto.js";

class App {
  purchaseMoney;
  winningNumbers;

  async run() {
    await this.inputPurchaseMoney();
    await this.outputLottoTickets();
    await this.inputWinningNumbers();
  }

  async inputPurchaseMoney() {
    while (true) {
      try {
        this.purchaseMoney = await InputValue.purchaseMoney();
        new PurchaseMoney(this.purchaseMoney);
        return this.purchaseMoney;
      } catch (e) {
        Console.print(e.message);
      }
    }
  }

  // 로또 티켓 수량과 로또 티켓 리스트
  outputLottoTickets() {
    const lottoData = new LottoGenerator(this.purchaseMoney);
    const { lottoQuantity, ticketList } = lottoData.getLottoData();

    OutputValue.printLottoSummary(lottoQuantity, ticketList);
  }

  async inputWinningNumbers() {
    while (true) {
      try {
        this.winningNumbers = await InputValue.winningNumbers();
        new Lotto(this.winningNumbers);
        return this.winningNumbers;
      } catch (e) {
        Console.print(e.message);
      }
    }
  }
}

export default App;
