import { Random } from '@woowacourse/mission-utils';
import IOProcessor from './IOProcessor.js';
import Lotto from './Lotto.js';
import StringParser from './StringParser.js';
import LottoCalculator from './LottoCalculator.js';
import { validateAmount, validateWinningNumbers } from './validation.js';
import { LOTTO_PRICE, LOTTO_RESULT_MESSAGE, LOTTO_WINNIG_PRICE } from './constant.js';

/**
 *
 */
class LottoController {
  #lottos;
  #winningNumbers;
  #winningBonusNumber;
  #resultTable;
  #totalEarningPrice;
  #ioProcessor;
  #calculator;

  /**
   *
   */
  constructor() {
    this.#winningNumbers = [];
    this.#winningBonusNumber = 0;
    this.#resultTable = {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    };
    this.#totalEarningPrice = 0;
    this.#ioProcessor = new IOProcessor();
    this.#calculator = new LottoCalculator();
  }

  /**
   *
   */
  buyLottos(amount) {
    validateAmount(amount);

    const lottoSize = amount / LOTTO_PRICE;
    this.#lottos = Array.from({ length: lottoSize }, () => new Lotto(this.generateLotto()));

    this.#ioProcessor.processOuput('');
    this.#ioProcessor.processOuput(`${lottoSize}개를 구매했습니다.`);
    this.#lottos.forEach((lotto) => lotto.printLotto());
  }

  /**
   *
   */
  generateLotto() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  /**
   *
   */
  setWinningNumbers(winningNumbers) {
    const stringParser = new StringParser();
    this.#winningNumbers = stringParser.parseString(winningNumbers).map(Number);

    validateWinningNumbers(this.#winningNumbers);
  }

  /**
   *
   */
  setWinningBonusNumber(winningBonusNumber) {
    this.#winningBonusNumber = Number(winningBonusNumber);
  }

  /**
   *
   */
  calculateLottoResult() {
    this.#lottos.forEach((lotto) => {
      const rank = this.#calculator.calculateLotto(
        lotto,
        this.#winningNumbers,
        this.#winningBonusNumber
      );
      this.#resultTable[rank] += 1;
    });
  }

  /**
   *
   */
  printResult() {
    this.#ioProcessor.processOuput('');
    this.#ioProcessor.processOuput('당첨 통계');
    this.#ioProcessor.processOuput('---');

    const resultTableArray = [...Object.entries(this.#resultTable)]
      .filter(([rank, _]) => rank !== '0')
      .reverse();

    resultTableArray.forEach(([rank, count]) => {
      this.#ioProcessor.processOuput(`${LOTTO_RESULT_MESSAGE[rank]} - ${count}개`);
    });
  }

  /**
   *
   */
  printEarningRate() {
    const earningRate = (this.#totalEarningPrice / (this.#lottos.length * LOTTO_PRICE)).toFixed(1);

    this.#ioProcessor.processOuput(`총 수익률은 ${earningRate}% 입니다.`);
  }

  /**
   *
   */
  calculateTotalEarningPrice() {
    Object.entries(this.#resultTable).forEach(([rank, count]) => {
      this.#totalEarningPrice += count * LOTTO_WINNIG_PRICE[rank];
    });
  }
}

export default LottoController;
