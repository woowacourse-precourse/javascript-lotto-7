import { Console } from '@woowacourse/mission-utils';

import INPUT_PROMPT from '../constants/inputConstant.js';
import InputHandler from '../utils/InputHandler.js';
import Validator from '../utils/Validator.js';

class LottoGame {
  async play() {
    const inputPurchasePrice = await InputHandler.getInput(
      INPUT_PROMPT.PURCHASE_PRICE,
    );
    Validator.validatePurchasePrice(inputPurchasePrice);
  }
}

export default LottoGame;
