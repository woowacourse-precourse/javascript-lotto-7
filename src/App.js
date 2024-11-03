import { Console } from '@woowacourse/mission-utils';
import { getCost, displayLottosCount, displayLottosNumber, userPickedNumbers, userPickedBonusNumber, printResults } from '../src/IO.js';
import { generateLottos } from '../src/Lotto.js';
import { evaluateResults } from '../src/result.js';

class App {
  // 1. 필드 : 이 클래스에서 필요한 속성 정의
  cost;
  // 2. 생성자 : 필드를 초기화
  constructor(){
    this.cost = 0;
  }
  // 3. 메서드 : 클래스의 동작 정의
  async run() {
    try{
      const count = await getCost();
      displayLottosCount(count);
      displayLottosNumber(count);
      
      const pickedNumbers = await userPickedNumbers();
      const pickedBounsNumber = await userPickedBonusNumber(pickedNumbers);

      // displayLottosCount(count);
      // displayLottosNumber(lottos);

      // const winningNumbers = await getWinningNumbers();
      // const bonusNumber = await getBonusNumber();

      // evaluateResults(lottos, winningNumbers, bonusNumber);
      
    } catch(error){
      Console.print(`[ERROR] 오류가 발생했습니다: ${error.message}`)
    }
  }
}


export default App;
