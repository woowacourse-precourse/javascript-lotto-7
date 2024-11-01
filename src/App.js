import { Console, MissionUtils } from '@woowacourse/mission-utils';
import { getLottoBuyCount } from './functions/LottoMake';
class App {
  async run() {
    try {
      // * 로또 구입
      const lottoBuyMoneyInput = await Console.readLineAsync(
        '구입금액을 입력해 주세요.\n',
      );
      const lottoBuyCount = getLottoBuyCount(lottoBuyMoneyInput);
      const lottoArray = [];

      // * ==== //
    } catch (error) {}
  }
}

export default App;
