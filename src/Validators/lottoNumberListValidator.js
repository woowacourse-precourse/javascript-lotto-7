const LOTTO_NUMBER_LIST_RULES = Object.freeze({
  validLength: Object.freeze({
    isValid: input => input.length === 6,
    errorMessage: '당첨번호는 ,로 구분하여 6자리를 입력하셔야 합니다.',
  }),
  duplicate: Object.freeze({
    isValid: input => {
      const setInput = new Set(input);
      return input.length === setInput.size;
    },
    errorMessage: '값이 서로 중복되지 않아야 함니다.',
  }),
});

export default LOTTO_NUMBER_LIST_RULES;
