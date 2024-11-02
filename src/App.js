import BuyLotto from './BuyLotto.js';
import LottoResult from './LottoResult.js';
import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGES, SIGNS } from './constants.js';

class App {
  async run() {
    const buyLotto = new BuyLotto();
    const lottos = await buyLotto.buyLotto();
    const lottoResult = new LottoResult(lottos);
    const result = await lottoResult.lottoResult();

    Console.print(OUTPUT_MESSAGES.matchStatistics);
    Console.print(SIGNS.threeHyphen);
    Console.print(
      '3개 일치 (5,000원) - ' +
        result[3] +
        '개\n' +
        '4개 일치 (50,000원) - ' +
        result[4] +
        '개\n' +
        '5개 일치 (1,500,000원) - ' +
        result[5] +
        '개\n' +
        '5개 일치, 보너스 볼 일치 (30,000,000원) - ' +
        result.bonus +
        '개\n' +
        '6개 일치 (2,000,000,000원) - ' +
        result[6] +
        '개'
    );
  }
}

export default App;
