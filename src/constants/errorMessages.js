export const INPUT_ERROR_MESSAGES = Object.freeze({
  notNumber: '숫자만 입력 가능합니다.',
  notThousandUnits: '1,000원 단위로 입력해야 합니다.',
  moneyOverflow: '금액이 너무 큽니다.',
  invalidFormat: '숫자는 쉼표(,)로 구분해야 합니다.',
  notSixNumbers: '6개의 숫자를 입력해야 합니다.',
  hasDuplicates: '중복된 숫자가 있습니다.',
  numberOutOfRange: '1부터 45 사이의 숫자만 입력 가능합니다.',
  duplicateWithMain: '보너스 번호는 당첨 번호와 중복될 수 없습니다.',
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
