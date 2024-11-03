import { getLottoCnt } from "./BuyPrice.js";
import { makeLotto } from "./lottoNumber.js";
import { getBonusNumer, getWinningNumbers } from "./winningNumber.js";

class App {
  async run() {
    const LottoCnt = await getLottoCnt();
    const LottoList = makeLotto(LottoCnt);
    const WinningNumberList = await getWinningNumbers();
    const BONUS_NUMBER = await getBonusNumer(WinningNumberList);
  }
}

export default App;
