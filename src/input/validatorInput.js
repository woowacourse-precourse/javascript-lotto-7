import ERROR_MESSAGE from '../constants/errorMessage.js';
import LOTTO_CONFIG from '../constants/lottoConfig.js';

export function checkLottoPurchasePrice(price) {
  if (Number.isNaN(price)) {
    throw new Error(ERROR_MESSAGE.PURCHASE_PRICE_NAN);
  }
  if (price < 0) {
    throw new Error(ERROR_MESSAGE.PURCHASE_PRICE_NEGATIVE);
  }
  if (price === 0) {
    throw new Error(ERROR_MESSAGE.PURCHASE_PRICE_EMPTY);
  }
  if (price < LOTTO_CONFIG.TICKET_PRICE) {
    throw new Error(ERROR_MESSAGE.PURCHASE_PRICE_TOO_SMALL);
  }
  if (!Number.isInteger(price)) {
    throw new Error(ERROR_MESSAGE.PURCHASE_PRICE_NOT_INTEGER);
  }
  if (price > Number.MAX_SAFE_INTEGER) {
    throw new Error(ERROR_MESSAGE.PURCHASE_PRICE_TOO_LARGE);
  }
  if (price % LOTTO_CONFIG.TICKET_PRICE !== 0) {
    throw new Error(ERROR_MESSAGE.PURCHASE_PRICE_NOT_DIVIDE_1000);
  }
}

export function checkLottoBonusNumber(lottoList, bonusNumber){
  lottoList.forEach(lotto=>{
      if(lotto.includes(bonusNumber)){
        throw new Error(ERROR_MESSAGE.LOTTERY_BONUS_NUMBER_DUPLICATE);
      }
  })
  if (Number.isNaN(bonusNumber)) {
    throw new Error(ERROR_MESSAGE.LOTTERY_BONUS_NUMBER_IMPOSSIBLE);
  }
  if (!Number.isInteger(bonusNumber)) {
    throw new Error(ERROR_MESSAGE.LOTTERY_BONUS_NUMBER_IMPOSSIBLE);
  }
  if(bonusNumber < LOTTO_CONFIG.MIN_NUMBER){
    throw new Error(ERROR_MESSAGE.LOTTERY_BONUS_NUMBER_IMPOSSIBLE);
  }
  if(bonusNumber > LOTTO_CONFIG.MAX_NUMBER){
    throw new Error(ERROR_MESSAGE.LOTTERY_BONUS_NUMBER_IMPOSSIBLE);
  }
}