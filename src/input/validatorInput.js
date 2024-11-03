import ERROR_MESSAGE from '../constants/errorMessage.js';

export function checkLottoPurchaseAmount(input) {
  input = Number(input);
  if(Number.isNaN(input)) {
    throw new Error(ERROR_MESSAGE.PURCHASE_AMOUNT_NAN);
  }
  if(input < 0){
    throw new Error(ERROR_MESSAGE.PURCHASE_AMOUNT_NEGATIVE);
  }
  if(input === 0){
    throw new Error(ERROR_MESSAGE.PURCHASE_AMOUNT_EMPTY);
  }
  if(input < 1000) {
    throw new Error(ERROR_MESSAGE.PURCHASE_AMOUNT_TOO_SMALL);
  }
  if(!Number.isInteger(input)) {
    throw new Error(ERROR_MESSAGE.PURCHASE_AMOUNT_NOT_INTEGER);
  }
  if(input > Number.MAX_SAFE_INTEGER) {
    throw new Error(ERROR_MESSAGE.PURCHASE_AMOUNT_TOO_LARGE);
  }
  if(input % 1000 !== 0){
    throw new Error(ERROR_MESSAGE.PURCHASE_AMOUNT_NOT_DIVIDE_1000);
  }
}

export function checkLotteryWinningNumber  (input) {




}