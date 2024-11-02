import { Random, Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
class App {
  async run() {
    try {
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

      Console.print('당첨 통계\n ---\n');

      lottoArray.map((value) => {
        Console.print(`${value.compare(answerNum)}개 일치`);
      })



    } catch (error) {
      throw new Error(error);
    }
  }
}

export default App;
