import { Console } from "@woowacourse/mission-utils";
import PurchaseAmount from "./PurchaseAmount.js";
import LottoMachine from "./LottoMachine.js";
import { PURCHASE_AMOUNT_MESSAGE } from "./constants/output.js";
import { INPUT_MESSAGE } from "./constants/input.js";

class App {
  async run() {
    // 구매 금액 입력
    const amount = await this.getPurchasedAmount();
    
    // 구매한 수량 및 로또 번호 출력
    Console.print(PURCHASE_AMOUNT_MESSAGE(amount));
    const lottos = LottoMachine.createLottos(amount);
    lottos.forEach((lotto) => Console.print(`[${lotto.join(', ')}]`));
  }

  async getPurchasedAmount() {
    try {
      const input = await Console.readLineAsync(INPUT_MESSAGE.PURCHASE_AMOUNT);
      const amount = new PurchaseAmount(Number(input));
      return amount.getAmount();
    } catch (error) {
      Console.print(error.message);
      return this.getPurchasedAmount();
    }
  }

  async getLottoNumbers() {
    try {
      const input = await Console.readLineAsync(INPUT_MESSAGE.LOTTO_NUMBERS);
      const numbers = input.split(",").map((number) => Number(number));
    } catch (error) {
      Console.print(error.message);
      await this.getLottoNumbers();
    }
  }
}

export default App;
