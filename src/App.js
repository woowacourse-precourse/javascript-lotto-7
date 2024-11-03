import Input from "../src/Input.js";
import Lotto from "./Lotto.js";
import Output from "./Output.js";

class App {
  async run() {
    const money = await Input.getMoney();
    const lottoCount = money / 1000;
    const lottoList = [];

    for(let i = 0; i < lottoCount; i++) {
      const lottoNumbers = Lotto.generateLottoNumbers();
      lottoList.push(new Lotto(lottoNumbers));
    }

    Output.printLottoCount(lottoCount);
    Output.printLottoNumbers(lottoList);

    const jackpotNumber = await Input.getJackpotNumber();
    const bonusNumber = await Input.getBonusNumber(jackpotNumber);
  }
}

export default App;
