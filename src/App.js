import { Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import LottoGenerator from './LottoGenerator.js';
import LottoGame from './LottoGame.js';

class App {
  async run() {
    const purchaseAmount = await Console.readLineAsync(
      '구입금액을 입력해주세요.\n'
    );

    const lottoManager = new LottoGenerator(purchaseAmount);

    Console.print(`\n${lottoManager.lottoCount}개를 구매했습니다.`);

    lottoManager.createLotto();

    const myLottos = lottoManager.getLottoNumbers();
    myLottos.forEach((myLotto) => Console.print(myLotto));

    const winningNumbersInput = await Console.readLineAsync(
      '\n당첨 번호를 입력해 주세요.\n'
    );
    const winningNumbers = winningNumbersInput
      .split(',')
      .map((lottoNumber) => parseInt(lottoNumber));

    const winningLotto = new Lotto(winningNumbers);

    const bonusNumber = await Console.readLineAsync(
      '\n보너스 번호를 입력해 주세요.\n'
    );

    const lottoGame = new LottoGame(myLottos, winningLotto, bonusNumber);
    const results = lottoGame.drawLotto();
    Console.print('\n당첨 통계\n---');
    lottoGame.displayResults(results);

    lottoGame.calculateLottoPrize(purchaseAmount, results);
  }
}

export default App;
