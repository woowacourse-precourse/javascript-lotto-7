const INPUT_TEXTS = Object.freeze({
  PURCHASE_AMOUNT : '구입 금액을 입력해 주세요.\n',
  WINNING_NUMBER : '\n당첨 번호를 입력해 주세요.\n',
  BONUS_NUMBER : '\n보너스 번호를 입력해 주세요.\n',
});

const ERROR_TEXTS = Object.freeze({
  NOT_A_NUMBER_PURCHASE_AMOUNT : '[ERROR] 구입 금액은 숫자만 입력해 주세요.',
  NOT_A_BLANK_PURCHASE_AMOUNT : '[ERROR] 구입 금액은 공백으로 입력할 수 없습니다.',
  NOT_DIVIDE_1000_PURCHASE_AMOUNT : '[ERROR] 1000원 단위로 구입 금액을 입력해 주세요.',
  NOT_A_NUMBER_WINNING_NUMBER : '[ERROR] 당첨 번호는 숫자만 입력해 주세요.',
  NOT_A_BLANK_WINNING_NUMBER : '[ERROR] 당첨 번호는 공백으로 입력할 수 없습니다.',
  OUT_OF_COUNT_WINNING_NUMBER : '[ERROR] 당첨 번호는 6개만 입력해야 합니다.',
  OUT_OF_RANGE_WINNING_NUMBER : '[ERROR] 당첨 번호는 1 ~ 45 사이의 숫자로 입력해야 합니다.',
  NOT_A_FLOAT_WINNING_NUMBER : '[ERROR] 당첨 번호는 소수가 될 수 없습니다.',
  NOT_A_DUPLICATION_WINNING_NUMBER : '[ERROR] 당첨 번호는 중복될 수 없습니다.',
  NOT_A_NUMBER_BONUS_NUMBER : '[ERROR] 보너스 번호는 숫자만 입력해 주세요',
  NOT_A_BLANK_BONUS_NUMBER : '[ERROR] 보너스 번호는 공백으로 입력할 수 없습니다.',
  OUT_OF_RANGE_BONUS_NUMBER : '[ERROR] 보너스 번호는 1 ~ 45 사이의 숫자로 입력해야 합니다.',
  NOT_A_FLOAT_BONUS_NUMBER : '[ERROR] 보너스 번호는 소수가 될 수 없습니다.',
  NOT_A_DUPLICATION_BONUS_NUMBER : '[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.',
  OUT_OF_COUNT_LOTTO_NUMBER : '[ERROR] 로또 번호는 6개여야 합니다.',
  NOT_A_DUPLICATION_LOTTO_NUMBER : '[ERROR] 로또 번호는 중복될 수 없습니다.',
});

const PRIZE_MONEYS = Object.freeze({
  FIRST : 2000000000,
  SECOND : 30000000,
  THIRD : 1500000,
  FOURTH : 50000,
  FIFTH : 5000,
});

const WINNING_HISTORY = Object.freeze({
  FIRST : '6개 일치 (2,000,000,000원) - ',
  SECOND : '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  THIRD : '5개 일치 (1,500,000원) - ',
  FOURTH : '4개 일치 (50,000원) - ',
  FIFTH : '3개 일치 (5,000원) - ',
  TITLE : '\n당첨 통계\n---',
});

const REVENUE_RATE = Object.freeze({
  PREFIX : '총 수익률은 ',
  POSTFIX : '%입니다.',
});

export { INPUT_TEXTS, ERROR_TEXTS, PRIZE_MONEYS, WINNING_HISTORY, REVENUE_RATE };