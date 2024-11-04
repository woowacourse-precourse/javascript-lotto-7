export const INPUT_VIEWS_MESSAGE = Object.freeze({
  PRINT_INPUT_MONEY: "구입금액을 입력해 주세요.\n",
  PRINT_INPUT_WINNING_NUMBER: "당첨 번호를 입력해주세요.\n",
  PRINT_INPUT_BONUS_NUMBER: "보너스 번호를 입력해 주세요.\n",
});

export const OUTPUT_VIEWS_MESSAGE = Object.freeze({
  PRINT_OUTPUT_COUNT: (lottoCount) => `${lottoCount}개를 구매했습니다.`,
  PRINT_STATISTICS_START: "당첨 통계\n---",
  PRINT_STATISTICS_MATCH: (number, price, count) =>
    `${number}개 일치 (${price.toLocaleString()}원) - ${count}개`,
  PRINT_STATISTICS_MATCH_BONUS: (price, count) =>
    `5개 일치, 보너스 볼 일치 (${price.toLocaleString()}원) - ${count}개`,
  PRINT_EARNINGS_RATE: (earningsRate) => `총 수익률은 ${earningsRate}%입니다.`,
});

export const ERROR_MESSAGE = Object.freeze({
  INVALID_LOTTO_LENGTH: "[ERROR] 로또 번호는 6개여야 합니다.",
  INVALID_DUPLICATE_NUMBER: "[ERROR] 로또 번호는 중복없이 입력되어야 합니다.",
  INVALID_NUMBER_ONLY: "[ERROR] 로또 번호는 정수로만 입력되어야 합니다.",
});
