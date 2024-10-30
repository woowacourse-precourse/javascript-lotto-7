import { PROMPT_MESSAGES } from './constants.js';
import Money from './Money.js';
import { readInput } from './utils.js';

class App {
  async run() {
    const amount = await readInput(PROMPT_MESSAGES.INPUT_MONEY);
    const money = new Money(amount);
    const count = money.getCount();
  }
}

export default App;
