import { Console } from '@woowacourse/mission-utils';
import { MESSAGES } from './constants/Messages.js';

const outputView = {
  printMessage(message) {
    Console.print(message);
  },

  printBlank() {
    Console.print('');
  },

  printPurchaseResult(lottoNumbers) {
    Console.print(lottoNumbers.length + MESSAGES.purchaseResult);
    lottoNumbers.forEach((lottoNumber) => Console.print(lottoNumber));
    this.printBlank();
  },
};

export default outputView;
