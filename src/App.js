import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    const lottoBuyPrice =
      await Console.readLineAsync('구입금액을 입력해 주세요.\n');
  }
}

export default App;
