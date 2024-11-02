import { Console } from '@woowacourse/mission-utils';
import { printErrorAndFalse } from '../Utils/handleError.js';
import Rules from '../Utils/Rules.js';
import PrintMessages from '../Constants/PrintMessages.js';
import ErrorMessages from '../Constants/ErrorMessages.js';

const BasicNumbersInput = {
  get: async () => {
    const userInput = await Console.readLineAsync(
      PrintMessages.BASIC_NUMBERS_INPUT
    );
    return userInput;
  },

  validate: (basicNumbersInput) => {
    if (Rules.isNoValueString(basicNumbersInput)) {
      return printErrorAndFalse(ErrorMessages.BasicNumbers.NO_INPUT);
    }

    const basicNumbers = basicNumbersInput.split(',');

    if (basicNumbers.length !== 6) {
      return printErrorAndFalse(ErrorMessages.BasicNumbers.IS_WRONG_LENGTH);
    }

    if (Rules.isDuplicatedValue(basicNumbers)) {
      return printErrorAndFalse(
        ErrorMessages.BasicNumbers.IS_DUPLICATED_VALUE_IN
      );
    }

    return validateEachNumber(basicNumbers);
  },

  parse: (basicNumbersInput) => {
    return basicNumbersInput
      .split(',')
      .map((numberString) => Number(numberString));
  },
};

const validateEachNumber = (basicNumbers) => {
  const isValid = basicNumbers.every((numberString) => {
    if (isNaN(numberString)) {
      return printErrorAndFalse(ErrorMessages.BasicEachNumber.NOT_NUMBER_INPUT);
    }

    if (Rules.isNoValueString(numberString)) {
      return printErrorAndFalse(ErrorMessages.BasicEachNumber.NO_INPUT);
    }

    const number = Number(numberString);
    if (Rules.isNotRangedValue(number)) {
      return printErrorAndFalse(ErrorMessages.BasicEachNumber.NOT_RANGED_INPUT);
    }

    return true;
  });

  return isValid;
};

export default BasicNumbersInput;
