import { Console } from "@woowacourse/mission-utils";
import InputValue from "./InputValue.js";
import PurchaseMoney from "./PurchaseMoney.js";
import LottoGenerator from "./LottoGenerator.js";

class App {
  purchaseMoney;

  async run() {
    await this.inputPurchaseMoney();
    await this.createLottoTickets();
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

  async createLottoTickets() {
    // 로또 수량과 랜덤 티켓 배열이 포함된 변수
    const lottoData = new LottoGenerator(this.purchaseMoney);
    const { quantity } = lottoData.getLottoGeneratorData();
  }
}

export default App;
