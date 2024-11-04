import { LOTTO_RULES } from '../constant/index.js';
import throwError from '../util/throw-error.js';
import runValidators from './run-validator.js';

export const ERROR_MESSAGES = {
  EMPTY_INPUT: '보너스 번호를 입력해주세요.',
  INVALID_NUMBER: '유효한 숫자를 입력해주세요.',
  INVALID_RANGE: `보너스 번호는 ${LOTTO_RULES.MIN_NUMBER}부터 ${LOTTO_RULES.MAX_NUMBER} 사이여야 합니다.`,
  DUPLICATE_NUMBER: '보너스 번호는 당첨 번호와 중복될 수 없습니다.',
};

const checkEmptyInput = (bonusNumber) => {
  if (bonusNumber === null) throwError(ERROR_MESSAGES.EMPTY_INPUT);
  return bonusNumber;
};

const checkValidNumber = (bonusNumber) => {
  if (Number.isNaN(bonusNumber)) throwError(ERROR_MESSAGES.INVALID_NUMBER);
  return bonusNumber;
};

const checkRange = (bonusNumber) => {
  if (bonusNumber < LOTTO_RULES.MIN_NUMBER || bonusNumber > LOTTO_RULES.MAX_NUMBER) {
    throwError(ERROR_MESSAGES.INVALID_RANGE);
  }
  return bonusNumber;
};

const checkUniqueBonus = (bonusNumber, winningNumbers) => {
  if (winningNumbers.includes(bonusNumber)) {
    throwError(ERROR_MESSAGES.DUPLICATE_NUMBER);
  }
  return bonusNumber;
};

const validateBonusNumber = (bonusNumber, winningNumbers) => {
  runValidators([checkEmptyInput, checkValidNumber, checkRange, (number) => checkUniqueBonus(number, winningNumbers)], bonusNumber);
};

export default validateBonusNumber;
