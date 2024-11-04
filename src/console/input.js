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

let MAX_RETRY_COUNT;
if (process.env.NODE_ENV === 'test') {
  MAX_RETRY_COUNT = 1;
} else {
  MAX_RETRY_COUNT = 3;
}

const retryInput = async (inputFn) => {
  let retryCount = 0;

  while (retryCount < MAX_RETRY_COUNT) {
    try {
      const result = await inputFn();
      return result;
    } catch (error) {
      if (process.env.NODE_ENV === 'test') {
        throw error;
      }
      Console.print(error.message);
      retryCount++;
    }
  }

  throw new Error(ERROR_MESSAGE.MAX_RETRY_EXCEEDED);
};

export const inputBuyCash = async () => {
  if (getInputBuyCashValue() !== null) {
    return getInputBuyCashValue();
  }

  const validateCash = async () => {
    const input = await Console.readLineAsync(IO_MESSAGE.INPUT_CASH);
    const cash = Number(input);

    if (isNaN(cash) || cash % 1000 !== 0) {
      throw new Error(ERROR_MESSAGE.ERROR_CASH);
    }

    setInputBuyCashValue(cash);
    return cash;
  };

  return retryInput(validateCash);
};

export const inputWinningNums = async () => {
  if (inputWiinningNumsValue !== null) {
    return inputWiinningNumsValue;
  }

  const validateWinningNums = async () => {
    const input = await Console.readLineAsync(`\n${IO_MESSAGE.INPUT_WINNING_NUM}`);
    const numbers = input.split(',').map(Number);

    const winningLotto = new Lotto(numbers);
    setInputWiinningNumsValue(winningLotto.getNumbers());
    return winningLotto.getNumbers();
  };

  return retryInput(validateWinningNums);
};

export const inputBonusNum = async (winningNums) => {
  if (inputBonusNumValue !== null) {
    return inputBonusNumValue;
  }

  const validateBonusNum = async () => {
    const input = await Console.readLineAsync(`\n${IO_MESSAGE.INPUT_BONUS_NUMS}`);
    const bonusNum = Number(input);

    if (isNaN(bonusNum) || bonusNum < 1 || bonusNum > 45) {
      throw new Error(ERROR_MESSAGE.ERROR_NUM);
    }

    if (winningNums.includes(bonusNum)) {
      throw new Error(ERROR_MESSAGE.ERROR_BONUS_SET);
    }

    setInputBonusNumValue(bonusNum);
    return bonusNum;
  };

  return retryInput(validateBonusNum);
};
