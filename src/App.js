import BonusNumberInputParse from './BonusNumberInputParse.js';
import LottoManager from './LottoManager.js';
import PriceInputParser from './PriceInputParser.js';
import WinningNumbersInputParser from './WinningNumbersInputParser.js';
// import Lotto from './Lotto.js';

class App {
  #priceInputParser = new PriceInputParser();

  #winningNumbersInputParser = new WinningNumbersInputParser();

  #bonusNumberInputParser = new BonusNumberInputParse();

  async run() {
    const price = await this.#priceInputParser.readLoop();
    const winnigNumbers = await this.#winningNumbersInputParser.readLoop();
    const bonusNumber = await this.#bonusNumberInputParser.readLoop();

    // const lotto = new Lotto(winnigNumbersArray, bonusNumber, price);
    const lotto = new LottoManager(winnigNumbers, bonusNumber, price);
    lotto.printResult();
  }
}

export default App;
