import { PROMPT_MESSAGES } from './constants.js';
import Lotto from './Lotto.js';
import Money from './Money.js';
import { readInput } from './utils.js';

class App {
  async run() {
    const amount = await readInput(PROMPT_MESSAGES.INPUT_MONEY);
    const money = new Money(amount);
    const count = money.getCount();
    const lottos = this.generatorLottos(count);
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
