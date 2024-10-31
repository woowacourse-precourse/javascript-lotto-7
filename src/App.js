import { Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import LottoGenerator from './LottoGenerator.js';

class App {
  async run() {
    const purchasePrice = await Console.readLineAsync(
      '구입금액을 입력해주세요.\n'
    );

    const purchasedLottos = new LottoGenerator(purchasePrice);

    Console.print(`\n${purchasedLottos.lottoCount}개를 구매했습니다.`);

    purchasedLottos.createLotto();

    purchasedLottos.getLottoNumbers();

    const lottoWinningNumbers = await Console.readLineAsync(
      '당첨 번호를 입력해 주세요.\n'
    );
    const lottoWinningNumbersArray = lottoWinningNumbers
      .split(',')
      .map((lottoNumber) => parseInt(lottoNumber));

    const lotto = new Lotto(lottoWinningNumbersArray);

    const bonusNumber = await Console.readLineAsync(
      '\n보너스 번호를 입력해 주세요.\n'
    );
  }
}

export default App;
