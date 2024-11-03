import {
  LOTTO_MAX_NUMBER,
  LOTTO_MIN_NUMBER,
  LOTTO_PRICE,
  NUMBERS_COUNT,
} from "./gameRules.js";

export const PURCHASE_AMOUNT_ERROR = {
  NOT_A_NUMBER: "구매 금액은 숫자여야 합니다.",
  UNDER_MIN_PRICE: `구매 금액은 ${LOTTO_PRICE} 이상의 숫자여야 합니다.`,
  NOT_DIVIDED: `구매 금액은 ${LOTTO_PRICE} 단위로 나눠지는 숫자여야 합니다.`,
  EMPTY_VALUE: "구매 금액을 입력하지 않았습니다.",
};

export const NUMBERS_ERROR = {
  NOT_A_NUMBER: "당첨 번호는 숫자여야 합니다.",
  COUNT_NOT_MET: `당첨 번호는 ${NUMBERS_COUNT}개여야 합니다.`,
  INVALID_RANGE: `당첨 번호는 ${LOTTO_MIN_NUMBER}~${LOTTO_MAX_NUMBER} 사이의 숫자여야 합니다.`,
  NOT_AN_INTEGER: "당첨 번호는 정수로 이루어져야 합니다.",
  DUPLICATE_NUMBERS: "당첨 번호는 서로 중복되면 안됩니다.",
};

export const BONUS_NUMBER_ERROR = {
  NOT_A_NUMBER: "보너스 번호는 숫자여야 합니다.",
  INVALID_RANGE: `보너스 번호는 ${LOTTO_MIN_NUMBER}~${LOTTO_MAX_NUMBER} 사이의 숫자여야 합니다.`,
  DUPLICATE_NUMBERS: "보너스 번호는 당첨 번호와 중복되지 않는 숫자여야 합니다.",
};
