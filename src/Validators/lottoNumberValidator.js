const LOTTO_NUMBER_RULES = Object.freeze({
  empty: Object.freeze({
    isValid: (input) => input.trim() !== '',
    errorMessage: '로또 번호에 공백이 입력되었습니다.',
  }),
  notNumber: Object.freeze({
    isValid: (input) => !isNaN(input),
    errorMessage: '로또 번호는 숫자만 입력 가능합니다.',
  }),
  notInteger: Object.freeze({
    isValid: (input) => Number.isInteger(parseFloat(input, 10)),
    errorMessage: '로또 번호는 양의 정수만 입력 가능합니다.',
  }),
  validRange: Object.freeze({
    isValid: (input) => parseInt(input, 10) > 0 && parseInt(input, 10) <= 45,
    errorMessage: '로또 번호는 1~45 사이의 번호만 가능합니다.',
  }),
});

export default LOTTO_NUMBER_RULES;
