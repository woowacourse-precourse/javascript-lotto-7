import { Console } from '@woowacourse/mission-utils';
import {
  getInputBuyCashValue,
  inputBonusNumValue,
  inputWiinningNumsValue,
  setInputBonusNumValue,
  setInputBuyCashValue,
  setInputWiinningNumsValue,
} from '../constants/constants.js';
import { ERROR_MESSAGE, IO_MESSAGE } from '../constants/message.js';
import Lotto from '../Lotto.js';

export const inputBuyCash = async () => {
  if (getInputBuyCashValue() === null) {
    let input = await Console.readLineAsync(IO_MESSAGE.INPUT_CASH);
    input = Number(input);
    if (isNaN(input) || input % 1000 !== 0) {
      throw new Error(ERROR_MESSAGE.ERROR_CASH);
    }
    setInputBuyCashValue(input);
  }
  return getInputBuyCashValue();
};

export const inputWinningNums = async () => {
  if (inputWiinningNumsValue === null) {
    let input = await Console.readLineAsync(`\n${IO_MESSAGE.INPUT_WINNING_NUM}`);
    input = input.split(',').map(Number);

    const winningLotto = new Lotto(input);
    setInputWiinningNumsValue(winningLotto.getNumbers());
  }
  return inputWiinningNumsValue;
};

export const inputBonusNum = async (winningNums) => {
  if (inputBonusNumValue === null) {
    let input = await Console.readLineAsync(`\n${IO_MESSAGE.INPUT_BONUS_NUMS}`);
    input = Number(input);
    if (isNaN(input) || input < 1 || input > 45) {
      throw new Error(ERROR_MESSAGE.ERROR_NUM);
    }
    if (winningNums.includes(input)) {
      throw new Error(ERROR_MESSAGE.ERROR_BONUS_SET);
    }
    setInputBonusNumValue(input);
  }
  return inputBonusNumValue;
};
