import Match from './domains/Match.js';
import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
      const match = new Match();
      await match.getLottos();
      await match.getJackpot();
      match.resetRanks(); // 매 실행 시 rank를 초기화
      match.matchLottos();
      match.displayResult(); // 결과를 출력
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
