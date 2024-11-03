import LOTTO_CONFIG from './lottoConfig.js';

const ERROR_MESSAGE = Object.freeze({
  PURCHASE_AMOUNT_EMPTY: '[ERROR] 구매 금액을 입력해주세요.',
  PURCHASE_AMOUNT_NAN: '[ERROR] 로또는 숫자로 살 수 있습니다. (예시: 100000)',
  PURCHASE_AMOUNT_NOT_DIVIDE_1000: '[ERROR] 로또는 1000원 단위로 구매할 수 있습니다.',
  PURCHASE_AMOUNT_NOT_INTEGER: '[ERROR] 로또는 정수값으로 입력할 수 있습니다.',
  PURCHASE_AMOUNT_TOO_LARGE: '[ERROR] 구매 금액이 너무 큽니다.',
  PURCHASE_AMOUNT_TOO_SMALL: `[ERROR] 구매 금액은 최소 ${LOTTO_CONFIG.TICKET_PRICE}원 이어야 합니다.`,
  PURCHASE_AMOUNT_NEGATIVE: '[ERROR] 로또 구입 금액은 음수일 수 없습니다.',

  LOTTERY_BONUS_NUMBER_IMPOSSIBLE: `[ERROR] 보너스 번호는 ${LOTTO_CONFIG.MIN_NUMBER}~${LOTTO_CONFIG.MAX_NUMBER} 사이의 양의 정수이어야 합니다.`,
  LOTTERY_BONUS_NUMBER_DUPLICATE: '[ERROR] 당첨 번호에 사용된 수를 보너스 번호로 사용할 수 없습니다.',

  LOTTO_NUMBER_OVER_COUNT: `[ERROR] 로또 번호는 ${LOTTO_CONFIG.NUMBER_COUNT}개여야 합니다.`,
  LOTTO_NUMBER_DUPLICATE: '[ERROR] 로또 번호에 중복은 불가능합니다.',
  LOTTO_NUMBER_TOO_SMALL: `[ERROR] ${LOTTO_CONFIG.MIN_NUMBER}보다 작은 수는 로또 번호로 사용될 수 없습니다.`,
  LOTTO_NUMBER_TOO_LARGE: `[ERROR] ${LOTTO_CONFIG.MAX_NUMBER}보다 큰 수는 로또 번호로 사용될 수 없습니다.`,
  LOTTO_NUMBER_NOT_INTEGER: '[ERROR] 로또 번호는 정수 형태이어야 합니다.',
  LOTTO_NUMBER_IMPOSSIBLE: '[ERROR] 로또 번호는 숫자형태 이어야합니다.'

});

export default ERROR_MESSAGE;
