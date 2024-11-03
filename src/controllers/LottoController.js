import Lotto from '../model/Lotto.js';
import LottoResult from '../model/LottoResult.js';
import LottoStore from '../model/LottoStore.js';
import retry from '../utils/retry.js';
import Validator from '../utils/validator.js';
import LottoView from '../views/LottoView.js';

class LottoController {
  static async start() {
    const purchaseAmount = await retry(() => this.getPurchaseAmount());
    const lottoStore = new LottoStore(purchaseAmount);

    LottoView.printCount(lottoStore.getCount());
    LottoView.PrintLottos(lottoStore.getLottos());

    const winningNumbers = await retry(() => this.getWinningNumbers());
    const lotto = new Lotto(winningNumbers);

    const bonusNumber = await retry(() => this.getBonusNumber(winningNumbers));

    const lottoResult = new LottoResult(
      lottoStore.getLottos(),
      lotto.getNumber(),
      bonusNumber,
      purchaseAmount,
    );

    lottoResult.calculateResults();
    lottoResult.calculateProfitRate();

    LottoView.PrintWinningStatistics(
      lottoResult.getRankCounts(),
      lottoResult.getProfitRate(),
    );
  }

  static async getPurchaseAmount() {
    const amountInput = await LottoView.InputPurchaseAmount();
    const purchaseAmount = Number(amountInput);
    Validator.validatePurchaseAmount(purchaseAmount);
    return purchaseAmount;
  }

  static async getWinningNumbers() {
    const winningNumbersInput = await LottoView.InputWinningNumbers();
    const winningNumbers = winningNumbersInput
      .trim()
      .split(',')
      .map((num) => Number(num.trim()));
    Validator.validateLottoNumbers(winningNumbers);
    return winningNumbers;
  }

  static async getBonusNumber(winningNumbers) {
    const bonusNumberInput = await LottoView.InputBonusNumber();
    const bonusNumber = Number(bonusNumberInput);
    Validator.validateBonusNumber(bonusNumber, winningNumbers);
    return bonusNumber;
  }
}

export default LottoController;
