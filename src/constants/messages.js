import { LOTTO_RULE } from "./rule.js";

export const MESSAGE = {
  INPUT_MONEY: "구입금액을 입력해 주세요.\n",
  INPUT_WINNING_LOTTO: "당첨 번호를 입력해 주세요.\n",
  INPUT_BONUS_NUMBER: "보너스 번호를 입력해 주세요.\n",
  OUTPUT_RESULT: "당첨 통계\n---\n",
  OUTPUT_PROFIT_RATE: (rate) => `총 수익률은 ${rate}%입니다.`,
};

export const ERROR_MESSAGE = {
  NOT_A_NUMBER_LOTTO: "[ERROR] 로또 번호는 숫자만 입력 가능합니다.",
  NOT_INTEGER: "[ERROR] 로또 번호는 정수만 입력 가능합니다.",
  NOT_IN_RANGE: `[ERROR] 로또 번호 범위는 ${LOTTO_RULE.MIN_NUMBER}~${LOTTO_RULE.MAX_NUMBER}입니다.`,
  INVALID_LENGTH: "[ERROR] 로또 번호는 6개여야 합니다.",
  DUPLICATE: "[ERROR] 로또 번호는 중복될 수 없습니다.",
  BONUS_NUMBER_DUPLICATE: "[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.",
  NOT_A_NUMBER_MONEY: "[ERROR] 구입 금액은 숫자만 입력 가능합니다.",
  NOT_DIVIDED_WITH_UNIT: `[ERROR] 구입 금액은 ${LOTTO_RULE.PRICE.toLocaleString()}원 단위로 입력할 수 있습니다.`,
};
