import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    const readUserMoney =
      await Console.readLineAsync('구입금액을 입력해 주세요.\n');

    const buyCount = parseInt(readUserMoney, 10) / 1000;
    Console.print(`\n${buyCount}개를 구매했습니다.`);
  }
}

export default App;
