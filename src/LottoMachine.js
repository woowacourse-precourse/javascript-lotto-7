import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class LottoMachine {

  // 단일 로또 생성
    generateLotto() {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
      return new Lotto(numbers);  
   }

   // 모든 로또 생성
  allLottos(count) {
    const lottos = [];
    for (let i = 0; i < count; i++) {
        lottos.push(this.generateLotto());
    }
    return lottos;
  }

  // 로또 구매 개수와 번호 출력
  printLottos(count) {
    const lottos = this.allLottos(count);
    console.log(`${count}개를 구매했습니다.`);
    lottos.forEach(lotto => {
      console.log(lotto.getNumbers());
    });
  }
}

export default LottoMachine;