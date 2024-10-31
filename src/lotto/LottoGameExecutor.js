import LottoRule from './model/LottoRule.js';
import LottoPayment from './LottoPayment.js';
import LottoGenerator from './LottoGenerator.js';
import { printEmptyLine, printPurchaseResult } from './view/OutputPrinter.js';

class LottoGameExecutor {
  #lottoRule

  constructor(lottoConfig) {
    this.#lottoRule = new LottoRule(lottoConfig);
  }

  async startGame() {
    const lottoPayment = new LottoPayment(this.#lottoRule);
    const lottoCount = await lottoPayment.executePaymentAndGetLottoCount(this.#lottoRule.lottoAmount, this.#lottoRule.maxlottoPurchaseAmount);

    printEmptyLine();

    const lottoGenerator = new LottoGenerator(this.#lottoRule.lottoNumberCount, this.#lottoRule.lottoNumberRange);
    const lottos = lottoGenerator.generateLottosBycount(lottoCount);
    this.#printPurchaseLottos(lottoCount, lottos);

    printEmptyLine();
  }

  #printPurchaseLottos(lottoCount, lottos) {
    const printLottos = lottos.map((lotto) => lotto.toString());
    printPurchaseResult(lottoCount, printLottos.join(`\n`));
  }
}

export default LottoGameExecutor;