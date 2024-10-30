import { Console } from '@woowacourse/mission-utils';
import InputView from '../views/InputView.js';
import calculateLottoAmount from '../utils/LottoUtils.js';
import LottoService from '../services/LottoService.js';

class LottoController {
  constructor() {
    this.view = new InputView();
    this.service = new LottoService();
  }

  async startLotto() {
    const purchaseCost = await this.view.getPurchaseCost();
    const lottoAmount = calculateLottoAmount(purchaseCost);

    const generatedLottoNumbers =
      this.service.getGeneratedLottoNumbers(lottoAmount);
    generatedLottoNumbers.forEach((lotto) => {
      Console.print(`[${lotto.getNumbers().join(', ')}]`);
    });
  }
}

export default LottoController;
