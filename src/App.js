import { Random, Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import { printLotteries } from './View/OutputView.js';
import { getInputWhileValid } from './View/InputView.js';
import { validateMoney } from './Validation/validateMoney.js';
import { defaultSettings } from './DefaultSettings.js';
import LotteryFactory from './LotteryFactory.js';
import validateLottoNumber from './Validation/validateLottoNumber.js';

class App {
  async run() {
    const paidAmount = await getInputWhileValid(
      validateMoney,
      '구입금액을 입력해 주세요.',
    );

    const lotteryNotes = Number.parseInt(paidAmount / 1000, 10);

    const lotteries = new LotteryFactory(
      Lotto,
      defaultSettings,
    ).createLotteries(lotteryNotes);

    Console.print(`${lotteryNotes}개를 구매했습니다. \n`);
    printLotteries(lotteries);

    const lotteryNumbers = await getInputWhileValid(
      validateLottoNumber,
      '로또 번호를 입력해주세요',
    );

    const bonusNumber =
      await Console.readLineAsync('보너스 번호를 입력해주세요');

    const realBonusNumber = Number(bonusNumber);
    const RANKS = {
      SIX_MATCH: 'sixMatch',
      FIVE_MATCH_WITH_BONUS: 'fiveMatchWithBonus',
      FIVE_MATCH: 'fiveMatch',
      FOUR_MATCH: 'fourMatch',
      THREE_MATCH: 'threeMatch',
      NO_MATCH: 'noMatch',
    };
    function pickRank(matchingCount, hasBonus) {
      if (matchingCount === 6) {
        return RANKS.SIX_MATCH;
      }
      if (matchingCount === 5) {
        return hasBonus ? RANKS.FIVE_MATCH_WITH_BONUS : RANKS.FIVE_MATCH;
      }
      if (matchingCount === 4) {
        return RANKS.FOUR_MATCH;
      }
      if (matchingCount === 3) {
        return RANKS.THREE_MATCH;
      }
      return RANKS.NO_MATCH;
    }

    const rankCounts = {
      [RANKS.SIX_MATCH]: { ticket: 0, prize: 2_000_000_000 },
      [RANKS.FIVE_MATCH_WITH_BONUS]: { ticket: 0, prize: 30_000_000 },
      [RANKS.FIVE_MATCH]: { ticket: 0, prize: 1_500_000 },
      [RANKS.FOUR_MATCH]: { ticket: 0, prize: 50_000 },
      [RANKS.THREE_MATCH]: { ticket: 0, prize: 5_000 },
      [RANKS.NO_MATCH]: { ticket: 0, prize: 0 },
    };

    lotteries.forEach((lotto) => {
      const lottoNumbers = lotto.getNumbers();

      const matchingCount = lotteryNumbers.filter((num) =>
        lottoNumbers.includes(num),
      ).length;

      const hasBonus = lottoNumbers.includes(realBonusNumber);
      const rank = pickRank(matchingCount, hasBonus);

      if (rank !== RANKS.NO_MATCH) {
        rankCounts[rank].ticket += 1;
      }
    });

    Console.print('당첨 통계\n---');
    Console.print(
      `3개 일치 (5,000원) - ${rankCounts[RANKS.THREE_MATCH].ticket}개`,
    );
    Console.print(
      `4개 일치 (50,000원) - ${rankCounts[RANKS.FOUR_MATCH].ticket}개`,
    );
    Console.print(
      `5개 일치 (1,500,000원) - ${rankCounts[RANKS.FIVE_MATCH].ticket}개`,
    );
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${rankCounts[RANKS.FIVE_MATCH_WITH_BONUS].ticket}개`,
    );
    Console.print(
      `6개 일치 (2,000,000,000원) - ${rankCounts[RANKS.SIX_MATCH].ticket}개`,
    );
    const total = Object.values(rankCounts).reduce(
      (t, { ticket, prize }) => t + ticket * prize,
      0,
    );

    // toFix 사용
    Console.print(`총 수익률은 ${(total / paidAmount) * 100}%입니다.`);
  }
}

export default App;
