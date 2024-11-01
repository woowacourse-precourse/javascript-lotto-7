import { Console } from '@woowacourse/mission-utils';
import { inputAmount } from './utils/inputService.js';
import { outputPayment } from './utils/outputService.js';

class App {
  async run() {
    const amount = await inputAmount();
    Console.print('');
    outputPayment(amount);
  }
}

export default App;
