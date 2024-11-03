import { Console } from '@woowacourse/mission-utils';
import { getCost, displayLottosCount, displayLottosNumber } from '../src/IO.js';

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
      
    } catch(error){
      Console.print(`[ERROR] 오류가 발생했습니다: ${error.message}`)
    }
  }
}


export default App;
