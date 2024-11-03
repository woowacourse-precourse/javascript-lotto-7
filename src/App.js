import PriceInputParser from './inputParser/PriceInputParser.js';
import BonusNumberInputParser from './inputParser/BonusNumberInputParse.js';
import WinningNumbersInputParser from './inputParser/WinnigNumbersInputParser.js';
import LottoManager from './lotto/LottoManager.js';

class App {
  #priceInputParser = new PriceInputParser();

  #winningNumbersInputParser = new WinningNumbersInputParser();

  #bonusNumberInputParser = new BonusNumberInputParser();

  async run() {
    const price = await this.#priceInputParser.readLoop();
    const winningNumbers = await this.#winningNumbersInputParser.readLoop();
    const bonusNumber = await this.#bonusNumberInputParser.readLoop();

    const lottoManager = new LottoManager(winningNumbers, bonusNumber, price);

    lottoManager.printResult();
  }
}

export default App;
