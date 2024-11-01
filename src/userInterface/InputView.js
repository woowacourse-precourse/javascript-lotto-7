import { Console } from '@woowacourse/mission-utils';
import { INPUT_VIEW } from '../Constants.js';

const inputView = {
  askPayment: async () => {
    const payment = await Console.readLineAsync(INPUT_VIEW.paymentQuestion);
    return payment;
  },

  askWinningNumbers: async () => {
    const winningNumbers = await Console.readLineAsync(
      INPUT_VIEW.winningNumbersQuestion,
    );

    return winningNumbers;
  },
};

export default inputView;
