import { Console } from "@woowacourse/mission-utils";
import PurchaseAmount from "./PurchaseAmount.js";
import LottoMachine from "./LottoMachine.js";
import { PURCHASE_AMOUNT_MESSAGE } from "./constants/output.js";
import { INPUT_MESSAGE } from "./constants/input.js";
import Lotto from "./Lotto.js";
import LottoBonus from "./LottoBonus.js";
import LottoResult from "./LottoResult.js";

class App {
  async run() {
    // 구매 금액 입력
    const amount = await this.getPurchasedAmount();
    
    // 구매한 수량 및 로또 번호 출력
    Console.print(PURCHASE_AMOUNT_MESSAGE(amount));
    const lottos = [
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ];
    lottos.forEach((lotto) => Console.print(`[${lotto.join(', ')}]`));

    // 당첨 번호 입력
    const winningLottoNumbers = await this.getLottoNumbers();
    const bonusLottoNumber = await this.getLottoBonusNumber(winningLottoNumbers);

    // 당첨 결과 출력
    const lottoResult = new LottoResult(amount);
    lottoResult.calculateResults(lottos, winningLottoNumbers, bonusLottoNumber);
    Console.print("\n당첨 통계");
    Console.print("---");
    lottoResult.generateStatistics().forEach((statistic) => Console.print(statistic));
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
      const winningLottoNumbers = new Lotto(inputNumbers);
      return winningLottoNumbers.getNumbers();
    } catch (error) {
      Console.print(error.message);
      return this.getLottoNumbers();
    }
  }

  async getLottoBonusNumber(winningLottoNumbers) {
    try {
      const input = await Console.readLineAsync(INPUT_MESSAGE.LOTTO_BONUS_NUMBER);
      const bonusNumber = new LottoBonus(Number(input), winningLottoNumbers);
      return bonusNumber.getNumber();
    } catch (error) {
      Console.print(error.message);
      return this.getLottoBonusNumber(winningLottoNumbers);
    }
  }
}

export default App;
