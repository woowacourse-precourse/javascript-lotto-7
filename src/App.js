import { Console } from '@woowacourse/mission-utils';
import Generator from './Generator.js';
import InputProcessor from './InputProcessor.js';
import Statistics from './Statistics.js';
import { LOTTO } from './constants/lotto.js';

class App {
  #purchasePrice;

  #winningNumbers;

  #bonusNumber;

  async run() {
    try {
      this.#purchasePrice = await InputProcessor.purchasePrice();
      const quantity = this.#purchasePrice / LOTTO.PRICE_UNIT;

      const lottoGenerator = new Generator(quantity);
      const lottos = lottoGenerator.execute();

      this.#winningNumbers = await InputProcessor.winningNumbers();
      this.#bonusNumber = await InputProcessor.bonusNumber(this.#winningNumbers);

      const winningStatistics = new Statistics(lottos, this.#purchasePrice, this.#winningNumbers, this.#bonusNumber);
      winningStatistics.result();
    } catch (error) {
      Console.print(error.toString());
    }
  }
}

export default App;
