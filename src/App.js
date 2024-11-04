import { Console } from "@woowacourse/mission-utils";
import IOHandler from "./IOHandler.js";
import { Price, LottoStore, Lotto, BonusNumber, LottoCalculate } from "./lotto/index.js";

class App {
  async run() {
    const io = new IOHandler(Console);
    const price = await io.retryUntilValid(io.getLottoPrice, (price) => new Price(price));

    const lottoNumbers = LottoStore.getLottoNumbers(price);
    io.printPurchaseCountAndLottoNumbers(lottoNumbers);

    const winningNumbers = await io.retryUntilValid(io.getWinningNumbers, (winningNumber) => new Lotto(winningNumber));
    const bonusNumber = await io.retryUntilValid(
      io.getBonusNumber,
      (bonusNumber) => new BonusNumber(bonusNumber, winningNumbers)
    );

    const { lottoResult, revenueRate } = LottoCalculate.getLottoResult(
      lottoNumbers,
      winningNumbers,
      bonusNumber,
      price
    );
    io.printResultAndRevenueRate(lottoResult, revenueRate);
  }
}

export default App;
