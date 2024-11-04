import { Console } from '@woowacourse/mission-utils';
import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async run() {
    Console.print('구입금액을 입력해 주세요.');
    const inputMoney = await Console.readLineAsync('');
    Console.print(inputMoney);
    let Lotto = Math.floor(inputMoney / 1000);

    let RanLotto = [];
    for(let i = 0; i < Lotto; i++){
      RanLotto.push(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6));
      RanLotto[i] = RanLotto[i].sort((a, b) => a - b);
    } 
    Console.print(`${Lotto}개를 구매했습니다.`);
    Console.print(RanLotto);

    Console.print('당첨번호를 입력해 주세요.');
    let WinLotto = await Console.readLineAsync('');

    Console.print('보너스 번호를 입력해 주세요.');
    const BonusLotto = await Console.readLineAsync('');

    let correct = [];
    let bonusCorrect = [];
    
    for(let i = 0; i < RanLotto.length; i++){
      let count = 0;
      let countBonus = 0;
      for(let j = 0; j < RanLotto.length; j++){
        if(WinLotto.includes(RanLotto[i][j])){
          count++;
        }
        if(BonusLotto.includes(RanLotto[i][j])){
          countBonus++;
        }
      }
      bonusCorrect.push(countBonus);
      correct.push(count);
    }

    let correct3 = 0;
    let correct4 = 0;
    let correct5 = 0;
    let correct5b = 0;
    let correct6 = 0;

    for(let i = 0; i < RanLotto.length; i++){
      if(correct[i] > 5){
        correct6++;
      }
      if(correct[i] > 4 && bonusCorrect[i] == 1){
        correct5b++;
      }
      if(correct[i] > 4){
        correct5++;
      }
      if(correct[i] > 3){
        correct4++;
      }
      if(correct[i] > 2){
        correct3++;
      }
    }

    let total = 0;
    total = (correct3 * 5000) + (correct4 * 5000) + (correct5 * 1500000) + (correct5b * 30000000) + (correct6 * 2000000000);

    Console.print('당첨통계');
    Console.print('---');
    Console.print(`3개 일치 (5,000원) - ${correct3}개
                  4개 일치 (50,000원) - ${correct4}개
                  5개 일치 (1,500,000원) - ${correct5}개
                  5개 일치, 보너스 볼 일치 (30,000,000원) - ${correct5b}개
                  6개 일치 (2,000,000,000원) - ${correct6}개`);

    let num = (total / inputMoney) * 100;              
    Console.print(`총 수익률은 ${num.toFixed(2)}%입니다.`)

  }

}

export default App;
