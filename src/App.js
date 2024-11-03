import { MissionUtils } from '@woowacourse/mission-utils';
import LottoStore from './LottoStore.js';

class App {
  async run() {
    try {
      const payment = await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.\n');
      this.validate(payment);
      const lottoStore = new LottoStore();
      lottoStore.buyLotto(Number(payment));
      MissionUtils.Console.print(`\n${lottoStore.getLottoCount()}개를 구매했습니다.`);
    } catch (error) {
      MissionUtils.Console.print(`[ERROR] ${error.message}`);
    }
  }

  validate(input) {
    if (input.trim() === '') {
      throw new Error('금액을 입력해주세요.');
    }
  }
}

export default App;
