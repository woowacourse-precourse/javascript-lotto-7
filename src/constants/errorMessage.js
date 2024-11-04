import {
  LOTTO_MAX_NUMBER,
  LOTTO_MIN_NUMBER,
  LOTTO_PRICE,
  NUMBERS_COUNT,
} from "./gameRules.js";

export const TYPE_ERROR = {
  NOT_A_NUMBER: "숫자로 입력해 주세요.",
  EMPTY_VALUE: "값을 입력해 주세요.",
  NOT_AN_INTEGER: "정수를 입력해 주세요.",
};

export const PURCHASE_AMOUNT_ERROR = {
  UNDER_MIN_PRICE: `${LOTTO_PRICE} 이상의 숫자를 입력해 주세요.`,
  NOT_DIVIDED: `${LOTTO_PRICE} 단위로 나눠지는 숫자를 입력해 주세요.`,
};

export const LOTTO_NUMBER_ERROR = {
  COUNT_NOT_MET: `쉼표(,)로 구분한 ${NUMBERS_COUNT}개의 값을 입력해 주세요.`,
  INVALID_RANGE: `${LOTTO_MIN_NUMBER}~${LOTTO_MAX_NUMBER} 사이의 숫자만 입력해 주세요.`,
  DUPLICATE_NUMBERS: "서로 중복되지 않는 값을 입력해 주세요.",
  DUPLICATE_BONUS: "당첨 번호와 중복되지 않는 값을 입력해 주세요.",
};
