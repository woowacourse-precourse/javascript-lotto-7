const LOG_MESSAGE = Object.freeze({
  START_MESSAGE: "구입금액을 입력해 주세요.\n",
  WINNING_NUMBER_MESSAGE: "당첨 번호를 입력해 주세요.\n",
  BONUS_NUMBER_MESSGE: "보너스 번호를 입력해 주세요.\n",
  WINNING_STATISTICS: "당첨 통계\n---",
  BASIC_WINNING_DETAILS: `${3}개 일치 (${5}) - ${a}개\n`,
  BONUS_WINNING_DETAILS: `${5}개 일치, 보너스 볼 일치 (${3}) - ${a}개\n`,
});
const numberOfOrder = (a) => ({
  NUBER_OF_ORDER: `${a}개를 구입했습니다.\n`,
});
const RateOfReturn = (c) => ({
  RATE_OF_RETURN: `총 수익률은 ${c}%입니다.`,
});

const PRICE_ERROR_MESSAGE = Object.freeze({
  PRICE_INCORRECT: "[ERROR] 1,000원 단위만 구매 가능합니다.",
  MIN_PRICE_MESSAGE: "[ERROR] 최소 단위는 1,000원입니다.",
  MAX_PRICE_MESSAGE: "[ERROR] 최대 단위는 100,000원입니다.",
});

const NUMBER_INPUT_ERROR_MESSAGE = Object.freeze({
  IS_NUMBER: "[ERROR] 숫자만 입력 가능합니다.",
  INCORRECT_NUMBER_COUNT: "[ERROR] 쉼표로 구분한 숫자 6개를 입력해 주세요.",
  ONLY_NUMBER_COMMA: "[ERROR] 숫자와 쉼표만 입력 가능합니다.",
  NUMBER_RANGE: "[ERROR] 1 ~ 45 사이의 숫자만 입력해 주세요.",
  DUPLICATE_NUMBER: "[ERROR] 중복되지 않는 숫자만 입력해 주세요.",
  DUPLICATE_BONUS_NUMBER:
    "[ERROR] 당첨 번호에 포함된 숫자는 입력할 수 없습니다.",
});

const THREE_MATCH = 3;
const FOUR_MATCH = 4;
const FIVE_MATCH = 5;
const SIX_MATCH = 6;

const FIFTH = 5000;
const FORUTH = 50000;
const THIRD = 1500000;
const SECOND = 30000000;
const FIRST = 2000000000;
