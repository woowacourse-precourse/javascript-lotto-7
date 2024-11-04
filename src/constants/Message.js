export const ERROR_PREFIX = Object.freeze("[ERROR]");

export const INPUT_PROMPT = Object.freeze({
  PURCHASE_MONEY: "구입금액을 입력해 주세요.\n",
  WINNING_NUMBER: "\n당첨 번호를 입력해 주세요.\n",
  BONUS_NUMBER: "\n보너스 번호를 입력해 주세요.\n",
});

export const INPUT_INVALID = Object.freeze({
  PURCHASE_MONEY: {
    NOT_NUMBER: "숫자로 입력하지 않았습니다. 로또 구입 금액은 숫자로 입력할 수 있습니다.",
    INVALID_UNIT: "1,000원 단위가 아닙니다. 로또 금액은 1,000원 단위로 입력가능합니다.",
    UNDER_MIN: "로또 금액은 1,000원부터 입력가능합니다.",
  },
  WINNING_NUMBER: {
    NOT_ARRAY: "배열이 아닙니다.",
    UNDER_COUNT: "당첨 번호가 6개가 아닙니다. 당첨 번호는 ,로 구분된 6개의 숫자여야 합니다.",
    HAS_NAN: "당첨 번호에 숫자가 아닌 요소가 포함되어 있습니다.",
    HAS_DUPLICATE: "당첨 번호에 중복된 수가 포함되어 있습니다.",
    OVER_RANGE: "당첨 번호는 1 ~ 45 사이의 수만 입력 가능합니다.",
  },
  BONUS_NUMBER: {
    NOT_NUMBER: "숫자로 입력하지 않았습니다. 보너스 번호는 숫자로 입력해야 합니다.",
    OVER_RANGE: "보너스 번호는 1 ~ 45 사이의 수만 입력 가능합니다.",
    HAS_DUPLICATE: "보너스 번호는 당첨 번호와 중복될 수 없습니다.",
  },
});

export const LOTTO_ERROR = Object.freeze({
  INVALID_COUNT: "현재 발행된 로또는 6개가 아닙니다. 각 로또는 6개의 수로 구성되어야 합니다.",
  HAS_DUPLICATE: "발행된 로또에 중복된 수가 포함되어 있습니다.",
  HAS_NAN: "발행된 로또에 숫자가 아닌 요소가 포함되어 있습니다.",
});
