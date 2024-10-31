import INPUT from './constants/InputMessage.js';
import validatePrice from './utils/validation/validatePrice.js';
import InputRepeat from './utils/io/InputRepeat.js';

class App {
  async run() {
    const inputs = InputRepeat(INPUT.LOTTO_PRICE, validatePrice);
  }
}

export default App;
