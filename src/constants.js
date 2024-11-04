export const CONDITIONS = {
  PAYMENT_UNIT: 1000,
  PAYMENT_LIMIT: 100000,
  WINNING_NUMBERS_REGEX: /^[0-9]+(,[0-9]+)*$/,
  MAX_NUMBER: 45,
  MIN_NUMBER: 1,
  LOTTO_NUMBER_COUNT: 6,
  REWARD_MATCH_3: 5000,
  REWARD_MATCH_4: 50000,
  REWARD_MATCH_5: 1500000,
  REWARD_MATCH_5_BONUS: 30000000,
  REWARD_MATCH_6: 2000000000,
};

export const PRINT_MESSAGE = {
  INPUT_PAYMENT: '구입금액을 입력해 주세요.\n',
  BUY_COUNT: '개를 구매했습니다.',
  INPUT_WINNING_NUMBERS: '\n당첨 번호를 입력해 주세요.\n',
  INPUT_BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n',
  OUTPUT_WINNING_RESULT: '\n당첨 통계\n---',
  MATCH_3: `3개 일치 (${CONDITIONS.REWARD_MATCH_3.toLocaleString()}원)`,
  MATCH_4: `4개 일치 (${CONDITIONS.REWARD_MATCH_4.toLocaleString()}원)`,
  MATCH_5: `5개 일치 (${CONDITIONS.REWARD_MATCH_5.toLocaleString()}원)`,
  MATCH_5_BONUS: `5개 일치, 보너스 볼 일치 (${CONDITIONS.REWARD_MATCH_5_BONUS.toLocaleString()}원)`,
  MATCH_6: `6개 일치 (${CONDITIONS.REWARD_MATCH_6.toLocaleString()}원)`,
  RATE_OF_RETURN: (rate) => `총 수익률은 ${rate}%입니다.`,
};

export const ERROR_MESSAGE = {
  INPUT_EMPTY: '[ERROR] 값을 입력해주세요.',
  NOT_NUMBER: '[ERROR] 숫자만 입력가능합니다.',
  NOT_POSITIVE_INTEGER: '[ERROR] 양의 정수만 입력가능합니다.',
  INVALID_UNIT: `[ERROR] 로또 구입 금액 단위는 ${CONDITIONS.PAYMENT_UNIT}원 단위만 가능합니다.`,
  OVER_MAXIMUM: `[ERROR] ${CONDITIONS.PAYMENT_LIMIT}원까지 구매할 수 있습니다.`,
  NUMBERS_COUNT: `[ERROR] 로또 번호는 ${CONDITIONS.LOTTO_NUMBER_COUNT}개여야 합니다.`,
  SAME_NUMBER: '[ERROR] 로또 번호는 서로 다른 번호여야 합니다.',
  INVALID_WINNING_NUMBERS: '[ERROR] 숫자와 쉼표(,)를 이용하여 당첨번호를 입력해주세요.',
  OUT_OF_RANGE: `[ERROR] ${CONDITIONS.MIN_NUMBER}~${CONDITIONS.MAX_NUMBER} 사이의 숫자를 입력해주세요.`,
};
