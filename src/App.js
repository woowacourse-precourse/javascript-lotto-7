import { Console } from "@woowacourse/mission-utils";
import PurchaseAmount from "./PurchaseAmount.js";
import LottoMachine from "./LottoMachine.js";
import { PURCHASE_AMOUNT_MESSAGE } from "./constants/output.js";
import { INPUT_MESSAGE } from "./constants/input.js";
import Lotto from "./Lotto.js";
import LottoBonus from "./LottoBonus.js";

class App {
  async run() {
    // 구매 금액 입력
    const amount = await this.getPurchasedAmount();
    
    // 구매한 수량 및 로또 번호 출력
    Console.print(PURCHASE_AMOUNT_MESSAGE(amount));
    const lottos = LottoMachine.createLottos(amount);
    lottos.forEach((lotto) => Console.print(`[${lotto.join(', ')}]`));

    // 당첨 번호 입력
    const winningLottoNumbers = await this.getLottoNumbers();
    const bonusLottoNumber = await this.getLottoBonusNumber(winningLottoNumbers);
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
      const inputNumbers = input.split(",").map((number) => Number(number));
      return new Lotto(inputNumbers);
    } catch (error) {
      Console.print(error.message);
      return this.getLottoNumbers();
    }
  }

  async getLottoBonusNumber(winningLottoNumbers) {
    try {
      const input = await Console.readLineAsync(INPUT_MESSAGE.LOTTO_BONUS_NUMBER);
      return new LottoBonus(Number(input), winningLottoNumbers);
    } catch (error) {
      Console.print(error.message);
      return this.getLottoBonusNumber(winningLottoNumbers);
    }
  }
}

export default App;
