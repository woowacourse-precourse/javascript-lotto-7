import { MAX_NUMBER, MIN_NUMBER, PRICE } from "./lottoRules.js";

const ERROR_MESSAGE = Object.freeze({
  INPUT_IS_NOT_NUMBER: '[ERROR] 숫자를 입력해주세요.',
  INPUT_IS_BLANK: '[ERROR] 공백은 입력할 수 없습니다.',
  INPUT_IS_DECIMAL: '[ERROR] 소수는 입력할 수 없습니다.',

  NUMBERS_ARE_NOT_SIX: '[ERROR] 로또 번호는 6개여야 합니다.',
  NUMBERS_ARE_REPEATED: '[ERROR] 로또 번호는 중복 입력할 수 없습니다.',
  NUMBER_IS_NOT_IN_RANGE: `[ERROR] 로또 범위는 ${MIN_NUMBER}에서 ${MAX_NUMBER} 사이의 숫자여야 합니다.`,

  PAYMENT_IS_UNDER_PRICE: `[ERROR] ${PRICE}원 이상의 금액을 입력해주세요.`,
  PAYMENT_IS_NOT_PRICE_PER_UNIT: `[ERROR] 구매 금액은 ${PRICE}원 단위로 입력해주세요.`
});

export default ERROR_MESSAGE;
