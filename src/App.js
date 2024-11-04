import Price from "./Model/Price.js";
import LottoList from "./Model/LottoList.js";
import WinningNumbers from "./Model/WinningNumbers.js";
import LottoResult from "./Model/LottoResult.js";
import ConsoleView from "./View/ConsoleView.js";

class App {
  async run() {
    // 1~2. 로또 구입 금액 입력 및 유효성 검사
    const priceInput = await ConsoleView.readPriceInput();
    const priceInst = new Price(priceInput);

    // 3. 발행한 금액 수량 출력
    const lottoNum = priceInst.getPrice() / 1000;
    ConsoleView.printLottoPurchaseCount(lottoNum);

    const lottoListInst = new LottoList(lottoNum);

    // 4. 발행한 로또 번호 출력
    ConsoleView.printLottoNumbers(lottoListInst.getLottoList());

    const winningNumInst = new WinningNumbers();

    // 5. 당첨 번호 입력
    const winningLottoInput = await ConsoleView.readWinningNumbers();

    // 6. 당첨 번호 유효성 검사
    winningNumInst.setWinningLotto(winningLottoInput);

    // 7. 보너스 번호 입력
    const bonusNumberInput = await ConsoleView.readBonusNumber();

    // 8. 보너스 번호 유효성 검사
    winningNumInst.setBonusNumber(bonusNumberInput);

    // 9. 당첨 내역 출력
    const lottoResultInst = new LottoResult(
      lottoListInst.getLottoList(),
      winningNumInst.getWinningLotto(),
      winningNumInst.getBonusNumber()
    );

    const lottoResult = lottoResultInst.getLottoResult();
    ConsoleView.printLottoResult(lottoResult);

    // 10. 수익률 출력
    ConsoleView.printReturnRate(lottoResultInst.getReturnRate());
  }
}

export default App;
