import INPUT from './constants/InputMessage.js';
import validatePrice from './utils/validation/validatePrice.js';
import InputRepeat from './utils/io/InputRepeat.js';
import { parseStringToNumber } from './utils/NumberUtils.js';
import LottoMachine from './components/LottoMachine.js';

class App {
  async run() {
    const inputs = await InputRepeat(INPUT.LOTTO_PRICE, validatePrice);

    const parsedNumber = parseStringToNumber(inputs);
    const lottoMachine = new LottoMachine(parsedNumber);
    const lottoList = lottoMachine.getLottoList();
  }
}

export default App;
