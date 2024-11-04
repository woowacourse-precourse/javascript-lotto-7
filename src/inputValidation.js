import { ERROR_MESSAGE, LOTTERY } from './constant';

const notNumberRegex = /\D/;
const invalidWinningNumbersRegex = /[^\d,]/;

function validateOnlyDigit(string) {
  if (notNumberRegex.test(string)) throw new Error(ERROR_MESSAGE.NOT_A_NUMBER);
}

function validatePositiveInteger(number) {
  if (number <= 0 || number % 1 !== 0) throw new Error(ERROR_MESSAGE.NOT_POSITIVE_INTEGER);
}

function validateEmptyString(string) {
  if (!string) throw new Error(ERROR_MESSAGE.EMPTY_STRING);
}

function validateLotteryNumberRange(number) {
  if (number > LOTTERY.MAX_NUMBER || number < LOTTERY.MIN_NUMBER) {
    throw new Error(ERROR_MESSAGE.NOT_ALLOWED_LOTTERY_NUMBER_RANGE);
  }
}

function validateUserMoney(userMoneyString) {
  validateEmptyString(userMoneyString);
  validateOnlyDigit(userMoneyString);
  const userMoney = Number(userMoneyString);
  if (userMoney % LOTTERY.PRICE !== 0) throw new Error(ERROR_MESSAGE.CAN_NOT_DIVIDE_BY_PRICE);
  validatePositiveInteger(userMoney);
}

function validateWinningNumbers(winningNumberString) {
  validateEmptyString(winningNumberString);
  if (invalidWinningNumbersRegex.test(winningNumberString)) {
    throw new Error(ERROR_MESSAGE.NOT_ALLOWED_WINNING_NUMBER);
  }
  const winningNumbers = new Set(winningNumberString
    .split(LOTTERY.WINNING_NUMBER_SPLITTER)
    .map((number) => Number(number)));
  if (winningNumbers.size !== LOTTERY.WINNING_NUMBER_SIZE) {
    throw new Error(ERROR_MESSAGE.INVALID_WINNING_NUMBER_SIZE);
  }
  winningNumbers.forEach((winningNumber) => {
    validateLotteryNumberRange(winningNumber);
  });
}

function validateBonusNumber(winningNumbers, bonusNumberString) {
  validateEmptyString(bonusNumberString);
  validateOnlyDigit(bonusNumberString);
  const bonusNumber = Number(bonusNumberString);
  validatePositiveInteger(bonusNumber);
  validateLotteryNumberRange(bonusNumber);
  if (winningNumbers.includes(bonusNumber)) {
    throw new Error(ERROR_MESSAGE.DUPLICATED_BONUS_NUMBER);
  }
}

export { validateUserMoney, validateWinningNumbers, validateBonusNumber };
