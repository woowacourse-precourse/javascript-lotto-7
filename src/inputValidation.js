import { ERROR_MESSAGE, LOTTERY } from './constant';

function validateEmptyString(string) {
  if (!string) throw new Error(ERROR_MESSAGE.EMPTY_STRING);
}

function validateLotteryNumberRange(number) {
  if (number > LOTTERY.MAX_NUMBER || number < LOTTERY.MIN_NUMBER) {
    throw new Error(ERROR_MESSAGE.NOT_ALLOWED_LOTTERY_NUMBER_RANGE);
  }
}

function isNumberString(string) {
  const notNumberRegex = /\D/;
  return !notNumberRegex.test(string);
}

function validateUserMoney(userMoneyString) {
  validateEmptyString(userMoneyString);
  if (!isNumberString(userMoneyString)) throw new Error(ERROR_MESSAGE.NOT_A_NUMBER);
  const userMoney = Number(userMoneyString);
  if (userMoney % LOTTERY.PRICE !== 0) throw new Error(ERROR_MESSAGE.CAN_NOT_DIVIDE_BY_PRICE);
  if (userMoney <= 0) throw new Error(ERROR_MESSAGE.NOT_POSITIVE_INTEGER);
}

function validateWinningNumbers(winningNumberString) {
  validateEmptyString(winningNumberString);
  const notAllowedCharacterRegex = /[^\d,]/;
  if (notAllowedCharacterRegex.test(winningNumberString)) {
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
  if (!isNumberString(bonusNumberString)) throw new Error(ERROR_MESSAGE.NOT_A_NUMBER);
  const bonusNumber = Number(bonusNumberString);
  if (bonusNumber % 1 !== 0 || bonusNumber <= 0) {
    throw new Error(ERROR_MESSAGE.NOT_POSITIVE_INTEGER);
  }
  validateLotteryNumberRange(bonusNumber);
  if (winningNumbers.includes(bonusNumber)) {
    throw new Error(ERROR_MESSAGE.DUPLICATED_BONUS_NUMBER);
  }
}

export { validateUserMoney, validateWinningNumbers, validateBonusNumber };
