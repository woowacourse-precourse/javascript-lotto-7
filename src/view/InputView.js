import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGES } from '../constants/constants.js';

const readInput = (inputMessage) => {
  try {
    return Console.readLineAsync(inputMessage);
  } catch (error) {
    Console.print(INPUT_MESSAGES.ERROR);
  }
};

const InputView = {
  async readLottoPurchasePriceAsync() {
    return await readInput(INPUT_MESSAGES.PURCHASE_PRICE);
  },
  async readWinningNumbersAsync() {
    return await readInput(INPUT_MESSAGES.WINNING_NUMBERS);
  },
  async readBonusNumberAsnyc() {
    return await readInput(INPUT_MESSAGES.BONUS_NUMBER);
  },
};

export default InputView;
