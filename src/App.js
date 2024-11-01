import { Console } from "@woowacourse/mission-utils";
import IOHandler from "./IOHandler.js";
import { Price, LottoStore } from "./lotto/index.js";

class App {
  async run() {
    const io = new IOHandler(Console);
    const price = await io.retryUntilValid(io.getLottoPrice, (price) => new Price(price));

    const lottoPurchaseCount = LottoStore.getLottoPurchaseCount(price);
    const lottoNumbers = LottoStore.generateLottoNumbers(lottoPurchaseCount);
    io.printLottoPurchaseCount(lottoPurchaseCount);
    io.printLottoNumbers(lottoNumbers);
  }
}

export default App;
