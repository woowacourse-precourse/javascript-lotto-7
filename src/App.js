import { Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import Input from "./Input.js";
import Output from "./Output.js";
import { LOTTO_NUMBERS } from "./constants/lotto.js";
import Validate from "./Validate.js";

class App {
  async run() {
    try {
      const { purchaseAmount } = await Input.getPurchaseAmount();
      Validate.checkPurchaseAmount(purchaseAmount);

      const lottoCount = purchaseAmount / 1000;

      Output.printLottoCount(lottoCount);

      const purchasedLotto = Array.from({ length: lottoCount }, () => {
        const randomLottoNumber = Random.pickUniqueNumbersInRange(
          LOTTO_NUMBERS.MIN_RANGE_1,
          LOTTO_NUMBERS.MAX_RANGE_45,
          LOTTO_NUMBERS.COUNT_6
        ).sort((a, b) => a - b);

        Output.printPurchasedLottoNumber(randomLottoNumber);

        return randomLottoNumber;
      });

      const { lottoWinningNumber } = await Input.getLottoWinningNumber();
      Validate.checkLottoNumbers([...lottoWinningNumber]);

      const { bonusNumber } = await Input.getBonusNumber();
      Validate.checkBonusNumber(bonusNumber, lottoWinningNumber);

      const lotto = new Lotto(lottoWinningNumber);

      const lottoResult = lotto.checkLottoNumbers(purchasedLotto);

      const profitRate = lotto.getProfitRate(lottoResult, purchaseAmount);

      Output.printLottoResult(lottoResult);
      Output.printProfitRate(profitRate);

    } catch (error) {
      Output.printErrorMessage(error)
    }
  }
}

export default App;
