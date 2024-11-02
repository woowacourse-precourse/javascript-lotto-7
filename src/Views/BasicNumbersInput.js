import { Console } from '@woowacourse/mission-utils';
import { printErrorAndFalse } from '../Utils/handleError.js';
import Rules from '../Utils/Rules.js';
import Errors from '../Constants/Errors.js';
import { InputComment } from '../Constants/display.js';

const BasicNumbersInput = {
  get: async () => {
    const userInput = await Console.readLineAsync(InputComment.BASIC_NUMBERS);
    return userInput;
  },

  validate: (basicNumbersInput) => {
    if (Rules.isNoValueString(basicNumbersInput))
      return printErrorAndFalse(Errors.BasicNumbers.NO_INPUT);

    const basicNumbers = basicNumbersInput.split(',');
    if (Rules.isWrongLength(basicNumbers, 6))
      return printErrorAndFalse(Errors.BasicNumbers.IS_WRONG_LENGTH);
    if (Rules.isDuplicatedValue(basicNumbers))
      return printErrorAndFalse(Errors.BasicNumbers.IS_DUPLICATED_VALUE_IN);

    return validateEachNumber(basicNumbers);
  },

  parse: (basicNumbersInput) => {
    return basicNumbersInput
      .split(InputComment.Seperator.VALUE)
      .map((numberString) => Number(numberString));
  },
};

const validateEachNumber = (basicNumbers) => {
  const isValid = basicNumbers.every((numberString) => {
    if (Rules.isNotNumber(numberString))
      return printErrorAndFalse(Errors.BasicEachNumber.NOT_NUMBER_INPUT);
    if (Rules.isNoValueString(numberString))
      return printErrorAndFalse(Errors.BasicEachNumber.NO_INPUT);

    const number = Number(numberString);
    if (Rules.isNotRangedValue(number))
      return printErrorAndFalse(Errors.BasicEachNumber.NOT_RANGED_INPUT);

    return true;
  });

  return isValid;
};

export default BasicNumbersInput;
