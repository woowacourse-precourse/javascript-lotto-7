import { Console } from '@woowacourse/mission-utils';
import { ERROR_PREFIX } from '../constant/constants.js';

export default class OutputView {
  printError(message) {
    Console.print(`${ERROR_PREFIX} ${message}`);
  }
}
