import { Console } from '@woowacourse/mission-utils';
import { getCost, displayLottosCount, displayLottosNumber, userPickedNumbers, userPickedBonusNumber, printResults } from '../src/IO.js';
import { generateLottos } from '../src/Lotto.js';
import { evaluateResults, countMatches } from '../src/result.js';

class App {
  cost;

  constructor() {
    this.cost = 0;
  }

  async run() {
    try {
      const count = await getCost();
      displayLottosCount(count);

      const lottos = generateLottos(count);
      displayLottosNumber(lottos);

      const pickedNumbers = await userPickedNumbers();
      const pickedBonusNumber = await userPickedBonusNumber(pickedNumbers);

      const rankCount = evaluateResults(lottos, pickedNumbers, pickedBonusNumber);
      printResults(rankCount, count * 1000);
    } catch (error) {
      Console.print(`[ERROR] 오류가 발생했습니다: ${error.message}`);
    }
  }
}

export default App;

