import { Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class App {
  async run() {
    try {
      const lotto = new Lotto();
      await lotto.initialize();
    } catch (error) {
      Console.print(error.message);
      //throw error; // 예외를 다시 던져 테스트코드가 감지할 수 있도록 함
    }
  }
}

export default App;
