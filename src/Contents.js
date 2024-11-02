const LOG_MESSAGE = Object.freeze({
  START_MESSAGE: "구입금액을 입력해 주세요.\n",
  WINNING_NUMBER_MESSAGE: "당첨 번호를 입력해 주세요.\n",
  BONUS_NUMBER_MESSGE: "보너스 번호를 입력해 주세요.\n",
  WINNING_STATISTICS: "당첨 통계\n---",
  FIFTH_WINNING_DETAILS: `3개 일치 (5,000원) - ${a}개\n`,
  FOURTH_WINNING_DETAILS: `4개 일치 (50,000원) - ${a}개\n`,
  THIRD_WINNING_DETAILS: `5개 일치 (1,500,000원) - ${a}개\n`,
  SECOND_WINNING_DETAILS: `5개 일치, 보너스 볼 일치 (30,000,000원) - ${a}개\n`,
  FIRST_WINNING_DETAILS: `6개 일치 (2,000,000,000원) - ${a}개\n`,
});
const numberOfOrder = (a) => ({
  NUBER_OF_ORDER: `${a}개를 구입했습니다.\n`,
});
const rateOfReturn = (c) => ({
  RATE_OF_RETURN: `총 수익률은 ${c}%입니다.`,
});

const PRICE_ERROR_MESSAGE = Object.freeze({
  IS_NUMBER: "[ERROR] 숫자만 입력 가능합니다.",
  PRICE_INCORRECT: "[ERROR] 1,000원 단위만 구매 가능합니다.",
  MIN_PRICE: "[ERROR] 최소 단위는 1,000원입니다.",
  MAX_PRICE: "[ERROR] 최대 단위는 100,000원입니다.",
});

const NUMBER_INPUT_ERROR_MESSAGE = Object.freeze({
  INCORRECT_COUNT_NUMBER: "[ERROR] 쉼표로 구분한 숫자 6개를 입력해 주세요.",
  ONLY_NUMBER_COMMA: "[ERROR] 숫자와 쉼표만 입력 가능합니다.",
  NUMBER_RANGE: "[ERROR] 1 ~ 45 사이의 숫자만 입력해 주세요..",
  DUPLICATE_NUMBER: "[ERROR] 중복되지 않는 숫자만 입력해 주세요.",
});
