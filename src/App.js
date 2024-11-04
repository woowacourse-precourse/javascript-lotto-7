import { Console, MissionUtils } from '@woowacourse/mission-utils';
import {
  getLottoBuyCount,
  makeLottoArray,
  printLottoBuyCount,
} from './functions/LottoMake.js';
import {
  getIsBonusNumber,
  getLottoPrizeCount,
  printLottoPrizeResult,
  setLottoPrizeRank,
  splitByComma,
} from './functions/LottoPrize.js';
import { tempLottoPrizeList } from './data/LottoPrizeList.js';
class App {
  async run() {
    try {
      let LottoPrizeList = [
        {
          id: 3,
          name: '3개 일치',
          count: 0,
          value: 5000,
          printValue: '5,000원',
        },
        {
          id: 4,
          name: '4개 일치',
          count: 0,
          value: 50000,
          printValue: '50,000원',
        },
        {
          id: 5,
          name: '5개 일치',
          count: 0,
          value: 1500000,
          printValue: '1,500,000원',
        },
        {
          id: 5,
          name: '5개 일치, 보너스 볼 일치',
          count: 0,
          value: 30000000,
          printValue: '30,000,000원',
        },
        {
          id: 6,
          name: '6개 일치',
          count: 0,
          value: 2000000000,
          printValue: '2,000,000,000원',
        },
      ];

      // * 로또 구입
      const lottoBuyMoneyInput = await Console.readLineAsync(
        '구입금액을 입력해 주세요.\n',
      );
      const lottoBuyCount = getLottoBuyCount(lottoBuyMoneyInput);
      printLottoBuyCount(lottoBuyCount);

      const lottoArray = makeLottoArray(lottoBuyCount);
      lottoArray.forEach((lotto) => console.log(lotto.numbers));

      // * ==== //

      //* 당첨 관련 //
      const lottoPrizeNumbersInput = await Console.readLineAsync(
        '당첨 번호를 입력해 주세요.\n',
      );

      const lottoPrizeNumbers = splitByComma(lottoPrizeNumbersInput);

      const lottoBounsNumber = await Console.readLineAsync(
        '보너스 번호를 입력해 주세요.\n',
      );

      lottoArray.forEach((lotto) => {
        const lottoPrizeCount = getLottoPrizeCount(lotto, lottoPrizeNumbers);
        const isBonusNumber = getIsBonusNumber(
          lotto,
          lottoBounsNumber,
          lottoPrizeCount,
        );
        LottoPrizeList = setLottoPrizeRank(
          lottoPrizeCount,
          LottoPrizeList,
          isBonusNumber,
        );
      });

      printLottoPrizeResult(LottoPrizeList);

      // * ==== //
    } catch (error) {}
  }
}

export default App;
