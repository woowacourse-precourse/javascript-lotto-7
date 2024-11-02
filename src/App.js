import { Console } from '@woowacourse/mission-utils';
import Lotto from './classes/Lotto.js';
import LottoGenerator from './classes/LottoGenerator.js';
import LottoGame from './classes/LottoGame.js';
import InputView from './views/InputView.js';

class App {
  async run() {
    const inputView = new InputView();
    const purchasePrice = await inputView.inputPurchaseAmount();

    // 구입 금액으로 로또 생성
    const lottoManager = new LottoGenerator(purchasePrice);

    // 로또 개수 출력
    Console.print(`\n${lottoManager.lottoCount}개를 구매했습니다.`);

    // 로또 개수로 무작위 번호 추첨하여 로또 생성
    lottoManager.generateLottos();

    // 생성된 로또 가져오기
    const myLottos = lottoManager.getLottos();

    // 생성된 로또 형식에 맞게 출력
    myLottos.forEach((myLotto) =>
      Console.print(`[${myLotto.toString().split(',').join(', ')}]`)
    );

    const winningNumbersInput = await inputView.inputWinningNumbers();
    const winningNumbers = winningNumbersInput
      .split(',')
      .map((lottoNumber) => parseInt(lottoNumber));

    const winningLotto = new Lotto(winningNumbers);

    const bonusNumber = await inputView.inputBonusNumber();

    const lottoGame = new LottoGame(myLottos, winningLotto, bonusNumber);
    const results = lottoGame.drawLotto();
    Console.print('\n당첨 통계\n---');
    lottoGame.displayResults(results);

    lottoGame.calculateLottoPrize(purchasePrice, results);
  }
}

export default App;
