import LottoRule from './model/LottoRule.js';
import LottoPaymentExecutor from './LottoPaymentExecutor.js';
import LottoGenerator from './LottoGenerator.js';

class LottoGameExecutor {
  #lottoRule

  constructor(lottoConfig) {
    this.#lottoRule = new LottoRule(lottoConfig);
  }

  async startGame() {
    const lottoPaymentExecutor = new LottoPaymentExecutor(this.#lottoRule);
    const lottoCount = await lottoPaymentExecutor.executePaymentAndGetLottoCount(this.#lottoRule.lottoAmount, this.#lottoRule.maxlottoPurchaseAmount);

    const lottoGenerator = new LottoGenerator(this.#lottoRule.lottoNumberCount, this.#lottoRule.lottoNumberRange);
    const lottos = lottoGenerator.generateLottosBycount(lottoCount);
  }
}

export default LottoGameExecutor;