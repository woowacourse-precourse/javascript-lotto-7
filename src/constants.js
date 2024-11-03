/**
 * 싱수
 */

export const ERROR_MESSAGE = Object.freeze({
  LOTTO_NUMBER_INPUT_ERROR:
    "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.",
  BONUS_NUMBER_INPUT_ERROR:
    "[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.",
  LOTTO_MONEY_INPUT_ERORR:
    "[ERROR] 구입 금액은 1,000원 단위로 입력해야 합니다.",
  LOTTO_MONEY_INPUT_STRING_ERORR:
    "[ERROR] 구입 금액은 숫자 형태로 입력해야 합니다.",
  WINNING_LOTTO_LENGTH_ERROR: "[ERROR] 로또 당첨 번호는 6개여야 합니다.",
  WINNING_LOTTO_NUMBER_ERROR:
    "[ERROR] 당첨 번호는 숫자 형태로 입력해야 합니다.",
  WINNING_LOTTO_MAX_MIN_ERROR:
    "[ERROR] 당첨 번호는 1~45 사이의 숫자여야 합니다.",
  WINNING_LOTTO_NUMBER_DUPLICATE_ERROR:
    "[ERROR] 당첨 번호가 중복이 됩니다. 1~45까지 중복이 안되도록 입력해주세요.",
  WINNING_LOTTO_BONUS_NUMBER_ERROR:
    "[ERROR] 보너스 번호는 숫자 형태로 입력해야 합니다.",
  WINNING_LOTTO_BONUS_NUMBER_DUPLICATE_ERROR:
    "[ERROR] 당첨 번호와 보너스번호가 중복됩니다.",
});

export const INPUT_MESSAGE = Object.freeze({
  LOTTO_MONEY: "구입금액을 입력해 주세요.\n",
  LOTTO_WINNING_NUMBERS: "당첨 번호를 입력해 주세요.\n",
  LOTTO_BOUNUS_NUMBER: "보너스 번호를 입력해 주세요.\n",
});

export const OUTPUT_MESSAGE = Object.freeze({
  LOTTO_TOTAL_COUNT: (totalCount) => `\n${totalCount}개를 구매했습니다.`,
  WINNING_STATISTICS_TITLE: "\n당첨 통계",
  DIVIDER: "---",
  STATISTIC_WINNING_FIFTH_PLACE: (number) => `3개 일치 (5,000원) - ${number}개`,
  STATISTIC_WINNING_FOURTH_PLACE: (number) =>
    `4개 일치 (50,000원) - ${number}개`,
  STATISTIC_WINNING_THIRD_PLACE: (number) =>
    `5개 일치 (1,500,000원) - ${number}개`,
  STATISTIC_WINNING_SECOND_PLACE: (number) =>
    `5개 일치, 보너스 볼 일치 (30,000,000원) - ${number}개`,
  STATISTIC_WINNING_FIRST_PLACE: (number) =>
    `6개 일치 (2,000,000,000원) - ${number}개`,
  PROFIT_RATE: (rate) => `총 수익률은 ${rate}%입니다.`,
});

export const LOTTO_EACH_AMOUNT = 1000;
export const LOTTO_COUNT_MAX = 6;
export const LOTTO_MAX_NUMBER = 45;
export const LOTTO_MIN_NUMBER = 1;
export const WINNING_FIRST_PRIZE = 2000000000;
export const WINNING_SECOND_PRIZE = 30000000;
export const WINNING_THIRD_PRIZE = 1500000;
export const WINNING_FOURTH_PRIZE = 50000;
export const WINNING_FIFTH_PRIZE = 5000;
