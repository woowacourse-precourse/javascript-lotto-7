import Lotto from '../models/Lotto.js';

class LottoController {
  constructor(purchaseAmount) {
    this.purchaseAmount = purchaseAmount;
    this.lottos = [];
  }

  generateLottos() {
    const count = Math.floor(this.purchaseAmount / 1000);
    for (let i = 0; i < count; i++) {
      const lotto = new Lotto();
      this.lottos.push(lotto);
    }
  }

  getLottos() {
    return this.lottos.map((lotto) => lotto.getNumbers());
  }
}

export default LottoController;
