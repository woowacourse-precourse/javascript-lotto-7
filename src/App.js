import LottoInputReader from './classes/LottoInputReader';

class App {
  async run() {
    const lottoPurchaseAmount =
      await LottoInputReader.readLottoPurchaseAmount();
    const winningNumber = await LottoInputReader.readWinningNumbers();
    const bonusNumber = await LottoInputReader.readBonusNumber();
  }
}

export default App;
