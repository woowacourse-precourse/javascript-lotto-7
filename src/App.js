import LottoController from './Controller/LottoController.js';
import Lotto from './Lotto.js';
import { defaultSettings } from './Config/DefaultSettings.js';

import RankCalculationService from './Services/RankCalculationService.js';
import RANKS from './Model/Rank.js';
import StatisticsService from './Services/StatisticsService.js';
import LotteryService from './Services/LotteryService.js';
import IOService from './Services/IOService.js';
import ValidationService from './Services/ValidationService.js';

// 기본 applicationTest를 변형시키지 않기 위해 컨트롤러를 통해 코드를 경유하게 함
class App {
  constructor() {
    const lotteryService = new LotteryService(Lotto, defaultSettings);
    const ioService = new IOService();
    const rankCalculator = new RankCalculationService(RANKS);
    const validationService = new ValidationService();
    const statisticsService = new StatisticsService();

    // LottoController를 생성하고 주입
    this.controller = new LottoController({
      lotteryService,
      ioService,
      rankCalculator,
      validationService,
      statisticsService,
    });
  }

  async run() {
    await this.controller.run();
  }
}

export default App;
