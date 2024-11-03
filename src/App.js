import { Console } from "@woowacourse/mission-utils";
import InputValue from "./InputValue.js";
import PurchaseMoney from "./PurchaseMoney.js";
import LottoGenerator from "./LottoGenerator.js";
import OutputValue from "./OutputValue.js";

class App {
  purchaseMoney;

  async run() {
    await this.inputPurchaseMoney();
    await this.outputLottoTickets();
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
}

export default App;
