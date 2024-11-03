import Bonus from "./Bonus.js";
import Lotto from "./Lotto.js";
import Price from "./Price.js";
import { read, print } from "./util/io.js";
import {
  generateLottoNumbers,
  loopPrintLottoNumbers,
  printResult,
} from "./util/lotto-util.js";
import COMMON_MESSAGES from "./util/messages/message.js";

class App {
  async run() {
    try {
      const inputPrice = await read(COMMON_MESSAGES.INPUT.LOTTO_PRICE);
      const price = new Price(inputPrice);

      const generatedNumbers = generateLottoNumbers(price.lottoCount);
      loopPrintLottoNumbers(price.lottoCount, generatedNumbers);

      const inputLottoNumbers = await read(COMMON_MESSAGES.INPUT.LOTTO_NUMBER);
      const lottoNumbers = new Lotto(inputLottoNumbers);

      const inputBonusNumber = await read(COMMON_MESSAGES.INPUT.BONUS_NUMBER);
      const bonusNumber = new Bonus(inputBonusNumber, lottoNumbers.value);

      printResult(lottoNumbers.value, bonusNumber.value, generatedNumbers);
    } catch (e) {
      print(e.message);
    }
  }
}

export default App;
