import { Console } from '@woowacourse/mission-utils';
import { TAGS } from '../constants/message.js';

const readAsyncInput = (message) => Console.readLineAsync(`${message}\n`);

const printMessage = (message) => Console.print(message);

const throwError = (message) => {
  const errorMessage = `${TAGS.ERROR} ${message}`;
  throw new Error(errorMessage);
};

export { 
  readAsyncInput,
  printMessage,
  throwError,
};