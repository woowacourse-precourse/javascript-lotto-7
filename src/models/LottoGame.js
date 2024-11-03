import { Console } from '@woowacourse/mission-utils';

import { INPUT_PROMPT, WINNING_NUMBERS_DELIMITER } from '../constants/inputConstant.js';
import InputHandler from '../utils/InputHandler.js';
import Validator from '../utils/Validator.js';
import LottoMachine from './LottoMachine.js';
import LottoWinningNumbers from './LottoWinningNumbers.js';
import LottoStatistics from './LottoStatistics.js';

class LottoGame {
  #lottos;

  constructor() {
    this.#lottos = null;
    this.lottoMachine = new LottoMachine();
    this.lottoWinningNumbers = new LottoWinningNumbers();
    this.lottoStatistics = new LottoStatistics();
  }

  async play() {
    const inputPurchasePrice = await InputHandler.getInput(INPUT_PROMPT.PURCHASE_PRICE, Validator.validatePurchasePrice);

    this.setLottos(this.lottoMachine.generateLottos(Number.parseInt(inputPurchasePrice, 10)));
    this.printLottos();

    const inputWinningNumbers = await InputHandler.getInput(INPUT_PROMPT.WINNING_NUMBERS, Validator.validateWinninNumbers);
    this.lottoWinningNumbers.setWinningNumbers(inputWinningNumbers.split(WINNING_NUMBERS_DELIMITER).map(Number));

    const inputBonusNumbers = await InputHandler.getInput(INPUT_PROMPT.BONUS_NUMBER, Validator.validateBonusNumber);
    this.lottoWinningNumbers.setBonusNumber(Number(inputBonusNumbers));

    this.computeLottoStatistics();
    this.printLottoStatistics();
  }

  printLottos() {
    Console.print(`\n${this.#lottos.length}개를 구매했습니다.`);
    this.#lottos.forEach(lotto => Console.print(`[${lotto.getNumbers().join(', ')}]`));
  }

  computeLottoStatistics() {
    this.lottoStatistics.computeLottoResults(this.getLottos(), this.getLottoWinningNumbers());
    this.lottoStatistics.computeProfitRate(this.getLottos());
  }

  printLottoStatistics() {
    Console.print('\n당첨 통계\n---');
    Console.print(this.lottoStatistics.statisticsToString());
    Console.print(`총 수익률은 ${this.lottoStatistics.getProfitRate()}%입니다.`);
  }

  getLottos() {
    return this.#lottos;
  }

  setLottos(lottos) {
    this.#lottos = lottos;
  }

  getLottoWinningNumbers() {
    return this.lottoWinningNumbers;
  }
}

export default LottoGame;
