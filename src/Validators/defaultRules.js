const DEFAULT_RULES = Object.freeze({
  notEmpty: Object.freeze({
    isValid: (input) => input,
    errorMessage: '빈 값이 입력되었습니다.',
  }),
});

export default DEFAULT_RULES;
