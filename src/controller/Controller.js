import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import Lotto from "../Lotto.js";
import WinningLotto from "../model/WinningLotto.js";
import LottoRandom from "../model/LottoRandom.js";
import WinningResult from "../model/WinningResult.js";

class LottoController {
  constructor() {
    this.inputView = new InputView();
    this.outputView = new OutputView();
    this.lottoRandom = new LottoRandom();
    this.winningResult = new WinningResult();
    this.lottos = [];
    this.purchaseAmount = 0;
    this.bonusNumber = 0;
  }

  async start() {
    try {
      await this.setPurchaseAmount();
      await this.generateLottos();
      const winningNumbers = await this.getWinningNumbers();
      this.bonusNumber = await this.getBonusNumber();
      const result = await this.calculateResults(winningNumbers);
      this.displayResults(result);
    } catch (error) {
      this.outputView.printError(error.message);
      this.start();
    }
  }

  async setPurchaseAmount() {
    const purchaseAmount = await this.inputView.getPurchaseAmount();
    this.purchaseAmount = this.validatePurchaseAmount(Number(purchaseAmount));
  }

  validatePurchaseAmount(amount) {
    if (isNaN(amount) || amount % 1000 !== 0) {
      throw new Error("[ERROR] 구입 금액은 1,000원 단위의 숫자여야 합니다.");
    }
    return amount;
  }

  async generateLottos() {
    const purchaseCount = this.purchaseAmount / 1000;
    const lottoNumbers = await this.lottoRandom.lottoRandomNumber(
      purchaseCount
    );
    this.lottos = lottoNumbers.map((numbers) =>
      new Lotto(numbers).getNumbers()
    );
    this.outputView.outputLottoNumbers(purchaseCount, this.lottos);
  }

  async getWinningNumbers() {
    const winningInput = await this.inputView.getWinningNumbers();
    const winningNumbers = await new WinningLotto().winningnumbers(
      winningInput
    );
    return new Lotto(winningNumbers).getNumbers();
  }

  async getBonusNumber() {
    const bonusInput = await this.inputView.getBonusNumber();
    return this.validateBonusNumber(Number(bonusInput));
  }

  validateBonusNumber(number) {
    if (isNaN(number) || number < 1 || number > 45) {
      throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
    return number;
  }

  async calculateResults(winningNumbers) {
    const countMap = { 3: 0, 4: 0, 5: 0, "5+bonus": 0, 6: 0 };

    this.lottos.forEach((lotto) => {
      const matchCount = lotto.filter((num) =>
        winningNumbers.includes(num)
      ).length;
      if (matchCount === 6) {
        countMap[6] += 1; // 1등
      } else if (matchCount === 5 && lotto.includes(this.bonusNumber)) {
        countMap["5+bonus"] += 1; // 2등
      } else if (countMap[matchCount] !== undefined) {
        countMap[matchCount] += 1;
      }
    });

    const totalPrize = this.calculateTotalPrize(countMap);
    const profitRate = this.calculateRateOfReturn(
      totalPrize,
      this.purchaseAmount
    );
    return { countMap, profitRate };
  }

  calculateRateOfReturn(totalPrize, purchaseAmount) {
    const rate = (totalPrize / purchaseAmount) * 100;
    return parseFloat(rate.toFixed(2));
  }

  calculateTotalPrize(countMap) {
    const prizeMap = {
      3: 5000,
      4: 50000,
      5: 1500000,
      "5+bonus": 30000000,
      6: 2000000000,
    };
    return Object.entries(countMap).reduce(
      (total, [key, frequency]) => total + (prizeMap[key] || 0) * frequency,
      0
    );
  }

  displayResults({ countMap, profitRate }) {
    this.outputView.outputWinningResult(countMap);
    this.outputView.outputProfitRate(profitRate);
  }
}

export default LottoController;
