import { Console } from '@woowacourse/mission-utils';
import InputView from '../view/InputView.js';

class LottoController {
  constructor() {
    this.view = new InputView();
  }

  async startLotto() {
    const purchaseCost = await this.view.getPurchaseCost();
    Console.print(`purchaseCost : ${purchaseCost}`);
  }
}
export default LottoController;
