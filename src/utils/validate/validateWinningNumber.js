import Lotto from '../../Lotto.js';
import printOutput from '../printOutput.js';
import getUserInput from '../getUserInput.js';
import { INPUT_MESSAGE } from '../../constants/inputOutputMessages.js';

const validateWinningNumber = async () => {
  while (true) {
    try {
      const inputNumbers = await getUserInput(INPUT_MESSAGE.WINNING_NUMBERS);
      const lotto = new Lotto(inputNumbers.split(',').map(Number));

      return lotto.getNumber();
    } catch (error) {
      printOutput(error.message);
    }
  }
};

export default validateWinningNumber;
