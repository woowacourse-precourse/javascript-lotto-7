import { CONFIG, INFO_MESSAGE } from "./libs/constants.js";
import { calculateAmount } from "./libs/helpers.js";
import { getInput, pickUniqueNumbersInRange, printResult } from "./libs/utils.js";
import { validateNumberType } from "./libs/validate.js";
import Lotto from "./Lotto.js";

class App {
  async run() {
    const amount = await getInput(INFO_MESSAGE.PURCHASE_AMOUNT);
    validateNumberType(amount);
    const calculatedAmount = calculateAmount(amount);
    printResult(INFO_MESSAGE.PURCHASE_CONFORM(calculatedAmount));

    const lottoNumbers = Array.from({ length: calculatedAmount }, (_) => {
      const lotto = pickUniqueNumbersInRange(CONFIG.MIN_LOTTO_NUMBER, CONFIG.MAX_LOTTO_NUMBER, CONFIG.LOTTO_COUNT).sort(
        (a, b) => a - b
      );
      return new Lotto(lotto);
    });

    lottoNumbers.forEach((lotto) => `${lotto.print()}\n`);
  }
}

export default App;
