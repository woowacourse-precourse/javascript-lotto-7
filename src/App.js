import { Console, Random } from '@woowacourse/mission-utils';
import Game from './game.js';
import InputPrompt from './input-prompt.js';
class App {
  async run() {
    const purchaseAmount = await InputPrompt.getPurchaseAmount();
    const lottoCount = purchaseAmount / 1000;
    Console.print('\n');
    Console.print(`${lottoCount}개를 구매했습니다.`);

    Console.print('\n');
    const winningNumberInput = await InputPrompt.getWinningNumber();
    const winningNumbers = winningNumberInput.split(',').map((number) => parseInt(number));

    Console.print('\n');
    const bonusNumberInput = await InputPrompt.getBonusNumber();
    const bonusNumber = parseInt(bonusNumberInput);

    const game = new Game(lottoCount, winningNumbers, bonusNumber);
    game.play();
  }
}
export default App;
