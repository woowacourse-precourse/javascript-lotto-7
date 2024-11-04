import { INPUT_ERROR_MESSAGES } from '../constants/index.js';
import { throwError } from '../utils/validateUtils.js';
import { CONFIG } from '../constants/index.js';

const rules = {
  isNotNumber: (input) => !Number.isInteger(Number(input)),
  isNotThousandUnits: (input) => Number(input.slice(-3)) !== 0,
  isOverMaxLength: (input) => input.length > CONFIG.maxIntegerLength,

  isNotSixNumbers: (numbers) => numbers.length !== CONFIG.countOfLottoBalls,
  hasInvalidFormat: (input) => !input.match(CONFIG.invalidFormat),
  hasDuplicates: (numbers) => new Set(numbers).size !== numbers.length,
  hasNumberOutOfRange: (numbers) => numbers.some((num) => num < CONFIG.minBallNumber || num > CONFIG.maxBallNumber),

  isDuplicateWithMain: (mainNumbers, bonusNumber) => mainNumbers.includes(Number(bonusNumber)),
  isOutOfRange: (number) => Number(number) < CONFIG.minBallNumber || Number(number) > CONFIG.maxBallNumber,
};

export const validateMoneyString = (input) => {
  if (rules.isNotNumber(input)) throwError(INPUT_ERROR_MESSAGES.notNumber);
  if (rules.isNotThousandUnits(input)) throwError(INPUT_ERROR_MESSAGES.notThousandUnits);
  if (rules.isOverMaxLength(input)) throwError(INPUT_ERROR_MESSAGES.moneyOverflow);
};

export const validateMainNumbers = (input) => {
  if (rules.hasInvalidFormat(input)) throwError(INPUT_ERROR_MESSAGES.invalidFormat);

  const numbers = input.split(CONFIG.numbersInputDelimiter).map(Number);

  if (rules.isNotSixNumbers(numbers)) throwError(INPUT_ERROR_MESSAGES.notSixNumbers);
  if (rules.hasDuplicates(numbers)) throwError(INPUT_ERROR_MESSAGES.hasDuplicates);
  if (rules.hasNumberOutOfRange(numbers)) throwError(INPUT_ERROR_MESSAGES.numberOutOfRange);
};

export const validateBonusNumber = (mainNumbers, bonusNumber) => {
  if (rules.isNotNumber(bonusNumber)) throwError(INPUT_ERROR_MESSAGES.notNumber);
  if (rules.isOutOfRange(bonusNumber)) throwError(INPUT_ERROR_MESSAGES.numberOutOfRange);
  if (rules.isDuplicateWithMain(mainNumbers, Number(bonusNumber))) throwError(INPUT_ERROR_MESSAGES.duplicateWithMain);
};
