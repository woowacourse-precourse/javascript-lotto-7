import { Console } from '@woowacourse/mission-utils';
import Validator from './Validator.js';

class Input {
  static async inputAmount() {
    try {
      const amount = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
      Validator.checkAmount(amount);
      return amount;
    } catch (error) {
      throw error;
    }
  }

  static async inputLottoNumber() {
    try {
      const lottoNumber = await Console.readLineAsync(
        '당첨 번호를 입력해 주세요.\n',
      );
      Validator.checkLottoNumber(lottoNumber);
      return lottoNumber;
    } catch (error) {
      throw error;
    }
  }

  static async inputBonusNumber(lottoNumber) {
    try {
      const bonusNumber = await Console.readLineAsync(
        '보너스 번호를 입력해 주세요.\n',
      );
      Validator.checkBonusNumber(bonusNumber, lottoNumber);
      return bonusNumber;
    } catch (error) {
      throw error;
    }
  }
}

export default Input;
