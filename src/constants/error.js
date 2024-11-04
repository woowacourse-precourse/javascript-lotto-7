export const INPUT_ERROR = Object.freeze({
  inputBlankError: '[ERROR] 입력값이 비어 있습니다.',
  inputTypeError: '[ERROR] 입력값은 숫자여야합니다.',
});

export const PRICE_ERROR = Object.freeze({
  priceUnitError: '[ERROR] 구입 금액은 1,000원 단위여야 합니다.',
});

export const LOTTO_ERROR = Object.freeze({
  lottoRangeError: '[ERROR] 1 ~ 45 사이의 숫자로 입력하세요.',
  lottoDuplicateError: '[ERROR] 당첨 번호는 중복되지 않아야 합니다.',
  lottoLengthError: '[ERROR] 당첨 번호는 6개여야 합니다.',
  lottoDelimiterError:
    '[ERROR] 숫자를 쉼표(,) 구분자로 나누어 입력해야 합니다.',
  bonusDuplicateError:
    '[ERROR] 보너스 번호는 당첨 번호와 중복되지 않아야 합니다',
});
