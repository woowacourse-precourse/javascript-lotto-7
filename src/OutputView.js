import { Console } from '@woowacourse/mission-utils';
import { MESSAGES } from './constants/Messages.js';
import { CHARS } from './constants/Values.js';

const outputView = {
  printMessage(message) {
    Console.print(message);
  },

  printBlank() {
    Console.print('');
  },

  printPurchaseResult(lottoNumbers) {
    const quantity = lottoNumbers.length.toLocaleString();
    Console.print(`${quantity}${MESSAGES.purchaseResult}`);
    lottoNumbers.forEach((lottoNumber) =>
      Console.print(
        CHARS.lottoNumbersStartWith +
          lottoNumber.join(CHARS.printingNumberDelimiter) +
          CHARS.lottoNumbersEndWith,
      ),
    );
    this.printBlank();
  },

  printDrawResult(result) {
    Console.print(MESSAGES.drawAnalytics);
    Console.print(MESSAGES.horizontalRule);
    result.forEach(([prize, quantity]) => {
      Console.print(MESSAGES.prize[prize] + quantity.toLocaleString() + MESSAGES.count);
    });
  },

  printEarningRate(earningRate) {
    Console.print(MESSAGES.totalEarningRate + earningRate + MESSAGES.is);
  },
};

export default outputView;
