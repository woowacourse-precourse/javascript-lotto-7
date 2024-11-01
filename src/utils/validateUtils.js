import { Console } from '@woowacourse/mission-utils';
import { LOTTO_CONFIG } from '../constants/index.js';

export const throwError = (message) => {
  throw new Error(LOTTO_CONFIG.errorPrefix + message);
};

export const tryAgain = async (func) => {
  try {
    return await func();
  } catch (error) {
    Console.print(error.message);
    return await tryAgain(func);
  }
};
