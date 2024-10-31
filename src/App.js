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
    const purchaseAmount = await getInputWhileValid(
      validateMoney,
      '구입금액을 입력해 주세요.',
    );

    const numberOfTickets = validateLotteryNotes(purchaseAmount);

    const purchasedLotteries = new LotteryFactory(
      Lotto,
      defaultSettings,
    ).createLotteries(numberOfTickets);

    Console.print(`${numberOfTickets}개를 구매했습니다.`);
    printLotteries(purchasedLotteries);

    const winningNumbers = await getInputWhileValid(
      validateLottoNumber,
      '로또 번호를 입력해주세요',
    );

    const bonusNumber = await getInputWhileValid(
      (input) => validateBonusNumber(input, winningNumbers),
      '보너스 번호를 입력해보세요: ',
    );
    const rankCalculator = new RankCalculationService(RANKS);

    purchasedLotteries.forEach((lotto) => {
      const lottoNumbers = lotto.getNumbers();

      const matchingNumberCount = winningNumbers.filter((number) =>
        lottoNumbers.includes(number),
      ).length;
      const hasBonusNumber = lottoNumbers.includes(bonusNumber);

      rankCalculator.updateRankCount(matchingNumberCount, hasBonusNumber);
    });

    const statistics = new StatisticsService(
      rankCalculator.getRankCounts(),
      purchaseAmount,
    );
    statistics.printStatistics();
    statistics.printRevenueRate();
  }
}

export default App;
