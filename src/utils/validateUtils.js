import { Printer } from '../io/index.js';
import { LOTTO_CONFIG } from '../constants/index.js';

export const throwError = (message) => {
  throw new Error(LOTTO_CONFIG.errorPrefix + message);
};

export const tryAgain = async (func) => {
  try {
    return await func();
  } catch (error) {
    Printer.print(error.message);
    Printer.printNewline();
    return await tryAgain(func);
  }
};
