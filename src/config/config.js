export const MESSAGES = {
  INPUT_BUY_COST: "구입금액을 입력해 주세요.",
  BUY_COUNT: "개를 구매했습니다.",
  INPUT_WIN_NUM: "당첨 번호를 입력해 주세요.",
  INPUT_BONUS_NUM: "\n보너스 번호를 입력해 주세요.",
  WIN_STATS: "\n당첨 통계\n---\n",
};

export const ERROR = {
  DUPLICATE_NUMBER: "[ERROR] 중복된 숫자입니다.",
  INPUT_EMPTY: "[ERROR] 입력값이 없습니다.",
  INVALID_NUMBER: "[ERROR] 잘못된 값입니다.",
  NOT_NUMBER: "[ERROR] 숫자가 아닙니다.",
  NOT_BOOLEAN: "[ERROR] 불리언이 아닙니다.",
};

export const TYPES = {
  BOOLEAN: "boolean",
};

export const LOTTO_AMOUNT = 1000;

export const DELIMITER = ",";

export const LINE = "-";

export const BONUS = "BONUS";

export const COUNT = "개";

export const MATCH = "일치";

export const PERCENT = "%";

export const OPEN_BRACKET = "[";

export const CLOSE_BRACKET = "]";

export const OPEN_PARENS = "(";

export const CLOSE_PARENS = "원)";

export const OPEN_PROFIT = "총 수익률은";

export const CLOSE_PROFIT = "입니다.";

export const RANK_LIST = [3, 4, 5, "BONUS", 6];

export const RANK_MAP = new Map([
  [3, { MESSAGE: "일치", AMOUNT: 5000 }],
  [4, { MESSAGE: "일치", AMOUNT: 50000 }],
  [5, { MESSAGE: "일치", AMOUNT: 1500000 }],
  ["BONUS", { MESSAGE: "일치, 보너스 볼 일치", AMOUNT: 30000000 }],
  [6, { MESSAGE: "일치", AMOUNT: 2000000000 }],
]);
