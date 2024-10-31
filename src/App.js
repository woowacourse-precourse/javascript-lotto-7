import { Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import { printLotteries } from './View/OutputView.js';
import { getInputWhileValid } from './View/InputView.js';
import validateMoney from './Validation/validateMoney.js';
import { defaultSettings } from './DefaultSettings.js';
import LotteryFactory from './LotteryFactory.js';
import validateLottoNumber from './Validation/validateLottoNumber.js';
import validateLotteryNotes from './Validation/validateLotteryNotes.js';
import validateBonusNumber from './Validation/validateBonusNumber.js';
import RankCalculationService from './RankCalculationService.js';
import RANKS from './Rank.js';
import StatisticsService from './StatisticsService.js';

class App {
  async run() {
    const paidAmount = await getInputWhileValid(
      validateMoney,
      '구입금액을 입력해 주세요.',
    );

    const lotteryNotes = validateLotteryNotes(paidAmount);

    const lotteries = new LotteryFactory(
      Lotto,
      defaultSettings,
    ).createLotteries(lotteryNotes);

    Console.print(`${lotteryNotes}개를 구매했습니다.`);
    printLotteries(lotteries);

    const lotteryNumbers = await getInputWhileValid(
      validateLottoNumber,
      '로또 번호를 입력해주세요',
    );

    const bonusNumber = await getInputWhileValid(
      (input) => validateBonusNumber(input, lotteryNumbers),
      '보너스 번호를 입력해보세요: ',
    );
    const rankCalculationService = new RankCalculationService(RANKS);

    lotteries.forEach((lotto) => {
      const lottoNumbers = lotto.getNumbers();

      const matchingCount = lotteryNumbers.filter((num) =>
        lottoNumbers.includes(num),
      ).length;
      const hasBonus = lottoNumbers.includes(bonusNumber);

      rankCalculationService.updateRankCount(matchingCount, hasBonus);
    });

    const statisticsService = new StatisticsService(
      rankCalculationService.getRankCounts(),
      paidAmount,
    );
    statisticsService.printStatistics();
    statisticsService.printRevenueRate();
  }
}

export default App;
