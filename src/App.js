import { Random, Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import { printLotteries } from './View/OutputView.js';

class App {
  async run() {
    const lotteryCash =
      await Console.readLineAsync('구입금액을 입력해 주세요.');

    const lottery = Number.parseInt(lotteryCash / 1000, 10);
    if (!Number.isInteger(lottery)) Console.print('[ERROR]: 숫자가 이상해요!');

    const lotteries = [];

    for (let i = 0; i < lottery; i++) {
      const numbers = Random.pickUniqueNumbersInRange(1, 12, 6);

      const lotto = new Lotto(numbers.sort((a, b) => a - b));
      lotteries.push(lotto);
    }

    Console.print(`${lottery}개를 구매했습니다.`);
    printLotteries(lotteries);

    const lotteryNumbers =
      await Console.readLineAsync('당첨 번호를 입력해 주세요.');

    const bonusNumber =
      await Console.readLineAsync('보너스 번호를 입력해주세요');

    const realLotteryNumbers = lotteryNumbers.split(',').map((e) => Number(e));
    const realBonusNumber = Number(bonusNumber);
    const rank = {
      threeMatch: { ticket: 0, prize: 5_000 },
      fourMatch: { ticket: 0, prize: 50_000 },
      fiveMatch: { ticket: 0, prize: 1_500_000 },
      fiveMatchWithBonus: { ticket: 0, prize: 3_000_000 },
      sixMatch: { ticket: 0, prize: 2_000_000_000 },
    };
    function pickBonusPot(unionNumber) {
      const isBonus = unionNumber.some((number) => number === realBonusNumber);

      if (isBonus) {
        rank.fiveMatchWithBonus.ticket += 1;
      } else {
        rank.fiveMatch.ticket += 1;
      }
    }
    function pickRank(unionNumber) {
      switch (unionNumber.length) {
        case 9:
          rank.threeMatch.ticket += 1;
          break;
        case 8:
          rank.fourMatch.ticket += 1;
          break;
        case 7:
          pickBonusPot(unionNumber);
          break;
        case 6:
          rank.sixMatch.ticket += 1;
          break;
        default:
          break;
      }
    }
    lotteries.forEach((lotto) => {
      const pickedNumbers = new Set(realLotteryNumbers);
      const lottoNumbers = new Set(lotto.getNumbers());

      const unionNumbers = [...new Set([...pickedNumbers, ...lottoNumbers])];
      pickRank(unionNumbers);
    });
    Console.print('당첨 통계 \n ---');
    Console.print(`3개 일치 (5,000원) - ${rank.threeMatch.ticket}개`);
    Console.print(`4개 일치 (50,000원) - ${rank.fourMatch.ticket}개`);
    Console.print(`5개 일치 (1,500,000원) - ${rank.fiveMatch.ticket}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${rank.fiveMatchWithBonus.ticket}개`,
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${rank.sixMatch.ticket}개`);
    const total = Object.values(rank).reduce(
      (t, { ticket, prize }) => t + ticket * prize,
      0,
    );
    Console.print(
      `총 수익률은 ${((total / Number(lotteryCash)) * 100).toFixed(1)}%입니다.`,
    );
  }
}

export default App;
