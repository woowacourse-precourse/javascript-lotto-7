import { INPUT_MESSAGE } from './constant';
import { Console } from '@woowacourse/mission-utils';

class LottoController {
  async getLottoAmount() {
    const amount = await Console.readLineAsync(
      INPUT_MESSAGE.INPUT_LOTTO_AMOUNT
    );
  }
  async getLottoNumber() {
    const numbers = await Console.readLineAsync(
      INPUT_MESSAGE.INPUT_LOTTO_NUMBERS
    );
  }
  async getLottoBonusNumber() {
    const bonus = await Console.readLineAsync(
      INPUT_MESSAGE.INPUT_BONUS_NUMBERS
    );
  }
}

export default LottoController;
