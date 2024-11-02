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
      if (isNaN(amount)) 
        throw new Error('[ERROR] 구입 금액은 숫자여야 합니다.');

      if (amount%1000 != 0)
        throw new Error('[ERROR] 구입 금액은 1,000원으로 나누어 떨어져야 합니다.');

      // if (amount < 1 || amount > 45)
      //   throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');

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
      if (!answerNum.every(num => !isNaN(num))) {
        throw new Error("[ERROR] 로또 번호는 숫자여야 합니다.");
      }
      if (answerNum.length !== 6) {
        throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
      }

      let bonusNum = await Console.readLineAsync(
        '\n보너스 번호를 입력해 주세요.\n'
      );
      if (isNaN(bonusNum)) 
        throw new Error('[ERROR] 보너스 번호는 숫자여야 합니다.');
      if (!answerNum.includes(bonusNum))
        throw new Error('[ERROR] 보너스 번호와 당첨 번호는 중복되지 않아야 합니다.');

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
