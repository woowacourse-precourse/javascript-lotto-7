import Lotto from '../model/Lotto.js';
import LottoResult from '../model/LottoResult.js';
import LottoStore from '../model/LottoStore.js';
import LottoView from '../views/LottoView.js';

class LottoController {
  static async start() {
    const inputAmount = await this.convertPurchaseAmount();
    const lottoStore = new LottoStore(inputAmount);
    LottoView.PrintLottos(lottoStore.getCount(), lottoStore.getLottos());

    const inputWinningNumbers = await this.convertWinningNumber();
    const winningNumber = new Lotto(inputWinningNumbers);

    const inputBonusNumber = await this.convertBonusNumber();

    const lottoResult = new LottoResult(
      lottoStore.getLottos(),
      winningNumber.getNumber(),
      inputBonusNumber,
      inputAmount,
    );

    lottoResult.calculateResults();
    lottoResult.calculateProfitRate();

    LottoView.PrintWinningStatistics(
      lottoResult.getRankCounts(),
      lottoResult.getProfitRate(),
    );
  }

  static async convertPurchaseAmount() {
    const purchaseAmount = await LottoView.InputPurchaseAmount();
    return Number(purchaseAmount);
  }

  static async convertWinningNumber() {
    const winningNumber = await LottoView.InputWinningNumbers();
    return winningNumber
      .trim()
      .split(',')
      .map((num) => Number(num.trim()));
  }

  static async convertBonusNumber() {
    const bonusNumber = await LottoView.InputBonusNumber();
    return Number(bonusNumber);
  }
}

export default LottoController;
