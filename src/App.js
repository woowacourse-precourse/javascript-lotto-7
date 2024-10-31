import { INFO_MESSAGES, PROMPT_MESSAGES } from './constants.js';
import LottoMachine from './LottoMachine.js';
import Money from './Money.js';
import View from './View.js';

class App {
  async run() {
    const amount = await View.readInput(PROMPT_MESSAGES.INPUT_MONEY);
    const money = new Money(amount);
    const count = money.getCount();
    const lottos = LottoMachine.generateLottos(count);

    View.printResult(`\n${count + INFO_MESSAGES.PRINT_LOTTOS}`);
    View.displayLottos(lottos);
  }
}

export default App;
