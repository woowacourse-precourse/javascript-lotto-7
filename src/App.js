import { Console, Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class App {
  async run() {
    const readUserMoney =
      await Console.readLineAsync('구입금액을 입력해 주세요.\n');

    const buyCount = parseInt(readUserMoney, 10) / 1000;
    Console.print(`\n${buyCount}개를 구매했습니다.`);

    const lottoList = Array.from({ length: buyCount }, () => {
      const randomNumbers = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
        (a, b) => a - b,
      );
      return new Lotto(randomNumbers);
    });

    const readUserWinningNumbers = await Console.readLineAsync(
      '\n당첨 번호를 입력해 주세요.\n',
    );
    const winNumbers = readUserWinningNumbers
      .split(',')
      .map((number) => parseInt(number, 10));

    const readUserBonusNumber = parseInt(
      await Console.readLineAsync('\n보너스 번호를 입력해 주세요.\n'),
      10,
    );

    const lottoResults = [
      ['6개 일치', 2000000000, 0],
      ['5개 일치, 보너스 볼 일치', 30000000, 0],
      ['5개 일치', 1500000, 0],
      ['4개 일치', 50000, 0],
      ['3개 일치', 5000, 0],
    ];
    const RANK_TABLE = {
      6: 1,
      5: [2, 3],
      4: 4,
      3: 5,
    };
    lottoList.forEach((lotto) => {
      const rank = lotto.matchRank(RANK_TABLE, winNumbers, readUserBonusNumber);
      if (rank) lottoResults[rank - 1][2] += 1;
    });
  }
}

export default App;
