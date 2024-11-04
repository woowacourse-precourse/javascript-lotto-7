import { offerLottoSheet } from "./LottoMachine.js";
import { calculateProfit, calculateWinning, getWinningPrice } from "./LottoCalculator.js";
import { getBonusNumber, getLottoNumber, getMoney, printLottoNumbers, printProfit, printResult } from "./View.js";

class App {
  async run() {
    const lottoQuantity = await getMoney();
    const userLotto = await offerLottoSheet(lottoQuantity);
    await printLottoNumbers(lottoQuantity, userLotto);
    const winningNumbers = await getLottoNumber();
    const bonusNumber = await getBonusNumber(winningNumbers);
    let winningArray = [winningNumbers, bonusNumber];
    const winningResult =  await calculateWinning(winningArray, userLotto);
    await printResult(winningResult);
    const winningPrice = await getWinningPrice(winningResult);
    const profit = await calculateProfit(lottoQuantity*1000, winningPrice);
    await printProfit(profit);
  }
}

export default App;
