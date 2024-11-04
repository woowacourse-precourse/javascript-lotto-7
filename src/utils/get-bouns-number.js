import { promptUserInput, printMessage } from './console.js';
import { USER_PROMPT_MESSAGES } from '../constants/constants.js';
import validateBonusNumber from '../validations/bouns-number.js';
const { GET_BONUS_NUMBER } = USER_PROMPT_MESSAGES;

const getBonusNumber = async (winningNumbers) => {
  while (true) {
    try {
      const bonusNumber = await promptUserInput(GET_BONUS_NUMBER);
      validateBonusNumber(bonusNumber, winningNumbers);

      return Number(bonusNumber);
    } catch (error) {
      printMessage(error.message);
    }
  }
};

export default getBonusNumber;
