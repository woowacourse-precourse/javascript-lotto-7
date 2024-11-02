import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import Validate from "./Validate.js";
import Input from "./Input.js";

class App {
  async run() {
    try {
      const { purchaseAmount } = await Input.getPurchaseAmount();
      Validate.checkPurchaseAmount(purchaseAmount);

      const lottoCount = purchaseAmount / 1000;

      Console.print(`${lottoCount}개를 구매했습니다.`);

      const myLotto = Array.from({ length: lottoCount }, () => {
        const myLottoNumber = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
          (a, b) => a - b
        );

        Console.print(`[${myLottoNumber.join(", ")}]`);

        return new Lotto(myLottoNumber);
      });

      const { myLottoNumbers } = await Input.getLottoNumber();
      Validate.checkLottoNumbers([...myLottoNumbers]);

      const { bonusNumber } = await Input.getBonusNumber();
      Validate.checkBonusNumber(bonusNumber, myLottoNumbers);
    } catch (error) {
      console.log(`[ERROR] ${error.message}`);
    }
  }
}

export default App;
