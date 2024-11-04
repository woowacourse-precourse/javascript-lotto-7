import { calculateLottoCountFromAmount } from "../services/calculateLottoCountFromAmount.js";
import LottoView from "../views/LottoView.js";

class LottoController {
  constructor() {
    this.lottoView = new LottoView();
  }

  run(purchaseAmount) {
    const lottoCount = calculateLottoCountFromAmount(purchaseAmount);
    this.lottoView.displayLottoCount(lottoCount);
    return this.lottoView.displayLottoNumbers(lottoCount);
  }
}

export default LottoController;
