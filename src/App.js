import LottoManager from './LottoManager.js';
import PriceInputParser from './inputParser/PriceInputParser.js';
import WinningNumbersInputParser from './inputParser/WinningNumbersInputParser.js';
import BonusNumberInputParser from './inputParser/BonusNumberInputParse.js';
// import Lotto from './Lotto.js';

class App {
  #priceInputParser = new PriceInputParser();

  #winningNumbersInputParser = new WinningNumbersInputParser();

  #bonusNumberInputParser = new BonusNumberInputParser();

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
