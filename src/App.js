import Input from './utils/io/Input.js';
import INPUT from './constants/InputMessage.js';

class App {
  async run() {
    const cost = await Input.get(INPUT.LOTTO_PRICE);
  }
}

export default App;
