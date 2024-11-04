import { Console } from '@woowacourse/mission-utils';
import { generateLottos } from './LottoGenerator.js';
import { validateAmount, validateWinningNumbers, validateBonusNumber } from './LottoValidator.js';
import { calculateResults, printResults } from './LottoResults.js';

class App {
  async run() {
    try {
      const amount = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
      validateAmount(amount);
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
