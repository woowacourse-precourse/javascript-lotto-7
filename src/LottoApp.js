import { MissionUtils } from "@woowacourse/mission-utils";
import { LOTTO_PRICE, LOTTO_NUMBERS } from "./constants.js";
import Lotto from "./Lotto.js";
import LottoIO from "./LottoIO.js";
import LottoValidator from "./LottoValidator.js";
import LottoStatistics from "./LottoStatistics.js";

class LottoApp {
  constructor() {
    this.statistics = new LottoStatistics();
    this.io = new LottoIO();
  }

  async promptPurchaseAmount() {
    try {
      const amount = await this.io.promptPurchaseAmount();
      LottoValidator.validateAmount(amount);
      return Number(amount);
    } catch (error) {
      MissionUtils.Console.print(error.message);
      return this.promptPurchaseAmount();
    }
  }

  purchaseLottos(amount) {
    const count = Math.floor(amount / LOTTO_PRICE);
    const lottos = this.generateLottos(count);
    this.io.printLottoTickets(lottos);
    return lottos;
  }

  generateLottoNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(
      LOTTO_NUMBERS.MIN,
      LOTTO_NUMBERS.MAX,
      LOTTO_NUMBERS.COUNT
    ).sort((a, b) => a - b);
  }

  generateLottos(count) {
    const lottos = [];
    for (let i = 0; i < count; i++) {
      lottos.push(new Lotto(this.generateLottoNumbers()));
    }
    return lottos;
  }

  async promptWinningNumbers() {
    try {
      const input = await this.io.promptWinningNumbers();
      const numbers = this.parseWinningNumbers(input);
      const winningLotto = new Lotto(numbers);
      return winningLotto;
    } catch (error) {
      MissionUtils.Console.print(error.message);
      return this.promptWinningNumbers();
    }
  }

  parseWinningNumbers(input) {
    return input.split(",").map((num) => Number(num.trim()));
  }

  async promptBonusNumber(winningLotto) {
    try {
      const input = await this.io.promptBonusNumber();
      const bonusNumber = this.parseBonusNumber(input);
      LottoValidator.validateBonusNumber(
        bonusNumber,
        winningLotto.getNumbers()
      );
      return bonusNumber;
    } catch (error) {
      MissionUtils.Console.print(error.message);
      return this.promptBonusNumber(winningLotto);
    }
  }

  parseBonusNumber(input) {
    const number = Number(input.trim());
    LottoValidator.checkBonusNumberType(number);
    return number;
  }

  calculateStatistics(lottos, winningLotto, bonusNumber) {
    this.statistics.calculateStatistics(lottos, winningLotto, bonusNumber);
  }

  calculateProfitRate(amount) {
    return this.statistics.calculateProfitRate(amount);
  }

  printStatistics(profitRate) {
    this.io.printStatistics(this.statistics.getStatistics(), profitRate);
  }
}

export default LottoApp;
