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

    const results = this.calculateResults(lottoList, jackpotNumber, bonusNumber);
    Output.printStatics(results);

    const totalPrize = this.calculateTotalPrize(results);
    const profitRate = this.calculateRate(totalPrize, money);
    Output.printProfitRate(profitRate);
  }
  
  calculateResults(lottoList, jackpotNumber, bonusNumber) {
    const lottoResult = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

    lottoList.forEach((lotto) => {
      const matchCount = lotto.getNumbers().filter(num => jackpotNumber.includes(num)).length;
      const hasBonus = lotto.getNumbers().includes(bonusNumber);

      if (matchCount === 6) lottoResult[1] += 1;
      else if (matchCount === 5 && hasBonus) lottoResult[2] += 1;
      else if (matchCount === 5) lottoResult[3] += 1;
      else if (matchCount === 4) lottoResult[4] += 1;
      else if (matchCount === 3) lottoResult[5] += 1;
    });
    return lottoResult;
  }

  calculateTotalPrize(lottoResult) {
    const prizeMoney = { 1: 2000000000, 2: 30000000, 3: 1500000, 4: 50000, 5: 5000 };
    let totalPrize = 0;
  
    for (const rank in lottoResult) {
      totalPrize += prizeMoney[rank] * lottoResult[rank];
    }
    return totalPrize;
  }

  calculateRate(totalPrize, purchaseAmount) {
    return ((totalPrize / purchaseAmount) * 100).toFixed(1);
  }
}

export default App;
