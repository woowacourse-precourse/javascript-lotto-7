import LottoRule from './model/LottoRule.js';
import LottoPaymentExecutor from './LottoPaymentExecutor.js';

class LottoGameExecutor {
  #lottoRule

  constructor(lottoConfig) {
    this.#lottoRule = new LottoRule(lottoConfig);
  }

  async startGame() {
    const lottoPaymentExecutor = new LottoPaymentExecutor(this.#lottoRule);
    const lottoCount = await lottoPaymentExecutor.executePaymentAndGetLottoCount(this.#lottoRule.lottoAmount, this.#lottoRule.maxlottoPurchaseAmount);
    console.log(lottoCount);
  }
}

export default LottoGameExecutor;