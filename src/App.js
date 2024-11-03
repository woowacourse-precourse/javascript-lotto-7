import { Console, Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import { Settings, Messages } from './constants.js';

class App {
  async run() {
    let purchaseAmount;
    while(1){
      try {
        purchaseAmount = await this.getPurchaseAmount();
        break;
      } catch (e) {
        Console.print(e.message);
      }
    }

    const purchaseCount = this.calculatePurchaseCount(purchaseAmount);

    const generatedLottos = this.generateLottos(purchaseCount);

    let winningNumbers;
    while(1){
      try {
        winningNumbers = await this.getWinningNumbers();
        break;
      } catch (e) {
        Console.print(e.message);
      }
    }

    let bonusNumber;
    while(1){
      try {
        bonusNumber = await this.getBonusNumber(winningNumbers);
        break;
      } catch (e) {
        Console.print(e.message);
      }
    }

    const lottoResults = this.calculateLottoResults(
      generatedLottos,
      winningNumbers,
      bonusNumber,
      purchaseAmount,
    );
    this.printLottoResults(lottoResults);
  }

  async getPurchaseAmount() {
    let amount = await Console.readLineAsync(Messages.PURCHASE_AMOUNT.INPUT);
    amount = Number(amount);

    if (Number.isNaN(amount)) {
      throw new Error(Messages.ERROR.PREFIX + Messages.PURCHASE_AMOUNT.NAN);
    }
    if (amount <= 0) {
      throw new Error(Messages.ERROR.PREFIX + Messages.PURCHASE_AMOUNT.LESS_THAN_1);
    }

    return amount;
  }
  
  calculatePurchaseCount(purchaseAmount) {
    const purchaseCount = purchaseAmount / Settings.PRICE_PER_LOTTO;
    if (!Number.isInteger(purchaseCount)) {
      throw new Error(Messages.ERROR.PREFIX + Messages.PURCHASE_AMOUNT.PRICE_PER_LOTTO);
    }

    Console.print(Messages.PURCHASE_COUNT.BOUGHT(purchaseCount));
    return purchaseCount;
  }

  generateLottos(purchaseCount) {
    return Array.from({ length: purchaseCount }, () => {
      const lotto = new Lotto(Random.pickUniqueNumbersInRange(Settings.NUMBER_MIN, Settings.NUMBER_MAX, Settings.NUMBER_COUNT).sort((a, b) => a - b));
      lotto.printNumbers();
      return lotto;
    });
  }

  async getWinningNumbers() {
    const getNumbers = await Console.readLineAsync(Messages.WINNING_NUMBERS.INPUT);
    if (getNumbers.trim() === '' || getNumbers.endsWith(',')) {
      throw new Error(Messages.ERROR.PREFIX + Messages.WINNING_NUMBERS.INVALID);
    }
    const winningNumbers = getNumbers.split(',').map((number) => {
      const num = Number(number.trim());
      if (Number.isNaN(num)) {
        throw new Error(Messages.ERROR.PREFIX + Messages.WINNING_NUMBERS.NAN);
      }
      if (num < Settings.NUMBER_MIN || num > Settings.NUMBER_MAX) {
        throw new Error(Messages.ERROR.PREFIX + Messages.WINNING_NUMBERS.MIN_MAX);
      }
      return num;
    });
    const uniqueNumbers = new Set(winningNumbers);
    if (uniqueNumbers.size !== winningNumbers.length) {
      throw new Error(Messages.ERROR.PREFIX + Messages.WINNING_NUMBERS.UNIQUE);
    }
    if (winningNumbers.length !== Settings.NUMBER_COUNT) {
      throw new Error(Messages.ERROR.PREFIX + Messages.WINNING_NUMBERS.COUNT);
    }
    return winningNumbers;
  }

  async getBonusNumber(winningNumbers) {
    let bonusNumber = await Console.readLineAsync(Messages.BONUS_NUMBER.INPUT);
    bonusNumber = Number(bonusNumber);
    if (Number.isNaN(bonusNumber)) {
      throw new Error(Messages.ERROR.PREFIX + Messages.BONUS_NUMBER.NAN);
    }
    if (bonusNumber < Settings.NUMBER_MIN || bonusNumber > Settings.NUMBER_MAX) {
      throw new Error(Messages.ERROR.PREFIX + Messages.BONUS_NUMBER.MIN_MAX);
    }
    if (winningNumbers.includes(bonusNumber)) {
      throw new Error(Messages.ERROR.PREFIX + Messages.BONUS_NUMBER.UNIQUE);
    }
    return bonusNumber;
  }

  calculateLottoResults(generatedLottos, winningNumbers, bonusNumber, purchaseAmount) {
    const lottoResults = {
      3: 0,
      4: 0,
      5: 0,
      5.5: 0,
      6: 0,
      totalPrize: 0,
      profitRate: 0,
    };

    generatedLottos.forEach((lotto) => {
      let matchCount = lotto.matchNumbers(winningNumbers);
      const matchBonus = lotto.matchNumbers([bonusNumber]);

      if (matchCount === 5 && matchBonus === 1) {
        matchCount += 0.5;
      }
      if (matchCount >= 3) {
        lottoResults[matchCount] += 1;
      }
    });

    lottoResults.totalPrize =
      lottoResults[3] * Settings.PRIZE[3]
      + lottoResults[4] * Settings.PRIZE[4]
      + lottoResults[5] * Settings.PRIZE[5]
      + lottoResults[5.5] * Settings.PRIZE[5.5]
      + lottoResults[6] * Settings.PRIZE[6];

    lottoResults.profitRate = ((lottoResults.totalPrize / purchaseAmount) * 100).toFixed(1);
    lottoResults.profitRate = lottoResults.profitRate.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return lottoResults;
  }

  printLottoResults(lottoResults) {
    Console.print(Messages.RESULT.TITLE);
    Console.print(Messages.RESULT.COUNT_3(lottoResults[3]));
    Console.print(Messages.RESULT.COUNT_4(lottoResults[4]));
    Console.print(Messages.RESULT.COUNT_5(lottoResults[5]));
    Console.print(Messages.RESULT.COUNT_5_5(lottoResults[5.5]));
    Console.print(Messages.RESULT.COUNT_6(lottoResults[6]));
    Console.print(Messages.RESULT.PROFIT_RATE(lottoResults.profitRate));
  }
}
export default App;
