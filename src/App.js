import { Console, MissionUtils } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
      // * 변수 선언 ============== //

      // * ========================== //
      // * 입력 =================== //
      const lottoBuyMoneyInput = await Console.readLineAsync(
        '구입금액을 입력해 주세요.\n',
      );
      // * ======================= //
    } catch (error) {}
  }
}

export default App;
