import { Console } from '@woowacourse/mission-utils';
import Validator from '../validators/Validator';

const INPUT_MESSAGE = {
  COST: '구입금액을 입력해 주세요.',
  SUCCESS_NUM: '당첨 번호를 입력해 주세요.',
  BONUS_NUM: '보너스 번호를 입력해 주세요.',
};

class InputView {
  async getInputCost() {
    const input = await Console.readlineAsync(INPUT_MESSAGE.COST);
    validator.validateInputCost(input);
    return input;
  }
  async getSuccessNum() {
    const input = await Console.readlineAsync(INPUT_MESSAGE.SUCCESS_NUM);
    validator.validateSuccessNum(input);
    return input;
  }
  async getBonusNum() {
    const input = await Console.readlineAsync(INPUT_MESSAGE.BONUS_NUM);
    validator.validateBonusNum(input);
    return input;
  }
}

export default InputView;
