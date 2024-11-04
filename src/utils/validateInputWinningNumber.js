import LottoNumberValidator from '../LottoNumberValidator.js';
import printOutput from './printOutput.js';
import getUserInput from './getUserInput.js';
import { INPUT_MESSAGE } from '../constants/inputOutputMessages.js';

const validateInputWinningNumber = async () => {
  while (true) {
    try {
      const inputNumbers = await getUserInput(INPUT_MESSAGE.WINNING_NUMBERS);
      const winningNumbers =
        LottoNumberValidator.validateWinningNumber(inputNumbers);

      return winningNumbers;
    } catch (error) {
      printOutput(error);
    }
  }
};

export default validateInputWinningNumber;
