import { Console } from '@woowacourse/mission-utils';
import Validator from './validator';

class Input {
  static async inputAmount() {
    try {
      const amount = await Console.readLineAsync('구입금액을 입력해 주세요.');
      Validator.checkAmount(amount);
      return amount;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async inputLottoNumber() {
    try {
      const lottoNumber = await Console.readLineAsync(
        '당첨 번호를 입력해 주세요.',
      );
      return lottoNumber;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async inputBonusNumber() {
    try {
      const bonusNumber = await Console.readLineAsync(
        '보너스 번호를 입력해 주세요.',
      );
      return bonusNumber;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default Input;
