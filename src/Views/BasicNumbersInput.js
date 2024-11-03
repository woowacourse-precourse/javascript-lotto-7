import { Console } from '@woowacourse/mission-utils';
import throwError from '../Utils/throwError.js';
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
      throwError(Errors.BasicNumbers.NO_INPUT);

    const basicNumbers = basicNumbersInput.split(',');
    if (Rules.isWrongLength(basicNumbers, 6))
      throwError(Errors.BasicNumbers.IS_WRONG_LENGTH);
    if (Rules.isDuplicatedValue(basicNumbers))
      throwError(Errors.BasicNumbers.IS_DUPLICATED_VALUE_IN);

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
      throwError(Errors.BasicEachNumber.NOT_NUMBER_INPUT);
    if (Rules.isNoValueString(numberString))
      throwError(Errors.BasicEachNumber.NO_INPUT);

    const number = Number(numberString);
    if (Rules.isNotRangedValue(number))
      throwError(Errors.BasicEachNumber.NOT_RANGED_INPUT);

    return true;
  });

  return isValid;
};

export default BasicNumbersInput;
