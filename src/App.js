import { getLottoCnt } from "./BuyPrice.js";
import { checkLotto, makeLotto, organizeLotto, printResult } from "./lottoNumber.js";
import { getBonusNumer, getWinningNumbers } from "./winningNumber.js";

class App {
  async run() {
    const LottoCnt = await getLottoCnt();
    const LottoList = makeLotto(LottoCnt);
    const WinningNumberList = await getWinningNumbers();
    const BONUS_NUMBER = await getBonusNumer(WinningNumberList);
    checkLotto(LottoList, BONUS_NUMBER, WinningNumberList);
    organizeLotto(LottoList);
    printResult(LottoCnt);
  }
}

export default App;
