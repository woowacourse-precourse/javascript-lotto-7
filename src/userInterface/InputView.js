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

  askBonusNumber: async () => {
    const bonusNumber = await Console.readLineAsync(
      INPUT_VIEW.bonusNumberQuestion,
    );

    return bonusNumber;
  },
};

export default inputView;
