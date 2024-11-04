import { FORMAT } from "../constants/message.js";

const PRICE_ERROR_MESSAGE = Object.freeze({
  EMPTY_INPUT: "입력값이 비어 있습니다. 값을 입력해 주세요!",
  INVALID_POSITIVE_INTEGER: "금액은 0 이상의 양의 정수여야 합니다. 1000원 단위로 작성해 주세요.",
  INVALID_AMOUNT_FORMAT: "올바른 금액을 입력해 주세요. 숫자만 입력해야 하며, 1000원 단위로 작성해 주세요.",
  AMOUNT_CONTAINS_NON_NUMERIC: "금액에는 숫자만 입력해 주세요. 1000원 단위로 입력해야 합니다.",
  INVALID_AMOUNT_UNIT: "이 게임에서는 1000원 단위로만 금액을 입력할 수 있습니다. 다시 입력해 주세요.",
});

const LOTTO_ERROR_MESSAGE = Object.freeze({
  INVALID_LENGTH: "로또 번호는 6개여야 합니다.",
  DUPLICATE_NUMBERS: "로또 번호에 중복된 숫자가 있습니다.",
  OUT_OF_RANGE: "로또 번호는 1부터 45 사이의 숫자여야 합니다.",
  INVALID_POSITIVE_INTEGER: "로또 번호는 양의 정수여야 합니다.",
  NOT_SORTED: "로또 번호는 오름차순으로 정렬되어야 합니다.",
});

const WINNING_NUMBERS_ERROR_MESSAGE = Object.freeze({
  EMPTY_INPUT: "입력값이 비어 있습니다. 1 ~ 45사이의 6개의 당첨 번호를 콤마(,) 기준으로 입력해 주세요.",
  DELIMITER_REQUIRED: "당첨 번호는 콤마(,)로 구분되어 있어야 합니다. 1 ~ 45사이의 6개의 당첨 번호를 입력해 주세요.",
  INVALID_DELIMITER: "콤마(,)로만 숫자를 구분할 수 있습니다. 1 ~ 45사이의 6개의 당첨 번호를 콤마(,) 기준으로 입력해 주세요.",
  INVALID_POSITIVE_INTEGER: "당첨 번호는 양의 정수여야 합니다. 1 ~ 45사이의 6개의 당첨 번호를 콤마(,) 기준으로 입력해 주세요.",
  OUT_OF_RANGE: "당첨 번호는 1부터 45 사이의 양의 정수여야 합니다. 6개의 당첨 번호를 콤마(,) 기준으로 입력해 주세요.",
  DUPLICATE_NUMBERS: "당첨 번호는 중복되어서는 안됩니다. 1 ~ 45사이의 6개의 당첨 번호를 콤마(,) 기준으로 입력해 주세요.",
  INVALID_NUMBER_COUNT: "당첨 번호는 6개의 숫자로 구성되어야 합니다. 1 ~ 45사이의 당첨 번호를 콤마(,) 기준으로 입력해 주세요.",
});

const BONUS_NUMBER_ERROR_MESSAGE = Object.freeze({
  EMPTY_INPUT: "입력값이 비어 있습니다. 1 ~ 45사이의 숫자 하나를 입력해 주세요",
  INVALID_NUMBER: "보너스 번호는 숫자여야 합니다. 1 ~ 45사이의 숫자 하나를 입력해 주세요",
  INVALID_POSITIVE_INTEGER: "보너스 번호는 양의 정수여야 합니다. 1 ~ 45사이의 숫자 하나를 입력해 주세요.",
  OUT_OF_RANGE: "보너스 번호는 1부터 45 사이의 양의 정수여야 합니다. 조건에 맞는 숫자 하나를 입력해 주세요.",
  DUPLICATE_NUMBER: (winningNumbers) => 
  `보너스 번호와 당첨번호는 중복되어서는 안됩니다. 1 ~ 45사이의 숫자 하나를 입력해 주세요.
  현재 당첨 번호: [${winningNumbers.join(FORMAT.COMMA_SPACE)}]`,
});

const RETRY_ERROR_MESSAGE = Object.freeze({
  EXCEED_MAX_ATTEMPTS: "최대 재입력 횟수를 넘어가셨습니다",
});

export {
  PRICE_ERROR_MESSAGE,
  LOTTO_ERROR_MESSAGE,
  WINNING_NUMBERS_ERROR_MESSAGE,
  BONUS_NUMBER_ERROR_MESSAGE,
  RETRY_ERROR_MESSAGE,
};