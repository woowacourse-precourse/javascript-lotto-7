import { printEmptyLine, printPurchaseResult } from './view/OutputPrinter.js';

class LottoGameExecutor {

  #lottoPayment;

  #lottoGenerator;

  constructor(lottoPayment, lottoGenerator) {
    this.#lottoPayment = lottoPayment;
    this.#lottoGenerator = lottoGenerator;
  }

  async startGame() {
    const lottoCount = await this.#lottoPayment.executePaymentAndGetLottoCount();

    printEmptyLine();

    const lottos = this.#lottoGenerator.generateLottosBycount(lottoCount);
    this.#printPurchaseLottos(lottoCount, lottos);

    printEmptyLine();
  }

  #printPurchaseLottos(lottoCount, lottos) {
    const printLottos = lottos.map((lotto) => lotto.toString());
    printPurchaseResult(lottoCount, printLottos.join(`\n`));
  }
}

export default LottoGameExecutor;