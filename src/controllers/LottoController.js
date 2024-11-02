import { Console } from '@woowacourse/mission-utils';
import InputView from '../views/InputView.js';
import calculateLottoAmount, {
  calculateEarningsRatio,
} from '../utils/LottoUtils.js';
import LottoService from '../services/LottoService.js';
import OutputView from '../views/OutputView.js';
import InputValidator from '../validator/InputValidator.js';

class LottoController {
  constructor() {
    this.inputView = new InputView();
    this.outputView = new OutputView();
    this.service = new LottoService();
  }

  async startLotto() {
    const purchaseCost = await this.inputView.getPurchaseCost();
    InputValidator.validatePurchaseCost(purchaseCost);
    const lottoAmount = calculateLottoAmount(Number(purchaseCost));

    //Lotto.js에서 자체 validator 돌려야 함
    const generatedLottos = this.service.getGeneratedLottos(lottoAmount);
    this.outputView.printPurchasedLotto(generatedLottos);

    const winningNumbers = await this.inputView.getWinningNumbers();
    InputValidator.validateNumbers(winningNumbers);
    const bonusNumber = await this.inputView.getBonusNumber();
    InputValidator.validateBonusNumber(bonusNumber, winningNumbers);

    const { matchCounts, totalEarnings } = this.service.calculateLottoResults(
      generatedLottos,
      winningNumbers,
      bonusNumber,
    );
    const earningsRatio = calculateEarningsRatio(totalEarnings, purchaseCost);
    this.outputView.printWinningStatistics(matchCounts, earningsRatio);
  }
}

export default LottoController;
