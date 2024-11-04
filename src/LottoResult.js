import { Console } from '@woowacourse/mission-utils';
import { readUserInput } from './utils/readUserInput.js';
import {
  isNumber,
  isNumberInRange,
  isNumbersInArray,
} from './utils/validators.js';
import {
  INPUT_MESSAGE,
  LOTTO_NUMBER_END,
  LOTTO_NUMBER_START,
  OUTPUT_MESSAGE,
  WINNING_NUMBER_DELIMITER,
} from './constants.js';
import Lotto from './Lotto.js';

const DEFAULT_PRIZES = [
  { matchCount: 3, hasBonus: false, prizeAmount: 5000 },
  { matchCount: 4, hasBonus: false, prizeAmount: 50000 },
  { matchCount: 5, hasBonus: false, prizeAmount: 1500000 },
  { matchCount: 5, hasBonus: true, prizeAmount: 30000000 },
  { matchCount: 6, hasBonus: false, prizeAmount: 2000000000 },
];

const validateLottoNumber = (input, throwOnError) =>
  isNumberInRange(input, LOTTO_NUMBER_START, LOTTO_NUMBER_END, throwOnError);

export default class LottoResult {
  #winningLotto;
  #bonusNumber;
  #prizes;

  constructor(prizes = DEFAULT_PRIZES) {
    this.#prizes = prizes.map((prize) => ({ ...prize, winningLottos: [] }));
  }

  async readWinningNumbers() {
    const winningNumbers = await readUserInput(
      INPUT_MESSAGE.READ_WINNING_NUMBERS,
      [isNumbersInArray]
    );
    const numbers = winningNumbers
      .split(WINNING_NUMBER_DELIMITER)
      .map((value) => Number(value));
    this.#winningLotto = new Lotto(numbers);
  }

  async readBonusNumber() {
    const bonusNumber = await readUserInput(
      `\n${INPUT_MESSAGE.READ_BONUS_NUMBER}`,
      [isNumber, validateLottoNumber]
    );
    this.#bonusNumber = bonusNumber;
  }

  printWinnerStatistics(purchaseAmount, lottos) {
    const totalPrize = this.#calculateTotalPrize(lottos);
    this.#printStatistics();
    this.#printProfitRate(totalPrize, purchaseAmount);
  }

  #findPrizeIndex(matchNumber, hasBonusNumber) {
    return this.#prizes.findIndex(
      (condition) =>
        condition.matchCount === matchNumber &&
        condition.hasBonus === hasBonusNumber
    );
  }

  #calculateTotalPrize(lottos) {
    return lottos.reduce((sum, lotto) => sum + this.#checkLotto(lotto), 0);
  }

  #recordWinningLotto(prizeIndex, lotto) {
    this.#prizes[prizeIndex].winningLottos.push(lotto);
  }

  #calculatePrizeAmount(matchNumber, hasBonusNumber, lotto) {
    const prizeIndex = this.#findPrizeIndex(matchNumber, hasBonusNumber);
    if (prizeIndex === -1) {
      return 0;
    }

    this.#recordWinningLotto(prizeIndex, lotto);
    return this.#prizes[prizeIndex].prizeAmount;
  }

  #checkLotto(lotto) {
    const [matchNumber, hasBonusNumber] = lotto.compare(
      this.#winningLotto.getNumbers(),
      this.#bonusNumber
    );
    return this.#calculatePrizeAmount(matchNumber, hasBonusNumber, lotto);
  }

  #formatStatisticsTitle(matchCount, hasBonus) {
    const title = [OUTPUT_MESSAGE.STATISTICS_TITLE(matchCount)];
    if (hasBonus) {
      title.push(OUTPUT_MESSAGE.STATISTICS_TITLE_BONUS);
    }
    return title.join(', ');
  }

  #printStatistics() {
    Console.print(
      `\n${OUTPUT_MESSAGE.STATISTICS}\n${OUTPUT_MESSAGE.STATISTICS_LINE}`
    );
    this.#prizes.forEach(
      ({ matchCount, hasBonus, prizeAmount, winningLottos }) => {
        Console.print(
          OUTPUT_MESSAGE.STATISTICS_PRIZE(
            `${this.#formatStatisticsTitle(matchCount, hasBonus)}`,
            prizeAmount,
            winningLottos.length
          )
        );
      }
    );
  }

  #printProfitRate(totalPrize, purchaseAmount) {
    const profitRate = ((totalPrize / purchaseAmount) * 100).toFixed(1);
    Console.print(OUTPUT_MESSAGE.PROFIT_RATE(profitRate));
  }
}
