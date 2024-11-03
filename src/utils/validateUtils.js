import { CONFIG } from '../constants';
import { Printer } from '../io';

export const throwError = (message) => {
  throw new Error(CONFIG.errorPrefix + message);
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
