Console;
import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE } from './constants.js';

const OutputView = {
  printEmptyLine() {
    Console.print('');
  },
  printErrorMessage(errorMessage) {
    Console.print(`${ERROR_MESSAGE.prefix} ${errorMessage}\n`);
  },
  printMessage(message) {
    Console.print(message);
  },
};

export default OutputView;
