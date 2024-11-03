import { Console } from '@woowacourse/mission-utils';

import {
  INPUT_PROMPT,
  WINNING_NUMBERS_DELIMITER,
} from '../constants/inputConstant.js';
import InputHandler from '../utils/InputHandler.js';
import Validator from '../utils/Validator.js';

class LottoGame {
  #lottos;

  constructor(lottoMachine, lottoWinningNumbers) {
    this.#lottos = null;
    this.lottoMachine = lottoMachine;
    this.lottoWinningNumbers = lottoWinningNumbers;
  }

  async play() {
    const inputPurchasePrice = await InputHandler.getInput(
      INPUT_PROMPT.PURCHASE_PRICE,
    );
    Validator.validatePurchasePrice(inputPurchasePrice);

    this.setLottos(
      this.lottoMachine.generateLottos(Number.parseInt(inputPurchasePrice, 10)),
    );
    this.displayLottos();

    const inputWinningNumbers = await InputHandler.getInput(
      INPUT_PROMPT.WINNING_NUMBERS,
    );
    this.lottoWinningNumbers.setWinningNumbers(
      inputWinningNumbers.split(WINNING_NUMBERS_DELIMITER).map(Number),
    );
  }

  getLottos() {
    return this.#lottos;
  }

  setLottos(lottos) {
    this.#lottos = lottos;
  }

  displayLottos() {
    Console.print(`\n${this.#lottos.length}개를 구매했습니다.`);
    this.#lottos.forEach(lotto =>
      Console.print(`[${lotto.getNumbers().join(', ')}]`),
    );
    Console.print('\n');
  }
}

export default LottoGame;
