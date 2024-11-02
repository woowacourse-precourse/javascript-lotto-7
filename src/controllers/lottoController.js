import Lotto from '../model/Lotto.js';
import LottoStore from '../model/LottoStore.js';
import LottoView from '../views/LottoView.js';

class LottoController {
  static async start() {
    const amount = await this.convertPurchaseAmount();
    const lottoStore = new LottoStore(amount);
    LottoView.PrintLottos(lottoStore.getCount(), lottoStore.getLottos());
    const winningNumbers = await this.convertWinningNumber();
    const lottot = new Lotto(winningNumbers);
    console.log(lottot);
  }

  static async convertPurchaseAmount() {
    const purchaseAmount = await LottoView.InputPurchaseAmount();
    return Number(purchaseAmount);
  }

  static async convertWinningNumber() {
    const winningNumber = await LottoView.InputwinningNumbers();
    return winningNumber
      .trim()
      .split(',')
      .map((num) => Number(num.trim()));
  }

  static async convertBounusNumber() {
    const bounusNumber = await LottoView.InputbounusNumber();
    return Number(bounusNumber);
  }
}

export default LottoController;
