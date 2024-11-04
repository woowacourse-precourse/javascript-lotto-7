export const ERROR_MESSAGES = {
  INVALID_PURCHASE_AMOUNT:
    "[ERROR] 구입 금액은 1,000원 단위의 양수여야 합니다.",
  INVALID_WINNING_NUMBERS_COUNT: "[ERROR] 로또 번호는 6개여야 합니다.",
  INVALID_WINNING_NUMBER_TYPE: "[ERROR] 로또 번호는 숫자여야 합니다.",
  DUPLICATE_WINNING_NUMBER: "[ERROR] 로또 번호에 중복된 숫자가 있습니다.",
  INVALID_WINNING_NUMBER_RANGE:
    "[ERROR] 로또 번호는 1에서 45 사이의 숫자여야 합니다.",
  INVALID_BONUS_NUMBER_TYPE: "[ERROR] 보너스 번호는 숫자여야 합니다.",
  INVALID_BONUS_NUMBER_RANGE: "[ERROR] 보너스 번호는 1에서 45 사이여야 합니다.",
  DUPLICATE_BONUS_NUMBER:
    "[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.",
};

export const LOTTO_PRICE = 1000;

export const MESSAGES = {
  PURCHASE_AMOUNT_PROMPT: "구입금액을 입력해 주세요.\n",
  LOTTO_PURCHASED: "개를 구매했습니다.",
  WINNING_NUMBER_PROMPT: "\n당첨 번호를 입력해 주세요.\n",
  BONUS_NUMBER_PROMPT: "\n보너스 번호를 입력해 주세요.\n",

  RESULT_HEADING: "\n당첨 통계\n---",
  PRIZES: [
    { message: "3개 일치 (5,000원) - ", key: "fifth" },
    { message: "4개 일치 (50,000원) - ", key: "fourth" },
    { message: "5개 일치 (1,500,000원) - ", key: "third" },
    { message: "5개 일치, 보너스 볼 일치 (30,000,000원) - ", key: "second" },
    { message: "6개 일치 (2,000,000,000원) - ", key: "first" },
  ],

  PROFIT_RATE: "총 수익률은 ",
  PROFIT_SUFFIX: "%입니다.",
};

export const LOTTO_NUMBERS = {
  MIN: 1,
  MAX: 45,
  COUNT: 6,
};

export const WINNING_PRIZES = {
  first: 2000000000,
  second: 30000000,
  third: 1500000,
  fourth: 50000,
  fifth: 5000,
};
