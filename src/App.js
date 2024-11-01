import { Console, MissionUtils } from '@woowacourse/mission-utils';
import { getLottoBuyCount, makeLottoArray } from './functions/LottoMake.js';
class App {
  async run() {
    try {
      // * 로또 구입
      const lottoBuyMoneyInput = await Console.readLineAsync(
        '구입금액을 입력해 주세요.\n',
      );
      const lottoBuyCount = getLottoBuyCount(lottoBuyMoneyInput);
      const lottoArray = makeLottoArray(lottoBuyCount);

      // * ==== //
    } catch (error) {}
  }
}

export default App;
