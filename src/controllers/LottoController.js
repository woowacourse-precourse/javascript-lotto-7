import { Console } from '@woowacourse/mission-utils';
import InputView from '../views/InputView.js';
import calculateLottoAmount from '../utils/LottoUtils.js';
import LottoService from '../services/LottoService.js';
import OutputView from '../views/OutputView.js';

class LottoController {
  constructor() {
    this.inputView = new InputView();
    this.outputView = new OutputView();
    this.service = new LottoService();
  }

  async startLotto() {
    const purchaseCost = await this.inputView.getPurchaseCost();
    const lottoAmount = calculateLottoAmount(purchaseCost);

    const generatedLottos = this.service.getGeneratedLottos(lottoAmount);
    this.outputView.showPurchasedLotto(generatedLottos);
  }
}

export default LottoController;
