import { Console } from '@woowacourse/mission-utils';

import {
  INPUT_PROMPT,
  WINNING_NUMBERS_DELIMITER,
} from '../constants/inputConstant.js';
import InputHandler from '../utils/InputHandler.js';
import Validator from '../utils/Validator.js';
import LottoMachine from './LottoMachine.js';
import LottoWinningNumbers from './LottoWinningNumbers.js';

class LottoGame {
  #lottos;

  constructor() {
    this.#lottos = null;
    this.lottoMachine = new LottoMachine();
    this.lottoWinningNumbers = new LottoWinningNumbers();
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

    const inputBonusNumbers = await InputHandler.getInput(
      INPUT_PROMPT.BONUS_NUMBER,
    );
    this.lottoWinningNumbers.setBonusNumber(Number(inputBonusNumbers));
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
  }
}

export default LottoGame;
