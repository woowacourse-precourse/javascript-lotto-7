import { Console } from '@woowacourse/mission-utils';
import { CONSTANTS } from './constants.js';
import Lotto from './Lotto.js';

class App {
  async run() {
    try {
      Console.print(CONSTANTS.MESSAGE_PURCHASE_AMOUNT);
      const totalAmount = await this.getPurchaseAmount();
      this.validateAmount(totalAmount);

      const numberOfTickets = totalAmount / CONSTANTS.LOTTO_PRICE;
      Console.print(
        `\n${numberOfTickets}${CONSTANTS.MESSAGE_PURCHASED_TICKETS}`
      );

      const lottos = this.generateLottos(numberOfTickets);

      lottos.forEach((lottoNumbers) => {
        Console.print(`[${lottoNumbers.join(', ')}]`);
      });
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }

  async getPurchaseAmount() {
    const input = await Console.readLineAsync('');
    return Number(input);
  }

  validateAmount(amount) {
    if (isNaN(amount) || amount % CONSTANTS.LOTTO_PRICE !== 0) {
      throw new Error(CONSTANTS.ERROR_INVALID_AMOUNT);
    }
  }

  generateLottos(count) {
    const lottos = [];
    for (let i = 0; i < count; i++) {
      const lotto = new Lotto();
      lottos.push(lotto.getNumbers());
    }
    return lottos;
  }
}

const app = new App();
app.run();
export default App;
