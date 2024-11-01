import { Console } from '@woowacourse/mission-utils';

const Output = {
  message: (message) => {
    Console.print(message);
  },

  error: (errorMessage) => {
    Console.print(`[ERROR] ${errorMessage}`);
  },
};

export default Output;
