import validator from '../validators/Validator.js';
import { Console } from '@woowacourse/mission-utils';

const INPUT_MESSAGE = {
  COST: '구입금액을 입력해 주세요.\n',
  SUCCESS_NUM: '\n당첨 번호를 입력해 주세요.\n',
  BONUS_NUM: '\n보너스 번호를 입력해 주세요.\n',
};

const inputView = {
  async getInputCost() {
    while (true) {
      try {
        const input = await Console.readLineAsync(INPUT_MESSAGE.COST);
        validator.validateInputCost(input);
        return input;
      } catch (err) {
        Console.print(err.message);
      }
    }
  },
  async getSuccessNum() {
    while (true) {
      try {
        const input = await Console.readLineAsync(INPUT_MESSAGE.SUCCESS_NUM);
        const inputList = input.split(',').map(Number);
        validator.validateSuccessNum(inputList);
        return inputList;
      } catch (err) {
        Console.print(err.message);
      }
    }
  },
  async getBonusNum() {
    while (true) {
      try {
        const input = await Console.readLineAsync(INPUT_MESSAGE.BONUS_NUM);
        validator.validateBonusNum(input);
        return input;
      } catch (err) {
        Console.print(err.message);
      }
    }
  },
};

export default inputView;
