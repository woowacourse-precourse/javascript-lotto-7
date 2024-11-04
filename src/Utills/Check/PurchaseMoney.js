import Formatter from '../Formatter.js';
import { makeError, ERROR_MESSAGE } from '../../View/Error.js';
import { emptyString } from './emptyStr.js';
import { UNIT } from '../../Constants/LottoConstants.js';

function isPostiveAmount(money) {
  return money > 0;
}
function isDevideWithUnit(money) {
  return money % UNIT === 0;
}

function removeBlank(input) {
  return input.trim().split(' ').join('');
}

// test 위해 export
export function formatInputToNumber(input) {
  if (Formatter.isLocaleFormattedNumber(input)) {
    return Formatter.formatLocaleStringToNumber(input);
  }

  if (!Number.isNaN(Number(input))) {
    return Number(input);
  }
  makeError(ERROR_MESSAGE.PURCHASE_MONEY_ERROR_TYPE);
}

export function makeInputToPurchaseMoneyNumber(lottoPurchaseMoneyStr) {
  console.log(lottoPurchaseMoneyStr);
  if (emptyString(lottoPurchaseMoneyStr)) {
    makeError(ERROR_MESSAGE.NEED_INPUT);
  }

  const input = removeBlank(lottoPurchaseMoneyStr);
  const purchaseMoneyNumber = formatInputToNumber(input);

  if (!isPostiveAmount(purchaseMoneyNumber)) {
    makeError(ERROR_MESSAGE.PURCHASE_MONEY_ERROR_MINIMUN);
  }

  if (!isDevideWithUnit(purchaseMoneyNumber)) {
    makeError(ERROR_MESSAGE.PURCHASE_MONEY_ERROR_DEVIDE);
  }

  return purchaseMoneyNumber;
}
