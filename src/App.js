import LottoInputReader from './classes/LottoInputReader';
import LottoIssuer from './classes/LottoIssuance';

class App {
  async run() {
    const lottoPurchaseAmount =
      await LottoInputReader.readLottoPurchaseAmount();
    const winningNumber = await LottoInputReader.readWinningNumbers();
    const bonusNumber = await LottoInputReader.readBonusNumber();

    const lottoCount = LottoIssuer.calculateLottoCount(lottoPurchaseAmount);
    const lottos = LottoIssuer.generateLottos(lottoCount);
  }
}

export default App;
