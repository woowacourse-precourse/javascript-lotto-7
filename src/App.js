import { Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

import validateMoney from './Validation/Input/validateMoney.js';
import { defaultSettings } from './Config/DefaultSettings.js';
import validateLottoNumber from './Validation/Input/validateLottoNumber.js';
import validateBonusNumber from './Validation/Input/validateBonusNumber.js';
import RankCalculationService from './Services/RankCalculationService.js';
import RANKS from './Model/Rank.js';
import StatisticsService from './Services/StatisticsService.js';
import LotteryService from './Services/LotteryService.js';
import IOService from './Services/IOService.js';

class App {
  async run() {
    const lotteryService = new LotteryService(Lotto, defaultSettings);
    const ioService = new IOService();
    const rankCalculator = new RankCalculationService(RANKS);

    const purchaseAmount = await ioService.getInputWhileValid(
      validateMoney,
      '구입금액을 입력해 주세요.',
    );

    const numberOfTickets = lotteryService.validateLotteryNotes(purchaseAmount);

    const purchasedLotteries =
      lotteryService.generateLotteries(numberOfTickets);

    ioService.printMessage(`${numberOfTickets}개를 구매했습니다.`);
    ioService.printLotteries(purchasedLotteries);

    const winningNumbers = await ioService.getInputWhileValid(
      validateLottoNumber,
      '당첨 번호를 입력해 주세요.',
    );

    const bonusNumber = await ioService.getInputWhileValid(
      (input) => validateBonusNumber(input, winningNumbers),
      '보너스 번호를 입력해 주세요.',
    );

    rankCalculator.calculateLotteries(
      purchasedLotteries,
      winningNumbers,
      bonusNumber,
    );
    const statistics = new StatisticsService(
      rankCalculator.getRankCounts(),
      purchaseAmount,
    );

    ioService.printStatistics(rankCalculator.getRankCounts());
    ioService.printRevenueRate(
      statistics.calculateTotalRevenue(),
      purchaseAmount,
    );
  }
}

export default App;
