import { Console } from '@woowacourse/mission-utils';
import { generateLottos } from './LottoGenerator.js';
import { validateAmount, validateWinningNumbers, validateBonusNumber } from './LottoValidator.js';
import { calculateResults, printResults } from './LottoResults.js';

class App {
  async run() {
    try {
      const amount = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
      validateAmount(amount);

      const lottos = generateLottos(amount);
      Console.print(`${lottos.length}개를 구매했습니다.`);
      lottos.forEach((lotto) => Console.print(`[${lotto.getNumbers().join(', ')}]`));

      const winningInput = await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
      const winningNumbers = winningInput.split(',').map(Number);
      validateWinningNumbers(winningNumbers);

      const bonusInput = await Console.readLineAsync('보너스 번호를 입력해 주세요.\n');
      const bonusNumber = Number(bonusInput);
      validateBonusNumber(bonusNumber, winningNumbers);

      const results = calculateResults(lottos, winningNumbers, bonusNumber);
      printResults(results, amount);
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
