import { Console, MissionUtils } from '@woowacourse/mission-utils';
import {
  getLottoBuyCount,
  makeLottoArray,
  printLottoBuyCount,
} from './functions/LottoMake.js';
import { splitByComma } from './functions/LottoPrize.js';
class App {
  async run() {
    try {
      // * 로또 구입
      const lottoBuyMoneyInput = await Console.readLineAsync(
        '구입금액을 입력해 주세요.\n',
      );
      const lottoBuyCount = getLottoBuyCount(lottoBuyMoneyInput);
      printLottoBuyCount(lottoBuyCount);

      const lottoArray = makeLottoArray(lottoBuyCount);

      // * ==== //

      //* 당첨 관련 //
      const lottoPrizeNumbersInput = await Console.readLineAsync(
        '당첨 번호를 입력해 주세요.\n',
      );

      const lottoPrizeNumbers = splitByComma(lottoPrizeNumbersInput);

      const lottoBounsNumber = await Console.readLineAsync(
        '보너스 번호를 입력해 주세요.\n',
      );

      // * ==== //
    } catch (error) {}
  }
}

export default App;
