const PURCHASE_AMOUNT_RULES = Object.freeze({
  notNumber: Object.freeze({
    isValid: (input) => !isNaN(input),
    errorMessage: '구입금액은 숫자만 입력가능합니다.',
  }),
  notInteger: Object.freeze({
    isValid: (input) => Number.isInteger(input),
    errorMessage: '구입 금액은 정수만 가능합니다.',
  }),
  lessNumber: Object.freeze({
    isValid: (input) => input >= 1000,
    errorMessage: '구입금액은 1000원보다 큰 금액만 입력 가능합니다.',
  }),
  disableThousand: Object.freeze({
    isValid: (input) => input % 1000 === 0,
    errorMessage: '구입금액은 1000단위로 입력 가능합니다.',
  }),
});

export default PURCHASE_AMOUNT_RULES;
