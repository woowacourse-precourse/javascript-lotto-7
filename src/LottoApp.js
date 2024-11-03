import { MissionUtils } from "@woowacourse/mission-utils";
import {
  LOTTO_PRICE,
  ERROR_MESSAGES,
  MESSAGES,
  LOTTO_NUMBERS,
} from "./constants.js";
import Lotto from "./Lotto.js";

class LottoApp {
  constructor() {
    this.statistics = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
    };
  }

  async promptPurchaseAmount() {
    try {
      const amount = await MissionUtils.Console.readLineAsync(
        MESSAGES.PURCHASE_AMOUNT_PROMPT
      );
      this.validateAmount(amount);
      return Number(amount);
    } catch (error) {
      MissionUtils.Console.print(error.message);
      return this.promptPurchaseAmount();
    }
  }

  purchaseLottos(amount) {
    const count = Math.floor(amount / LOTTO_PRICE);
    const lottos = this.generateLottos(count);
    this.printLottoTickets(lottos);
    return lottos;
  }

  validateAmount(amount) {
    const parsedAmount = Number(amount);
    if (
      isNaN(parsedAmount) ||
      parsedAmount <= 0 ||
      parsedAmount % LOTTO_PRICE !== 0
    ) {
      throw new Error(ERROR_MESSAGES.INVALID_PURCHASE_AMOUNT);
    }
  }

  generateLottoNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(
      LOTTO_NUMBERS.MIN,
      LOTTO_NUMBERS.MAX,
      LOTTO_NUMBERS.COUNT
    ).sort((a, b) => a - b);
  }

  generateLottos(count) {
    MissionUtils.Console.print(`\n${count}${MESSAGES.LOTTO_PURCHASED}`);
    const lottos = [];
    for (let i = 0; i < count; i++) {
      lottos.push(new Lotto(this.generateLottoNumbers()));
    }
    return lottos;
  }

  printLottoTickets(lottos) {
    lottos.forEach((lotto) => {
      MissionUtils.Console.print(`[${lotto.getNumbers().join(", ")}]`);
    });
  }

  async promptWinningNumbers() {
    try {
      const input = await MissionUtils.Console.readLineAsync(
        MESSAGES.WINNING_NUMBER_PROMPT
      );
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
      const input = await MissionUtils.Console.readLineAsync(
        MESSAGES.BONUS_NUMBER_PROMPT
      );
      const bonusNumber = this.parseBonusNumber(input);
      this.validateBonusNumber(bonusNumber, winningLotto.getNumbers());
      return bonusNumber;
    } catch (error) {
      MissionUtils.Console.print(error.message);
      return this.promptBonusNumber(winningLotto);
    }
  }

  parseBonusNumber(input) {
    const number = Number(input.trim());
    this.checkBonusNumberType(number);
    return number;
  }

  checkBonusNumberType(number) {
    if (isNaN(number)) {
      throw new Error(ERROR_MESSAGES.INVALID_BONUS_NUMBER_TYPE);
    }
  }

  validateBonusNumber(bonusNumber, winningNumbers) {
    this.checkBonusNumberRange(bonusNumber);
    this.checkBonusNumberDuplication(bonusNumber, winningNumbers);
  }

  checkBonusNumberRange(bonusNumber) {
    if (bonusNumber < LOTTO_NUMBERS.MIN || bonusNumber > LOTTO_NUMBERS.MAX) {
      throw new Error(ERROR_MESSAGES.INVALID_BONUS_NUMBER_RANGE);
    }
  }

  checkBonusNumberDuplication(bonusNumber, winningNumbers) {
    if (winningNumbers.includes(bonusNumber)) {
      throw new Error(ERROR_MESSAGES.DUPLICATE_BONUS_NUMBER);
    }
  }

  calculateStatistics(lottos, winningLotto, bonusNumber) {
    lottos.forEach((lotto) => {
      const { matchCount, hasBonus } = this.getMatchResult(
        lotto,
        winningLotto,
        bonusNumber
      );
      this.updateStatistics(matchCount, hasBonus);
    });
  }

  getMatchResult(lotto, winningLotto, bonusNumber) {
    const matchCount = this.countMatches(lotto, winningLotto);
    const hasBonus = lotto.getNumbers().includes(bonusNumber);
    return { matchCount, hasBonus };
  }

  countMatches(lotto, winningLotto) {
    return lotto
      .getNumbers()
      .filter((num) => winningLotto.getNumbers().includes(num)).length;
  }

  updateStatistics(matchCount, hasBonus) {
    if (matchCount === 6) this.statistics.first++;
    if (matchCount === 5 && hasBonus) this.statistics.second++;
    if (matchCount === 5 && !hasBonus) this.statistics.third++;
    if (matchCount === 4) this.statistics.fourth++;
    if (matchCount === 3) this.statistics.fifth++;
  }

  getStatistics() {
    return this.statistics;
  }
}

export default LottoApp;
