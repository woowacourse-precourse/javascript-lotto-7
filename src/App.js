import LottoMachine from "./LottoMachine.js";
import Output from "./Output.js";

class App {
  async run() {
    const userPurchaseAmount = await LottoMachine.getUserPurchaseAmount();
    const winningAndBonusNumber = await LottoMachine.getWinningAndBonusNumber();
    const totalLottoCount = LottoMachine.getTotalLottoCount(userPurchaseAmount);
    const purchasedLottos = await LottoMachine.getLottoNumbers(totalLottoCount);

    const output = new Output(
      userPurchaseAmount,
      winningAndBonusNumber,
      totalLottoCount,
      purchasedLottos
    );

    output.printSortedLottoNumbers();
    output.printResult();
    output.printROI();
  }
}

export default App;
