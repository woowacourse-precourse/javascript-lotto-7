import validator from '../validators/Validator.js';
import { Console } from '@woowacourse/mission-utils';

const INPUT_MESSAGE = {
  COST: '구입금액을 입력해 주세요.\n',
  SUCCESS_NUM: '당첨 번호를 입력해 주세요.\n',
  BONUS_NUM: '보너스 번호를 입력해 주세요.\n',
};

const inputView = {
  async getInputCost() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.COST);
    validator.validateInputCost(input);
    return input;
  },
  async getSuccessNum() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.SUCCESS_NUM);
    validator.validateSuccessNum(input);
    return input;
  },
  async getBonusNum() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.BONUS_NUM);
    validator.validateBonusNum(input);
    return input;
  },
};

export default inputView;
