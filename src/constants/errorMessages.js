export const ERROR_MESSAGE = Object.freeze({
  NOT_A_NUMBER: '[ERROR] 숫자만 입력할 수 있습니다.',
  OUT_OF_RANGE_PRICE: (price) =>
    `[ERROR] 구입금액이 너무 적습니다. ${price}원 이상으로 입력해주세요.`,
  NOT_ENOUGH_NUMBERS: (length) => `[ERROR] 로또 번호는 ${length}개여야 합니다.`,
  INPUT_DUPLICATION: '[ERROR] 중복된 번호가 입력되었습니다.',
  OUT_OF_RANGE_NUMBER: (min, max) => `[ERROR] ${min}~${max} 사이의 번호만 입력할 수 있습니다.`,
  INVALID_PURCHASE_AMOUNT: (price) => `[ERROR] 구입 금액은 ${price}원 단위로 입력해 주세요.`,
  DUPLICATE_BONUS_NUMBER: '[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.',
  NO_BLANK: '[ERROR] 중간에 숫자가 비어있습니다. 숫자를 모두 입력해주세요.',
});
