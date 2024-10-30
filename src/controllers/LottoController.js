import { Console } from '@woowacourse/mission-utils';
import InputView from '../views/InputView.js';
import calculateLottoAmount from '../utils/LottoUtils.js';

class LottoController {
  constructor() {
    this.view = new InputView();
  }

  async startLotto() {
    const purchaseCost = await this.view.getPurchaseCost();
    const lottoAmount = calculateLottoAmount(purchaseCost);
    Console.print(`lottoAmount : ${lottoAmount}`);
  }
}
export default LottoController;
