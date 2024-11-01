import { ConsoleIO } from '../io/index.js';
import { LOTTO_CONFIG } from '../constants/index.js';

export const throwError = (message) => {
  throw new Error(LOTTO_CONFIG.errorPrefix + message);
};

export const tryAgain = async (func) => {
  try {
    return await func();
  } catch (error) {
    ConsoleIO.print(error.message);
    ConsoleIO.printNewline();
    return await tryAgain(func);
  }
};
