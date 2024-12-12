import { Console } from '@woowacourse/mission-utils';
import { getCost, displayCount, displayLottosNumber, getNumbers, getBonus, displayResult, printResults } from '../src/IO.js';
import { generateLottos } from '../src/Lotto.js';
import { evaluateResult } from '../src/result.js';

class App { // App이라는 클래스 생성
  cost; // cost라는 변수 선언.

  constructor(){
    this.cost = 0;  // 이 변수를 0으로 초기화한다
  }

  async run() {
    try {
      const count = await getCost();
      displayCount(count);
      const lottos = generateLottos(count)
      displayLottosNumber(lottos)

      const pickedNumbers = await getNumbers();
      const pickedBonus = await getBonus(pickedNumbers);
      displayResult();

      const rankCount = evaluateResult(lottos, pickedNumbers, pickedBonus);
      printResults(rankCount, count * 1000);

    } catch (error) {
      Console.print(`[ERROR] 오류가 발생했습니다: ${error.message}`);
  }
}
}

export default App;


