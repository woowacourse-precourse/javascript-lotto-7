import { Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import Input from "./Input.js";
import Output from "./Output.js";
import { LOTTO_NUMBERS } from "./constants/lotto.js";

class App {
  async run() {
    try {
      const { purchaseAmount } = await Input.getPurchaseAmount();

      const lottoCount = purchaseAmount / 1000;

      Output.printLottoCount(lottoCount);

      const purchasedLotto = Array.from({ length: lottoCount }, () => {
        const randomLottoNumber = Random.pickUniqueNumbersInRange(
          LOTTO_NUMBERS.MIN_RANGE_1,
          LOTTO_NUMBERS.MAX_RANGE_45,
          LOTTO_NUMBERS.COUNT_6,
        ).sort((a, b) => a - b);

        Output.printPurchasedLottoNumber(randomLottoNumber);

        return randomLottoNumber;
      });

      const { lottoWinningNumbers } = await Input.getLottoWinningNumbers();

      const { bonusNumber } = await Input.getBonusNumber(lottoWinningNumbers);

      const lotto = new Lotto(lottoWinningNumbers);

      const lottoResult = lotto.checkLottoNumbers(purchasedLotto, bonusNumber);

      const profitRate = lotto.getProfitRate(lottoResult, purchaseAmount);

      Output.printLottoResult(lottoResult);
      Output.printProfitRate(profitRate);
    } catch (error) {
      Output.printErrorMessage(error);
    }
  }
}

export default App;
