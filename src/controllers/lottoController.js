import LottoView from '../views/LottoView.js';

class LottoController {
  static async start() {
    const purchageAmonut = await LottoView.InputPurchaseAmount();
  }
}
export default LottoController;
