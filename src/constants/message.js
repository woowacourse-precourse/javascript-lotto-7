const LOG_MESSAGE = Object.freeze({
  START_MESSAGE: "구입금액을 입력해 주세요.",
  LOTTO_COUNT_MESSAGE: "개를 구매했습니다.",
})

const ERROR_MESSAGE = Object.freeze({
  EMPTY_INPUT: "입력값이 비어 있습니다. 값을 입력해 주세요!",
  INVALID_POSITIVE_INTEGER: "금액은 0 이상의 양의 정수여야 합니다. 1000원 단위로 작성해 주세요.",
  INVALID_AMOUNT_FORMAT: "올바른 금액을 입력해 주세요. 숫자만 입력해야 하며, 1000원 단위로 작성해 주세요.",
  AMOUNT_CONTAINS_NON_NUMERIC: "금액에는 숫자만 입력해 주세요. 1000원 단위로 입력해야 합니다.",
  INVALID_AMOUNT_UNIT: "이 게임에서는 1000원 단위로만 금액을 입력할 수 있습니다. 다시 입력해 주세요.",

  INVALID_LOTTO_LENGTH: "로또 번호는 6개여야 합니다.",
  DUPLICATE_LOTTO_NUMBERS: "로또 번호에 중복된 숫자가 있습니다.",
  OUT_OF_RANGE: "로또 번호는 1부터 45 사이의 숫자여야 합니다.",
  LOTTO_INVALID_POSITIVE_INTEGER: "로또 번호는 양의 정수여야 합니다.",
  NOT_SORTED: "로또 번호는 오름차순으로 정렬되어야 합니다.",
});

const TAGS = Object.freeze({
  ERROR: "[ERROR]",
});

export {
  LOG_MESSAGE,
  ERROR_MESSAGE,
  TAGS,
};