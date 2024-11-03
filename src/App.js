import Input from "./Input.js";
import Output from "./Output.js";

class App {
  async run() {
    const input = new Input();

    const { purchasedLottoCount, purchasedLotto } = await input.getPurchasedLotto();

    Output.printLottoCount(purchasedLottoCount);

    const { lottoClass } = await input.getLottoWinningNumbers();

    const winningNumbers = lottoClass.getWinningNumbers();

    const { bonusNumber } = await input.getBonusNumber(winningNumbers);

    const lottoResult = lottoClass.checkLottoNumbers(purchasedLotto, bonusNumber);

    const profitRate = lottoClass.getProfitRate(lottoResult, purchasedLottoCount);

    Output.printLottoResult(lottoResult);
    Output.printProfitRate(profitRate);
  }
}

export default App;
