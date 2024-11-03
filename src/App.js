import { Console } from "@woowacourse/mission-utils";
import { getLottoCnt } from "./buyPrice.js";
import { checkLotto, makeLotto, organizeLotto, printResult } from "./lottoNumber.js";
import { getBonusNumer, getWinningNumbers } from "./winningNumber.js";

class App {
  async run() {

    try{
      const LottoCnt = await getLottoCnt();
      const LottoList = makeLotto(LottoCnt);
      const WinningNumberList = await getWinningNumbers();
      const BONUS_NUMBER = await getBonusNumer(WinningNumberList);
      const correctCntBonusList = checkLotto(LottoList, BONUS_NUMBER, WinningNumberList);
      const result = organizeLotto(correctCntBonusList);
      printResult(LottoCnt, result);
    }catch(error){
      Console.print(error.message);
    }
  }
}

export default App;
