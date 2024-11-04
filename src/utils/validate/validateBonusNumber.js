import BonusNumberValidator from '../../BonusNumberValidator.js';
import printOutput from '../printOutput.js';
import getUserInput from '../getUserInput.js';
import { INPUT_MESSAGE } from '../../constants/inputOutputMessages.js';

const validateBonusNumber = async () => {
  while (true) {
    try {
      const inputNumber = await getUserInput(INPUT_MESSAGE.BONUS_NUMBER);
      const bonusNumber = BonusNumberValidator.validateBonusNumber(inputNumber);

      return bonusNumber;
    } catch (error) {
      printOutput(error.message);
    }
  }
};

export default validateBonusNumber;
