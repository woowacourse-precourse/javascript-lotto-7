import { Console } from '@woowacourse/mission-utils';
import Input from './View/Input.js';

class App {
  async run() {
    const input = await Input.getPurchaseAmount();
    const winningNumbers = await Input.getWinningNumbers();
    const bonusNumber = await Input.getBonusNumber();

    Console.print(input);
    Console.print(winningNumbers);
    Console.print(bonusNumber);
  }
}

export default App;
