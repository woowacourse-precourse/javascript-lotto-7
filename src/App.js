import { Console } from '@woowacourse/mission-utils';
import View from './View.js';

class App {
  async run() {
    try {
      const view = new View();
      await view.startLotto();
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
