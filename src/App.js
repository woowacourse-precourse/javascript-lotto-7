import { Random, Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
class App {
  async run() {
    try {
      let amount = await Console.readLineAsync(
        '구입금액을 입력해 주세요.\n'
      );
      let answerNum = await Console.readLineAsync(
        '당첨 번호를 입력해 주세요.\n'
      );
      answerNum = answerNum.split(',').map(num => num.trim());

      let bonusNum = await Console.readLineAsync(
        '보너스 번호를 입력해 주세요.\n'
      );

    } catch (error) {
      throw new Error(error);
    }
  }
}

export default App;
