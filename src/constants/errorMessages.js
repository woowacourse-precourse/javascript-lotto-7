export const INPUT_ERROR_MESSAGES = Object.freeze({
  notNumber: '숫자만 입력해 주세요.',
  notThousandUnits: '천 단위의 숫자만 입력해 주세요.',
});

export const LOTTO_ERROR_MESSAGES = Object.freeze({
  notSixNumbers: '로또 번호는 6개여야 합니다.',
  notDubplicated: '로또 번호는 중복되지 않아야 합니다.',
  notInteger: '로또 번호는 숫자여야 합니다.',
  outOfRange: '로또 번호는 1~45 사이의 숫자여야 합니다.',
});

export const PRIZE_ERROR_MESSAGES = Object.freeze({
  exceedMaxMatchCount: '일치하는 번호 개수는 6개를 초과할 수 없습니다.',
  nagativeMatchCount: '일치하는 번호 개수는 음수일 수 없습니다.',
});
