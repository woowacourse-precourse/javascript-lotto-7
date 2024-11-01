import { config } from './config.js';
import LottoGameExecutor from './lotto/LottoGameExecutor.js';
import LottoPayment from './lotto/LottoPayment.js';
import LottoGenerator from './lotto/LottoGenerator.js';

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

    const lottoGameExecutor = new LottoGameExecutor(
      lottoPayment, lottoGenerator
    );

    await lottoGameExecutor.startGame();
  }
}

export default App;
