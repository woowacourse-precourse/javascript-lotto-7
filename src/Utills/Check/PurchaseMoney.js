import Formatter from '../Formatter.js';
import { makeError, ERROR_MESSAGE } from '../../View/Error.js';
import { emptyString } from './emptyStr.js';

// 천단위로 떨어진다.
function isValidPurchaseMoney(money) {
  return money !== 0 && money % 1000 === 0;
}

function removeBlank(input) {
  return input.trim().split(' ').join('');
}

function formatInputToNumber(input) {
  if (Formatter.isLocaleFormattedNumber(input)) {
    return Formatter.formatLocaleStringToNumber(input);
  }
  if (!Number.isNaN(Number(input))) {
    return Number(input);
  }
  makeError(ERROR_MESSAGE.PURCHASE_MONEY_ERROR_TYPE);
}

export function makeInputToPurchaseMoneyNumber(lottoPurchaseMoneyStr) {
  if (emptyString(lottoPurchaseMoneyStr)) makeError(ERROR_MESSAGE.NEED_INPUT);
  const input = removeBlank(lottoPurchaseMoneyStr);
  const purchaseMoneyNumber = formatInputToNumber(input);

  if (!isValidPurchaseMoney(purchaseMoneyNumber)) {
    makeError(ERROR_MESSAGE.PURCHASE_MONEY_ERROR_DEVIDE);
  }

  return purchaseMoneyNumber;
}

// function isNumber(input) {
//   const ONLY_NUMBER_REGEX = /\d+/;
//   return ONLY_NUMBER_REGEX.test(input);
// }
