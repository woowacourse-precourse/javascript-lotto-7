import { Console } from '@woowacourse/mission-utils';
import { INPUT_ERROR_MESSAGE } from '../constant/errorMessage';

export const getUserInput = async (message) => {
  const userInput = await Console.readLineAsync(message + '\n');

  // 올바르지 않은 값인 null 입력값을 오래 들고있지 않기 위해 입력받자마자 null 값인지 test
  if (!userInput) {
    throw new Error(`[ERROR]: ${INPUT_ERROR_MESSAGE.EMPTY}}`);
  }
  return userInput;
};
