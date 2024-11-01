export const INFO_MESSAGE = Object.freeze({
  PURCHASE_AMOUNT: "구입금액을 입력해 주세요.\n",
  PURCHASE_CONFORM: (count) => `\n${count}개를 구매했습니다.`,
  WINNER_LOTTO_NUMBERS_INPUT: "\n당첨 번호를 입력해 주세요.\n",
});

export const ERROR_MESSAGE = Object.freeze({
  INVALID_NUMBER_INPUT_TYPE: "잘못된 타입의 입력입니다. 숫자만 입력 가능합니다.",
  INVALID_PURCHASE_AMOUNT: "정확한 로또 금액을 입력해주세요. 구입 금액은 1000 단위로만 받습니다.",
  INVALID_EMPTY: "값이 비어있습니다. 입력부탁드립니다.",
});

export const CONFIG = Object.freeze({
  DEFAULT_AMOUNT_UNIT: 1000,
  MIN_LOTTO_NUMBER: 1,
  MAX_LOTTO_NUMBER: 45,
  LOTTO_COUNT: 6,
});

export const LOTTO_NUMBER_DELIMITER = ", ";
export const WINNER_LOTTO_NUMBER_DELIMITER = ",";
