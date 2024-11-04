import { LOTTO_PRICE } from "./constants/lotto.js";
import Input from "./utils/Input.js";
import Drawing from "./main/Drawing.js";
import Output from "./utils/Output.js";

class App {
  async run() {
    const paymentPrice = await Input.getPaymentPrice();

    if (paymentPrice % LOTTO_PRICE !== 0) {
      throw new Error("[ERROR] 1000원 단위로 입력해 주세요.");
    }

    const lottoCount = paymentPrice / LOTTO_PRICE;
    Output.printLottoCount(lottoCount);

    for (let i = 0; i < lottoCount; i++) {
      const lottoNumbers = await Drawing.drawNumbers();
      Output.printLottoNumbers(lottoNumbers);
    }

    const winningNumbers = await Input.getWinningNumbers();

    const bonusNumbers = await Input.getBonusNumbers();

    await Output.printWinningResult(winningNumbers, bonusNumbers);
  }
}

export default App;
