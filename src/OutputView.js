import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printEmptyLine() {
    Console.print('');
  },
  printErrorMessage(errorMessage) {
    Console.print(`${errorMessage}\n`);
  },
  printMessage(message) {
    Console.print(message);
  },
};

export default OutputView;
