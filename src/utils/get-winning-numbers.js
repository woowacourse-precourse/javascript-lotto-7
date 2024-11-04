import { promptUserInput, printMessage } from './console.js';
import { USER_PROMPT_MESSAGES } from '../constants/constants.js';
import validateWinningNumbers from '../validations/winning-number.js';
import sortNumbersAscending from './sort-numbers.js';

const { GET_WINNING_NUMBER } = USER_PROMPT_MESSAGES;

const getWinningNumbers = async () => {
  while (true) {
    try {
      const winningNumbers = await promptUserInput(GET_WINNING_NUMBER);

      const validatedWinningNumbers = validateWinningNumbers(winningNumbers);
      const sortedWinningNumbers = sortNumbersAscending(
        validatedWinningNumbers,
      );

      return sortedWinningNumbers;
    } catch (error) {
      printMessage(error.message);
    }
  }
};

export default getWinningNumbers;
