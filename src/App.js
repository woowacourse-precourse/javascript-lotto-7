import { Console, Random } from '@woowacourse/mission-utils';
import Game from './game.js';
import InputPrompt from './input-prompt.js';
class App {
  async run() {
    const purchaseAmount = await InputPrompt.getPurchaseAmount();
    const ticketCount = purchaseAmount / 1000;
    Console.print('\n');
    Console.print(`${ticketCount}개를 구매했습니다.`);

    let lottoNumberList;
    for (let i = 1; i <= ticketCount; i++) {
      lottoNumberList = await Random.pickUniqueNumbersInRange(1, 45, 6);
      const sortedNumberList = lottoNumberList.sort((a, b) => a - b);
      lottoNumberList = sortedNumberList;
      Console.print(sortedNumberList);
    }

    const game = new Game(ticketCount, lottoNumberList);

    Console.print('\n');
    const winningNumberInput = await InputPrompt.getWinningNumber();
    const winningNumberList = winningNumberInput.split(',').map((number) => parseInt(number));

    Console.print('\n');
    const bonusNumberInput = await InputPrompt.getBonusNumber();
    const bonusNumber = parseInt(bonusNumberInput);
  }
}
export default App;
