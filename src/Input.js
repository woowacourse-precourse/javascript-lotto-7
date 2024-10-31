import { readLineAsync } from '@woowacourse/mission-utils';
import Validator from './validator';

class Input {
  static async inputAmount() {
    try {
      const amount = await readLineAsync('구입금액을 입력해 주세요.');
      Validator.checkAmount(amount);
      return amount;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default Input;
