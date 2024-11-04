const LOTTO_INPUT = Object.freeze({
  LOTTO_PRICE_INPUT: "구입금액을 입력해 주세요.\n",
  LOTTO_WIN_INPUT: "당첨 번호를 입력해 주세요.\n",
  LOTTO_BONUS_INPUT: "보너스 번호를 입력해 주세요.\n",
});

const LOTTO_OUTPUT = Object.freeze({
  LOTTO_CNT_OUTPUT: (lottoCnt) => `${lottoCnt}개를 구매했습니다.`,
  RETURN_RATE_OUTPUT: (returnRate) => `총 수익률은 ${returnRate}%입니다.`,
});

const LOTTO_ERROR = Object.freeze({
  LOTTO_PRICE_UNIT: "[ERROR] 로또 구입 금액은 1,000원 단위의 숫자여야 합니다.",
  LOTTO_NUMBER_CNT: "[ERROR] 로또 번호는 6개여야 합니다.",
  LOTTO_NUMBER_RANGE: "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.",
  LOTTO_NUMBER_DUPLICATION:
    "[ERROR] 당첨 번호 추첨 시 6개의 숫자와 보너스번호 1개가 중복되지 않아야 합니다.",
  LOTTO_NUMBER_INPUT:
    "[ERROR] 로또 번호는 쉼표(,)를 기준으로, 정수를 입력해야 합니다.",
});

const CONSTANT = Object.freeze({
  LOTTO_PRICE: 1000,
  LOTTO_WIN_1: 2000000000,
  LOTTO_WIN_2: 30000000,
  LOTTO_WIN_3: 1500000,
  LOTTO_WIN_4: 50000,
  LOTTO_WIN_5: 5000,
  LOTTO_RANGE_LOWER: 1,
  LOTTO_RANGE_UPPER: 45,
});

export { LOTTO_INPUT, LOTTO_OUTPUT, LOTTO_ERROR, CONSTANT };
