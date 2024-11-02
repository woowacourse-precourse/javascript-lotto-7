import { Console } from '@woowacourse/mission-utils';
import Lotto from './classes/Lotto.js';
import LottoGenerator from './classes/LottoGenerator.js';
import LottoGame from './classes/LottoGame.js';
import InputView from './views/InputView.js';

class App {
  async run() {
    const inputView = new InputView();
    const purchaseAmount = await inputView.inputPurchaseAmount();

    const lottoManager = new LottoGenerator(purchaseAmount);

    Console.print(`\n${lottoManager.lottoCount}개를 구매했습니다.`);

    lottoManager.createLotto();

    const myLottos = lottoManager.getLottoNumbers();
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

    lottoGame.calculateLottoPrize(purchaseAmount, results);
  }
}

export default App;
