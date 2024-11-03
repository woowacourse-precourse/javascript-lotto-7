import Lotto from './classes/Lotto.js';
import LottoGenerator from './classes/LottoGenerator.js';
import LottoGame from './classes/LottoGame.js';
import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';

class App {
  async run() {
    const inputView = new InputView();
    const outputView = new OutputView();

    const lottoManager = await inputView.inputPurchaseAmount();

    // 로또 개수 출력
    outputView.printLottoCount(lottoManager.lottoCount);

    // 로또 개수로 무작위 번호 추첨하여 로또 생성
    lottoManager.generateLottos();

    // 생성된 로또 가져오기
    const myLottos = lottoManager.getLottos();

    // 생성된 로또 형식에 맞게 출력
    outputView.printMyLotto(myLottos);

    // 로또 당첨 번호 입력
    const winningNumbersInput = await inputView.inputWinningNumbers();

    // 입력된 당첨 번호 숫자로 파싱
    const winningNumbers = winningNumbersInput
      .split(',')
      .map((lottoNumber) => parseInt(lottoNumber));

    // 당첨 번호 객체 생성 및 검증
    const winningLotto = new Lotto(winningNumbers);

    // 보너스 번호 입력
    const bonusNumber = await inputView.inputBonusNumber();

    // 로또 추첨 시작(내가 구매한 로또, 로또 당첨 번호, 보너스 번호, 구입 금액)
    const lottoGame = new LottoGame(
      myLottos,
      winningLotto,
      bonusNumber,
      lottoManager.purchasePrice
    );

    const lottoResult = lottoGame.drawLotto();
    outputView.printLottoResult(lottoResult);
    //  로또 추첨, 로또 결과 출력 (분리 필요성)

    const profitRate = lottoGame.calculateLotto();
    outputView.printLottoProfit(profitRate);
  }
}

export default App;
