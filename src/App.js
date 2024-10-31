import LottoMachine from "./LottoMachine.js";
import Output from "./Output.js";

class App {
  async run() {
    const userPurchaseAmount = await LottoMachine.getUserPurchaseAmount();
    const winningAndBonusNumber = await LottoMachine.getWinningAndBonusNumber();
    const totalLottoCount = LottoMachine.getTotalLottoCount(userPurchaseAmount);
    const purchasedLottos = await LottoMachine.getLottoNumbers(totalLottoCount);

    // LottoMachine 클래스를 통해 얻은
    // 구매 금액, 구매한 로또들, 당첨 번호, 구매한 로또 수를
    // 인자로 받는 Output 클래스
    const output = new Output(
      userPurchaseAmount,
      winningAndBonusNumber,
      totalLottoCount,
      purchasedLottos
    );
    output.printSortedLottoNumbers();
    output.calculateROI();
  }
}

export default App;
