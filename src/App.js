import LottoMachine from "./lottoMachine.js";

class App {
  async run() {
    // 구입 금액 입력
    await LottoMachine.askPayment();

    // 로또 발행
    LottoMachine.getLotto();

    // 당첨 번호 입력
    await LottoMachine.askWinningNumbers();

    // 보너스 번호 입력
    await LottoMachine.askBonusNumber();

    // 당첨 내역 및 수익률 출력
    LottoMachine.getResult();
  }
}

export default App;
