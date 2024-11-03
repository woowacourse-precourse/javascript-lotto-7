import { LOTTO_PRICE } from '../constant/index.js';
import throwError from '../util/throw-error.js';
import runValidators from './run-validator.js';

export const ERROR_MESSAGES = {
  EMPTY_INPUT: '구입 금액을 입력해주세요.',
  INVALID_NUMBER: '유효한 숫자를 입력해주세요.',
  UNDER_LOTTO_PRICE: `${LOTTO_PRICE}원보다 큰 수를 입력해주세요`,
  INVALID_PURCHASE_AMOUNT: `구입 금액은 ${LOTTO_PRICE}원 단위여야 합니다.`,
};

const checkEmptyInput = (purchaseAmountInput) => {
  if (purchaseAmountInput === null) throwError(ERROR_MESSAGES.EMPTY_INPUT);
  return purchaseAmountInput;
};

const checkValidNumber = (purchaseAmountInput) => {
  if (Number.isNaN(purchaseAmountInput)) throwError(ERROR_MESSAGES.INVALID_NUMBER);
  return purchaseAmountInput;
};

const checkUnderLottoPrice = (purchaseAmountInput) => {
  if (purchaseAmountInput <= LOTTO_PRICE) throwError(ERROR_MESSAGES.UNDER_LOTTO_PRICE);
  return purchaseAmountInput;
};

const checkValidPurchaseAmount = (purchaseAmountInput) => {
  if (purchaseAmountInput % LOTTO_PRICE !== 0) throwError(ERROR_MESSAGES.INVALID_PURCHASE_AMOUNT);
  return purchaseAmountInput;
};

const validatePurchaseAmount = (purchaseAmountInput) => {
  runValidators([checkEmptyInput, checkValidNumber, checkUnderLottoPrice, checkValidPurchaseAmount], purchaseAmountInput);
};

export default validatePurchaseAmount;
