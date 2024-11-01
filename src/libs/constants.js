export const INFO_MESSAGE = Object.freeze({
  PURCHASE_AMOUNT: "구입금액을 입력해 주세요.\n",
  PURCHASE_CONFORM: (count) => `\n${count}개를 구매했습니다.`,
});

export const ERROR_MESSAGE = Object.freeze({
  INVALID_NUMBER_INPUT_TYPE: "잘못된 타입의 입력입니다. 숫자만 입력 가능합니다.",
  INVALID_PURCHASE_AMOUNT: "정확한 로또 금액을 입력해주세요. 구입 금액은 1000 단위로만 받습니다.",
});

export const CONFIG = Object.freeze({
  DEFAULT_AMOUNT_UNIT: 1000,
});
