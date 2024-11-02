import { Random, Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
class App {
  async run() {
    try {
      
      const CORRECT_NUMBER = [3,4,5,7,6];
      const CORRECT_MESSAGE = [
        '3개 일치 (5,000원) -', 
        '4개 일치 (50,000원) -',
        '5개 일치 (1,500,000원) -',
        '5개 일치, 보너스 볼 일치 (30,000,000원) -',
        '6개 일치 (2,000,000,000원) -'
      ];
      const MONEY = [
        5000, 50000, 1500000, 30000000, 2000000000
      ]
      let amount = await Console.readLineAsync(
        '구입금액을 입력해 주세요.\n'
      );
      let count = amount / 1000;
      Console.print(`\n${count}개를 구매했습니다.`);

      let lottoArray = [];
      let lotto;
      for (let i = 0; i < count; i++) {
        lotto = new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6));
        lotto.sort();
        lottoArray.push(lotto);
      }
      
      lottoArray.map((value) => {
        Console.print(value.getNumbers());
      })

      let answerNum = await Console.readLineAsync(
        '\n당첨 번호를 입력해 주세요.\n'
      );
      answerNum = answerNum.split(',').map(num => Number(num.trim()));

      let bonusNum = await Console.readLineAsync(
        '\n보너스 번호를 입력해 주세요.\n'
      );
      bonusNum = Number(bonusNum);

      Console.print('\n당첨 통계\n---');

      let correctNumArray = [];
      lottoArray.map((value) => {
        correctNumArray.push(value.compare(answerNum, bonusNum));
      })

      let revenue = 0;

      for (let i = 0; i < CORRECT_NUMBER.length; i++) {
        let count = 0;
        if (correctNumArray.includes(CORRECT_NUMBER[i]) != 0) {
          count = correctNumArray.filter(num => num == CORRECT_NUMBER[i]).length;
          revenue += MONEY[i];
        }
        Console.print(`${CORRECT_MESSAGE[i]} ${count}개`);
      }


      let rate = (revenue / amount) * 100;
      let roundedRate = parseFloat((rate).toFixed(2));
      Console.print(`총 수익률은 ${roundedRate}%입니다.`)

    } catch (error) {
      throw new Error(error);
    }
  }
}

export default App;
