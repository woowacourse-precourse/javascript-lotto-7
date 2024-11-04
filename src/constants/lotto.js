const LOTTO_UNIT_PRICE = 1000;

const PARSER_WINNING_NUMBER = ",";

const LOTTO_NUMBER_COUNT = 6;

const WINNER_PRICE = {
  5: 5000,
  4: 50000,
  3: 1500000,
  2: 30000000,
  1: 2000000000,
};

const MAX_INPUT_TRY = 10;

const LOTTO_RESULT_INFO = {
  5: "3개",
  4: "4개",
  3: "5개",
  2: "5개 일치, 보너스 볼",
  1: "6개",
};

const LOTTO_RANGE = {
  min: 1,
  max: 45,
};

const MAX_INPUT = 1000000;

export {
  LOTTO_UNIT_PRICE,
  PARSER_WINNING_NUMBER,
  LOTTO_NUMBER_COUNT,
  WINNER_PRICE,
  LOTTO_RESULT_INFO,
  LOTTO_RANGE,
  MAX_INPUT_TRY,
  MAX_INPUT,
};
