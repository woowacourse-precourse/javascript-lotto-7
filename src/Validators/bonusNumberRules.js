const BONUS_NUMBER_RULES = Object.freeze({
  notNumber: Object.freeze({
    isValid: ({ bonusNumber }) => !isNaN(bonusNumber),
    errorMessage: '보너스 번호는 숫자만 입력 가능합니다.',
  }),
  notInteger: Object.freeze({
    isValid: ({ bonusNumber }) => Number.isInteger(bonusNumber),
    errorMessage: '보너스 번호는 정수만 입력 가능합니다.',
  }),
  validRange: Object.freeze({
    isValid: ({ bonusNumber }) => bonusNumber > 0 && bonusNumber <= 45,
    errorMessage: '보너스 번호는 1~45 사이의 번호만 가능합니다.',
  }),
  duplicate: Object.freeze({
    isValid: ({ bonusNumber, lottoNumbers }) => {
      const allNumbers = [...lottoNumbers, bonusNumber];
      const set = new Set(allNumbers);
      return allNumbers.length === set.size;
    },
    errorMessage: '보너스 번호와 중복된 보너스 번호가 입력되었습니다.',
  }),
});

export default BONUS_NUMBER_RULES;
