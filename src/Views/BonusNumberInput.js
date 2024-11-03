import { Console } from '@woowacourse/mission-utils';
import throwError from '../Utils/throwError.js';
import Rules from '../Utils/Rules.js';
import Errors from '../Constants/Errors.js';
import { InputComment } from '../Constants/display.js';

const BonusNumberInput = {
  get: async () => {
    const userInput = await Console.readLineAsync(InputComment.BONUS_NUMBER);
    return userInput;
  },

  validate: (bonusNumberInput, basicNumbers) => {
    if (Rules.isNoValueString(bonusNumberInput))
      throwError(Errors.BonusNumber.NO_INPUT);

    const bonusNumber = Number(bonusNumberInput);
    if (Rules.isNotNumber(bonusNumber))
      throwError(Errors.BonusNumber.NOT_NUMBER_INPUT);
    if (Rules.isNotRangedValue(bonusNumber))
      throwError(Errors.BonusNumber.NOT_RANGED_INPUT);
    if (Rules.isIncludedValue(bonusNumber, basicNumbers))
      throwError(Errors.BonusNumber.IS_DUPLICATED_WITH_BASIC_NUMBERS);

    return true;
  },

  parse: (buyPriceInput) => {
    return Number(buyPriceInput);
  },
};

export default BonusNumberInput;
