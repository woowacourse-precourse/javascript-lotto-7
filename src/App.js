import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import { INPUT_MESSAGE } from "./constants/message.js";
import Validate from "./utils/validate.js";

class App {
  async run() {
    try {
      const purchaseAmount = await Console.readLineAsync(
        INPUT_MESSAGE.PURCHASE_AMOUNT
      );

      Validate.checkPurchaseAmount(Number(purchaseAmount));

      const lottoCount = Number(purchaseAmount) / 1000;

      Console.print(`${lottoCount}개를 구매했습니다.`);

      const myLotto = Array.from({ length: lottoCount }, () => {
        const myLottoNumber = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
          (a, b) => a - b
        );

        Console.print(`[${myLottoNumber.join(", ")}]`);

        return new Lotto(myLottoNumber);
      });

      // lotto number input
      const lottoNumber = await Console.readLineAsync(
        INPUT_MESSAGE.LOTTO_NUMBER
      );

      const lottoArray = new Set(lottoNumber.split(",").map(Number));

      Validate.checkLottoNumbers([...lottoArray]);

      // bonus number input
      const bonusNumber = await Console.readLineAsync(
        INPUT_MESSAGE.BONUS_NUMBER
      );

      Validate.checkBonusNumber(Number(bonusNumber), lottoArray);
    } catch (error) {
      console.log(`[ERROR] ${error.message}`);
    }
  }
}

export default App;
