export const MESSAGES = {
  INPUT_AMOUT: '구입금액을 입력해 주세요.\n',
  INPUT_WINNING_NUMBERS: '당첨 번호를 입력해 주세요.\n',
  INPUT_BONUS_NUMBER: '보너스 번호를 입력해 주세요.\n',
  TICKET_PURCHASED: '개를 구매했습니다.',
};

export const ERROR_MESSAGES = {
  INVALID_NUMBER_COUNT: '[ERROR] 로또 번호는 6개여야 합니다.',
  DUPLICATE_NUMBER: '[ERROR] 로또 번호에는 중복된 숫자가 없어야 합니다.',
  INVALID_PURCHASE_AMOUNT: '[ERROR] 구입 금액을 숫자로 넣어주세요.',
  PURCHASE_AMOUNT_POSITIVE: '[ERROR] 구입 금액은 0보다 커야 합니다.',
  PURCHASE_AMOUNT_DIVISIBILITY: (unit) =>
    `[ERROR] 구입 금액은 ${unit} 단위로 나누어 떨어져야합니다.`,
  INVALID_WINNING_NUMBERS:
    '[ERROR] 입력할 로또 번호는 6개이며 ,(쉼표)로 구분합니다.',
  NON_NUMERIC_VALUE: '[ERROR] 입력값은 숫자여야 합니다.',
  LOTTO_RANGE: '[ERROR] 로또 번호는 1부터 45까지의 숫자입니다.',
  DUPLICATE_BONUS_NUMBER:
    '[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.',
};

export const GAME_SETTINGS = {
  EMPTY_STRING: '',
  NEW_LINE: '',
  ZERO: 0,
  PERCENTAGE_MULTIPLIER: 100,
  DECIMAL_PLACES: 1,
};

export const REGEX = {
  NO_COMMA_NUMBER_REGEX: /^\d+$/,
  THOUSANDS_COMMA_REGEX: /^\d{1,3}(,\d{3})*$/,
  COMMA_REGEX: /,/g,
};

export const LOTTO = {
  NUMBER_RANGE: { MIN: 1, MAX: 45 },
  WINNING_NUMBERS_COUNT: 6,
  TICKET_PRICE: 1000,
  SEPARATOR: ',',
};

export const RANK_KEYS = {
  NONE: 'none',
  THREE_MATCH: 'threeMatch',
  FOUR_MATCH: 'fourMatch',
  FIVE_MATCH: 'fiveMatch',
  FIVE_WITH_BONUS_MATCH: 'fiveWithBonusMatch',
  SIX_MATCH: 'sixMatch',
};

export const LOTTO_REWARD = {
  [RANK_KEYS.NONE]: { prize: 0, label: '낙첨', key: 0 },
  [RANK_KEYS.THREE_MATCH]: {
    prize: 5000,
    label: '3개 일치 (5,000원)',
    key: 3,
  },
  [RANK_KEYS.FOUR_MATCH]: {
    prize: 50000,
    label: '4개 일치 (50,000원)',
    key: 4,
  },
  [RANK_KEYS.FIVE_MATCH]: {
    prize: 1500000,
    label: '5개 일치 (1,500,000원)',
    key: 5,
  },
  [RANK_KEYS.FIVE_WITH_BONUS_MATCH]: {
    prize: 30000000,
    label: '5개 일치, 보너스 볼 일치 (30,000,000원)',
    key: 5,
    isBonus: true,
  },
  [RANK_KEYS.SIX_MATCH]: {
    prize: 2000000000,
    label: '6개 일치 (2,000,000,000원)',
    key: 6,
  },
};

export const MATCH_COUNT = {
  THREE: 3,
  FOUR: 4,
  FIVE: 5,
  SIX: 6,
};
