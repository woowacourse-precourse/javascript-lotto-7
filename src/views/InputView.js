import { Console } from '@woowacourse/mission-utils';
import { MESSAGES } from '../constants/Constants.js';

class InputView {
  static getBuyLottoCount() {
    return Console.readLineAsync(`${MESSAGES.PROMPT.BUY_LOTTO_COUNT}\n`);
  }

  static getPickLottoNumber() {
    return Console.readLineAsync(`\n${MESSAGES.PROMPT.PICK_LOTTO_NUMBER}\n`);
  }

  static getBonusLottoNumber() {
    return Console.readLineAsync(`\n${MESSAGES.PROMPT.PICK_BONUS_NUMBER}\n`);
  }
}

export default InputView;
