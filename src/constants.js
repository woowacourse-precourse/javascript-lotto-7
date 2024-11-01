const SYSTEM_MESSAGES = Object.freeze({
  ENTER_BUDGET: '구입금액을 입력해 주세요.\n',
  BUY_AMOUNT: '개를 구매했습니다.',
  ENTER_WINNING_NUMBERS: '당첨 번호를 입력해 주세요.\n',
  ENTER_BONUS_NUMBER: '보너스 번호를 입력해 주세요.\n',
});

const RESULT_MESSAGES = Object.freeze({
  STATISTICS: '당첨 통계',
  DIVIDER: '---',
  PLACE_5TH: '3개 일치 (5,000원) -',
  PLACE_4TH: '4개 일치 (50,000원) -',
  PLACE_3RD: '5개 일치 (1,500,000원) -',
  PLACE_2ND: '5개 일치, 보너스 볼 일치 (30,000,000원) -',
  PLACE_1ST: '6개 일치 (2,000,000,000원) -',
  RETURNS: '총 수익률은',
});

const ERROR_PREFIX = Object.freeze('[ERROR]');

const ERROR_MESSAGES = Object.freeze({
  EMPTY_INPUT: `${ERROR_PREFIX} 빈 입력은 허용되지 않습니다.`,
  BLANK_INPUT: `${ERROR_PREFIX} 공백은 포함될 수 없습니다.`,
  INVAILD_BUDGET_UNIT: `${ERROR_PREFIX} 로또 구입 가격은 1,000원 단위로 입력해야 합니다.`,
  LOTTO_NUMBERS_LENGTH: `${ERROR_PREFIX} 로또 번호는 6개여야 합니다.`,
  LOTTO_NUMBERS_DUPLICATE: `${ERROR_PREFIX} 중복된 숫자를 가질 수 없습니다.`,
  LOTTO_NUMBERS_RANGE: `${ERROR_PREFIX} 로또 번호는 1과 45 사이의 정수여야 합니다.`,
  BONUS_NUMBER_RANGE: `${ERROR_PREFIX} 보너스 번호는 1과 45 사이의 정수여야 합니다.`,
  BONUS_NUMBER_DUPLICATE: `${ERROR_PREFIX} 보너스 번호는 당첨 번호와 중복될 수 없습니다.`,
});

const BUDGET_UNIT = Object.freeze(1000);

const JACKPOT_UNIT = Object.freeze([5000, 50000, 1500000, 30000000, 2000000000]);

const EMPTY_STRING = Object.freeze('');

const COMMA = Object.freeze(',');

export {
  SYSTEM_MESSAGES,
  RESULT_MESSAGES,
  ERROR_MESSAGES,
  JACKPOT_UNIT,
  EMPTY_STRING,
  COMMA,
  BUDGET_UNIT,
};
