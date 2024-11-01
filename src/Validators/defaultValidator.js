const DEFAULT_RULES = Object.freeze({
  empty: Object.freeze({
    isValid: input => input.trim() !== '',
    errorMessage: '입력값이 존재하지 않습니다.',
  }),
});

export default DEFAULT_RULES;
