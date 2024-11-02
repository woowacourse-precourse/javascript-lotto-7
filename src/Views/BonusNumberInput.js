import { Console } from '@woowacourse/mission-utils';
import { printErrorAndFalse } from '../Utils/handleError.js';
import Rules from '../Utils/Rules.js';
import PrintMessages from '../Constants/PrintMessages.js';
import ErrorMessages from '../Constants/ErrorMessages.js';

const BonusNumberInput = {
  get: async () => {
    const userInput = await Console.readLineAsync(
      PrintMessages.BONUS_NUMBER_INPUT
    );
    return userInput;
  },

  validate: (bonusNumberInput, basicNumbers) => {
    if (Rules.isNoValueString(bonusNumberInput)) {
      return printErrorAndFalse(ErrorMessages.BonusNumber.NO_INPUT);
    }

    const bonusNumber = Number(bonusNumberInput);

    if (isNaN(bonusNumber)) {
      return printErrorAndFalse(ErrorMessages.BonusNumber.NOT_NUMBER_INPUT);
    }

    if (Rules.isNotRangedValue(bonusNumber)) {
      return printErrorAndFalse(ErrorMessages.BonusNumber.NOT_RANGED_INPUT);
    }

    if (basicNumbers.includes(bonusNumber)) {
      return printErrorAndFalse(
        ErrorMessages.BonusNumber.IS_DUPLICATED_WITH_BASIC_NUMBERS
      );
    }

    return true;
  },

  parse: (buyPriceInput) => {
    return Number(buyPriceInput);
  },
};

export default BonusNumberInput;
