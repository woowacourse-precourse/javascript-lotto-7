import { INFO_MESSAGES, PROMPT_MESSAGES } from './constants.js';
import Lotto from './Lotto.js';
import Money from './Money.js';
import View from './View.js';

class App {
  async run() {
    const amount = await View.promptForMoney(PROMPT_MESSAGES.INPUT_MONEY);
    const money = new Money(amount);
    const count = money.getCount();
    const lottos = this.generatorLottos(count);

    View.printResult(`\n${count + INFO_MESSAGES.PRINT_LOTTOS}`);
    View.displayLottos(lottos);
  }

  generatorLottos(count) {
    const lottos = [];
    const lotto = new Lotto();

    for (let i = 0; i < count; i++) {
      lottos.push(lotto.pickRandomNumbers());
    }

    return lottos;
  }
}

export default App;
