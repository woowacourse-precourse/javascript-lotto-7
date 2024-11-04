import lottoConfig from './config.js';
import LottoGameExecutor from './lotto/LottoGameExecutor.js';
import LottoGenerator from './lotto/LottoGenerator.js';
import LottoResultManager from './lotto/LottoResultManager.js';
import InputReader from './lotto/view/InputReader.js';
import OutputPrinter from './lotto/view/OutputPrinter.js';
import RateCalculator from './lotto/RateCalculator.js';

class App {
  async run() {
    const lottoGenerator = this.#getLottoGeneratorAfterSetting();
    const lottoResultManager = this.#getLottoResultManagerAfterSetting();

    const lottoGameExecutor = new LottoGameExecutor(
      lottoGenerator, lottoResultManager, RateCalculator, InputReader, OutputPrinter
    );

    await lottoGameExecutor.startGame();
  }

  #getLottoGeneratorAfterSetting() {
    const lottoNumberCount = lottoConfig.NUMBER_COUNT;
    const lottoNumberRange = {
      startNumber: lottoConfig.NUMBER_RANGE.START_NUMBER,
      endNumber: lottoConfig.NUMBER_RANGE.END_NUMBER
    }
    return new LottoGenerator(lottoNumberCount, lottoNumberRange);
  }

  #getLottoResultManagerAfterSetting() {
    const winningRules = lottoConfig.WINNING_RULES;
    return new LottoResultManager(winningRules);
  }
}

export default App;
