//@ts-check

import { Console } from '@woowacourse/mission-utils';

const outputView = {
  /**@param {string} message  */
  printMessage(message) {
    Console.print(message);
  },

  /**@param {Error} error */
  printErrorMessage(error) {
    outputView.printMessage(error.message);
  },
};

export { outputView };
