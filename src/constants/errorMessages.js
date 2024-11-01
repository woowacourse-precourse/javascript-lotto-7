const ERROR_MESSAGES = {
  PREFIX: '[ERROR]',

  PURCHASE_AMOUNT_NOT_NUMBER: '구입 금액은 숫자여야 합니다.',
  PURCHASE_AMOUNT_MIN: (min) => `구입 금액은 ${min}원 이상이어야 합니다.`,
  PURCHASE_AMOUNT_MAX: (max) => `구입 금액은 ${max}원을 넘을 수 없습니다.`,
  PURCHASE_AMOUNT_UNIT: (unit) => `구입 금액은 ${unit}원 단위여야 합니다.`,
  INVALID_NUMBER_COUNT: (context, length) => `${context}는 ${length}개여야 합니다.`,
  INVALID_DUPLICATE__NUMBER: (context) => `${context}는 중복되지 않아야 합니다.`,
  INVALID_NUMBER_TYPE: (context) => `${context}는 정수만 입력할 수 있습니다.`,
  INVALID_NUMBER_RANGE: (context, min, max) =>
    `${context}는 ${min}부터 ${max} 사이의 숫자여야 합니다.`,
  INVALID_BONUS_DUPLICATE: '보너스 번호는 당첨 번호와 중복될 수 없습니다.',
};

export default ERROR_MESSAGES;
