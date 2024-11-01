import { Console } from "@woowacourse/mission-utils";
import IOHandler from "./IOHandler.js";
import { Price, LottoStore, Lotto, BonusNumber } from "./lotto/index.js";

class App {
  async run() {
    const io = new IOHandler(Console);
    const price = await io.retryUntilValid(
      io.getLottoPrice,
      (price) => new Price(price)
    );

    const lottoPurchaseCount = LottoStore.getLottoPurchaseCount(price);
    const lottoNumbers = LottoStore.generateLottoNumbers(lottoPurchaseCount);
    io.printLottoPurchaseCount(lottoPurchaseCount);
    io.printLottoNumbers(lottoNumbers);

    const winningNumbers = await io.retryUntilValid(
      io.getWinningNumbers,
      (winningNumber) => new Lotto(winningNumber)
    );
    const bonusNumber = await io.retryUntilValid(
      io.getBonusNumber,
      (bonusNumber) => new BonusNumber(bonusNumber, winningNumbers)
    );
  }
}

export default App;
