const LOTTO_NUMBERS_RULES = Object.freeze({
  validLength: Object.freeze({
    isValid: (numbers) => numbers.length === 6,
    errorMessage: '로또번호는 ,로 구분하여 6자리를 입력하셔야 합니다.',
  }),
  notEmpty: Object.freeze({
    isValid: (numbers) =>
      !numbers.some((number) => !number && number.length === 0),
    errorMessage: '로또 번호에 공백이 입력되었습니다.',
  }),
  notNumber: Object.freeze({
    isValid: (numbers) => !numbers.some((number) => isNaN(number)),
    errorMessage: '로또 번호는 숫자만 입력 가능합니다.',
  }),
  notInteger: Object.freeze({
    isValid: (numbers) => numbers.every((number) => Number.isInteger(number)),
    errorMessage: '로또 번호는 정수만 입력 가능합니다.',
  }),
  validRange: Object.freeze({
    isValid: (numbers) => numbers.every((number) => number > 0 && number <= 45),
    errorMessage: '로또 번호는 1~45 사이의 번호만 가능합니다.',
  }),
  notDuplicate: Object.freeze({
    isValid: (input) => {
      const setInput = new Set(input);
      return input.length === setInput.size;
    },
    errorMessage: '값이 서로 중복되지 않아야 함니다.',
  }),
});

export default LOTTO_NUMBERS_RULES;
