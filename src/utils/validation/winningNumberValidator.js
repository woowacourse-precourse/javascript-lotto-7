import { DELIMETER, ErrorMessage, Lotto } from '../../resources/Constants.js';

function validateDelimeterSeperated(numbers) {
  const regex = new RegExp(`^\\d+(${DELIMETER}\\d+)*$`);

  const isDelimeterSeperated = regex.test(numbers);
  if (!isDelimeterSeperated) {
    throw new Error(ErrorMessage.INVALID_WINNING_NUMBER_DELIMETER);
  }
}

function validateWinningNumberLength(numbers) {
  const winningNumbers = numbers.split(DELIMETER);
  if (winningNumbers.length !== Lotto.COUNT) {
    throw new Error(ErrorMessage.INVALID_WINNING_NUMBER_LENGTH);
  }
}

function validateWinningNumberIsNumber(numbers) {
  const winningNumbers = numbers.split(DELIMETER);
  const isNumber = winningNumbers.every(
    (number) => !Number.isNaN(Number(number)),
  );

  if (!isNumber) {
    throw new Error(ErrorMessage.WINNING_NUMBER_IS_NOT_NUMBER);
  }
}

function validateWinningNumberIsUnique(numbers) {
  const winningNumbers = numbers.split(DELIMETER);
  const winningNumbersSet = new Set(winningNumbers);
  const isUnique = winningNumbersSet.size === winningNumbers.length;

  if (!isUnique) {
    throw new Error(ErrorMessage.WINNING_NUMBER_IS_NOT_UNIQUE);
  }
}

function validateWinningNumberInValidRange(numbers) {
  const winningNumbers = numbers.split(DELIMETER);
  const isInRange = winningNumbers.every(
    (number) => number >= Lotto.MIN_NUMBER && number <= Lotto.MAX_NUMBER,
  );

  if (!isInRange) {
    throw new Error(ErrorMessage.WINNING_NUMBER_IN_NOT_VALID_RANGE);
  }
}

export default function winningNumberValidator(numbers) {
  validateDelimeterSeperated(numbers);
  validateWinningNumberLength(numbers);
  validateWinningNumberIsNumber(numbers);
  validateWinningNumberIsUnique(numbers);
  validateWinningNumberInValidRange(numbers);
}
