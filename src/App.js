import Input from "./Inputs.js";
import LottoResult from "./LottoResult.js";

class App {
  async run() {
    const input = new Input();
    const bet = await input.inputMoney();
    const betList = bet.getBetResults()
    const lotto = await input.inputLotto();
    await lotto.inputBonusNumber();
    
    const lottoResult = new LottoResult(lotto.getLottoScore(betList));
    lottoResult.printWinningResult();
    lottoResult.printRateOfReturn(bet.getMoney());
  }
}

export default App;
