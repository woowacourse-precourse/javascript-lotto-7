import { Console } from '@woowacourse/mission-utils';
import { IOMESSAGE, NUM } from '../constants/index.js';

export const inputMethod = Object.freeze({
  inputPurchaseAmount: async function () {
    const purchaseAmount = await Console.readLineAsync(
      IOMESSAGE.INPUT_PURCHASE_AMOUNT,
    );
    return purchaseAmount;
  },
  inputWinningNumber: async function () {
    const winningNumber = await Console.readLineAsync(
      IOMESSAGE.INPUT_LOTTO_NUMBER,
    );
    return winningNumber.split(NUM.SEPARATOR);
  },
});

export const outputMethod = (message) => {
  Console.print(message);
};
