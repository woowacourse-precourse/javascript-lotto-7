import { config } from './config.js';
import LottoGameExecutor from './lotto/LottoGameExecutor.js';
import LottoPayment from './lotto/LottoPayment.js';
import LottoGenerator from './lotto/LottoGenerator.js';
import LottoResultEvaluator from './lotto/LottoResultEvaluator.js';

class App {
  async run() {
    const { lottoConfig } = config;

    const unitAmount = lottoConfig.LOTTO_AMOUNT;
    const lottoPayment = new LottoPayment(unitAmount);

    const lottoNumberCount = lottoConfig.NUMBER_COUNT;
    const lottoNumberRange = {
      startNumber: lottoConfig.NUMBER_RANGE.START_NUMBER,
      endNumber: lottoConfig.NUMBER_RANGE.END_NUMBER
    }
    const lottoGenerator = new LottoGenerator(lottoNumberCount, lottoNumberRange);

    const winningRules = lottoConfig.WINNING_RULES;
    const lottoResultEvaluator = new LottoResultEvaluator(winningRules);

    const lottoGameExecutor = new LottoGameExecutor(
      lottoPayment, lottoGenerator, lottoResultEvaluator
    );

    await lottoGameExecutor.startGame();
  }
}

export default App;
