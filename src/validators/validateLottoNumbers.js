import { LOTTO_ERROR_MESSAGES, LOTTO_SETTINGS } from '../constants/index.js';

function validateIsNumber(number) {
  if (typeof number !== 'number' || Number.isNaN(number)) {
    throw new Error('[ERROR] 로또 번호는 숫자여야 합니다.');
  }
}

function validateIsInteger(number) {
  if (!Number.isInteger(number)) {
    throw new Error(LOTTO_ERROR_MESSAGES.not_a_number);
  }
}

function validateLength(numbers) {
  if (numbers.length !== LOTTO_SETTINGS.REQUIRED_LENGTH) {
    throw new Error(LOTTO_ERROR_MESSAGES.not_in_integer);
  }
}

function validateNoDuplicates(numbers) {
  if (new Set(numbers).size !== LOTTO_SETTINGS.REQUIRED_LENGTH) {
    throw new Error(LOTTO_ERROR_MESSAGES.duplicate_numbers);
  }
}

function validateRange(number) {
  if (number < LOTTO_SETTINGS.MIN_NUMBER || number > LOTTO_SETTINGS.MAX_NUMBER) {
    throw new Error(LOTTO_ERROR_MESSAGES.out_of_range);
  }
}

function validateBonusNumberInWinningNumbers(bonusNumber, winningNumbers) {
  if (winningNumbers.includes(bonusNumber)) {
    throw new Error(LOTTO_ERROR_MESSAGES.bonus_duplicate);
  }
}

export function validateLottoNumbers(numbers) {
  numbers.forEach(number => {
    validateIsNumber(number);
    validateIsInteger(number);
    validateRange(number);
  });
  validateLength(numbers);
  validateNoDuplicates(numbers);
}

export function validateBonusNumber(bonusNumber, winningNumbers) {
  validateIsNumber(bonusNumber);
  validateIsInteger(bonusNumber);
  validateRange(bonusNumber);
  validateBonusNumberInWinningNumbers(bonusNumber, winningNumbers);
}
