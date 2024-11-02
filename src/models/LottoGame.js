import { Console } from '@woowacourse/mission-utils';

import INPUT_PROMPT from '../constants/InputConstant.js';
import InputHandler from '../utils/InputHandler.js';

class LottoGame {
  async play() {
    const inputPurchasePrice = await InputHandler.getInput(
      INPUT_PROMPT.PURCHASE_PRICE,
    );
  }
}

export default LottoGame;
