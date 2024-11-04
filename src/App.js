import { offerLottoSheet } from "./LottoMachine.js";
import { calculateWinning } from "./LottoCalculator.js";
import { getBonusNumber, getLottoNumber, getMoney, printLottoNumbers, printResult } from "./View.js";

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
  }
}

export default App;
