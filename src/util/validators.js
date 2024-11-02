import { CONFIG } from '../constants/constants.js';
import { ERROR_MESSAGES } from '../constants/messages.js';

const isValidPurchaseUnit = (amount, unit) => amount % unit === 0;
const isPositiveNumber = (value) => !Number.isNaN(value) && value > 0;

const isValidLength = (numbers, count) => numbers.length === count;

const isValidRange = (numbers, min, max) =>
  numbers.every((num) => num >= min && num <= max);
const isUniqueNumbers = (numbers) => new Set(numbers).size === numbers.length;

const isUniqueBonusNumber = (bonusNumber, winningNumbers) =>
  !winningNumbers.includes(bonusNumber);
const isValidBonusNumberRange = (bonusNumber, min, max) =>
  bonusNumber >= min && bonusNumber <= max;

export const validatePurchaseAmount = (amount) => {
  if (!isPositiveNumber(amount)) {
    throw new Error(ERROR_MESSAGES.INVALID_NUMBER);
  }
  if (!isValidPurchaseUnit(amount, CONFIG.PURCHASE_AMOUNT_UNIT)) {
    throw new Error(ERROR_MESSAGES.INVALID_UNIT);
  }
};

export const validateLottoNumbers = (numbers) => {
  if (!isValidLength(numbers, CONFIG.LOTTO_COUNT)) {
    throw new Error(ERROR_MESSAGES.INVALID_COUNT);
  }
  if (
    !isValidRange(numbers, CONFIG.LOTTO_MIN_NUMBER, CONFIG.LOTTO_MAX_NUMBER)
  ) {
    throw new Error(ERROR_MESSAGES.INVALID_WINNING_NUMBER);
  }
  if (!isUniqueNumbers(numbers)) {
    throw new Error(ERROR_MESSAGES.DUPLICATED_WINNING_NUMBER);
  }
};

export const validateBonusNumber = (bonusNumber, winningNumbers) => {
  if (!isValidLength(bonusNumber.split(','), CONFIG.BONUS_NUMBER_COUNT)) {
    throw new Error(ERROR_MESSAGES.INVALID_BONUS_NUMBER_COUNT);
  }
  if (!isPositiveNumber(bonusNumber)) {
    throw new Error(ERROR_MESSAGES.INVALID_NUMBER);
  }
  if (
    !isValidBonusNumberRange(
      bonusNumber,
      CONFIG.LOTTO_MIN_NUMBER,
      CONFIG.LOTTO_MAX_NUMBER
    )
  ) {
    throw new Error(ERROR_MESSAGES.INVALID_BONUS_NUMBER);
  }
  if (!isUniqueBonusNumber(Number(bonusNumber), winningNumbers)) {
    throw new Error(ERROR_MESSAGES.DUPLICATED_BONUS_NUMBER);
  }
};
