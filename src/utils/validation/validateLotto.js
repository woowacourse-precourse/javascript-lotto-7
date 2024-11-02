import ERROR_MESSAGE from '../../constants/ErrorMessage.js';
import { getValidValue } from '../StringUtils.js';
import RULES from '../../constants/Rules.js';

function validateLottoNumberLength(numbers) {
  if (numbers.length !== 6) {
    throw new Error(ERROR_MESSAGE.INVALID_LOTTO_NUMBER_LENGTH);
  }
}

function validateLottoNumbersUnique(numbers) {
  const lottoNumberSet = new Set(numbers);
  if (lottoNumberSet.size !== 6) {
    throw new Error(ERROR_MESSAGE.INVALID_LOTTO_NUMBER);
  }
}

function validateLottoNumberRange(numbers) {
  const isInvalid = numbers.some((number) => number < 1 || number > 45);
  if (isInvalid) {
    throw new Error(ERROR_MESSAGE.INVALID_LOTTO_NUMBER_RANGE);
  }
}

function validateLottoNumbers(numbers) {
  const isInvalid = numbers.some(
    (number) => typeof number !== 'number' || Number.isNaN(number),
  );
  if (isInvalid) {
    throw new Error(ERROR_MESSAGE.INVALID_NOT_NUMBER);
  }
}

export default function validateLotto(numbers) {
  if (typeof numbers === 'string' && numbers.trim().length === 0) {
    throw new Error(ERROR_MESSAGE.INVALID_NOT_NUMBER);
  }

  const lottoNumbers = getValidValue(numbers, RULES.DELIMITER)
    .filter((number) => !!number)
    .map(Number);

  validateLottoNumberLength(lottoNumbers);
  validateLottoNumbers(lottoNumbers);
  validateLottoNumberRange(lottoNumbers);
  validateLottoNumbersUnique(lottoNumbers);
}
