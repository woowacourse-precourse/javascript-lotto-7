import LottoChecker from "../models/LottoChecker.js";
import LottoMachine from "../models/LottoMachine.js";
import { Parser } from "../utils/parser/Parser.js";
import { BonusNumberValidator } from "../utils/validator/BonusNumberValidator.js";
import { LottoNumberValidator } from "../utils/validator/LottoNumberValidator.js";
import { PurchaseValidator } from "../utils/validator/PurchaseValidator.js";

class LottoService {
  #lottoMachine;

  constructor() {
    this.#lottoMachine = LottoMachine;
  }

  // 로또 구매 금액 검증
  validatePurchaseAmount(amount) {
    const parsedAmount = Number(amount);
    PurchaseValidator.validatePurchaseAmount(parsedAmount);
    return parsedAmount;
  }

  generateLottos(amount) {
    return this.#lottoMachine.generateLottos(amount);
  }

  // 로또 번호 검증
  validateWinningNumbers(input) {
    const numbers = Parser.parseLottoNumbers(input);
    LottoNumberValidator.validateLottoNumbers(numbers);
    return numbers;
  }

  // 보너스 번호 검증
  validateBonusNumber(input, winningNumbers) {
    const number = Number(input);
    BonusNumberValidator.validateBonusNumber(number, winningNumbers);
    return number;
  }

  checkLottoResults(lottos, winningNumbers, bonusNumber, purchaseAmount) {
    const checker = new LottoChecker(lottos, winningNumbers, bonusNumber);
    const { results, totalPrize } = checker.checkLottos();
    const profitRate = this.calculateProfitRate(totalPrize, purchaseAmount);

    return { results, totalPrize, profitRate };
  }

  calculateProfitRate(totalPrize, purchaseAmount) {
    return ((totalPrize / purchaseAmount) * 100).toFixed(1);
  }
}

export default LottoService;
