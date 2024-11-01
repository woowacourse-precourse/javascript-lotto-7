import { Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import LottoGenerator from './LottoGenerator.js';

class App {
  async run() {
    const purchaseAmount = await Console.readLineAsync(
      '구입금액을 입력해주세요.\n'
    );

    const lottoManager = new LottoGenerator(purchaseAmount);

    Console.print(`\n${lottoManager.lottoCount}개를 구매했습니다.`);

    lottoManager.createLotto();

    lottoManager.getLottoNumbers();

    const winningNumbersInput = await Console.readLineAsync(
      '당첨 번호를 입력해 주세요.\n'
    );
    const winningNumbers = winningNumbersInput
      .split(',')
      .map((lottoNumber) => parseInt(lottoNumber));

    const winningLotto = new Lotto(winningNumbers);

    const bonusNumber = await Console.readLineAsync(
      '\n보너스 번호를 입력해 주세요.\n'
    );
  }
}

export default App;
