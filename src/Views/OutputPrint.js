import { Console } from '@woowacourse/mission-utils';

const OutputPrint = {
  message: (message) => {
    Console.print(message);
  },

  error: (errorMessage) => {
    Console.print(`[ERROR] ${errorMessage}`);
  },

  blankLine: () => {
    Console.print('');
  },
};

export default OutputPrint;
