import { PRICE_RANGE, RANDOM_RANGE, LOTTO_NUM_LENGTH } from "./constants.js";

const ERROR_PREFIX = "[ERROR] ";

const generateMessage = (message, prefix = ERROR_PREFIX) => {
  return prefix + message;
};

export const ONLY_NUM_ERROR = generateMessage(
  "숫자 이외의 문자는 입력할 수 없습니다."
);

export const PRICE_ERROR = Object.freeze({
  less: generateMessage("금액이 부족합니다."),
  over: generateMessage(`${PRICE_RANGE.max} 보다 큰 수는 입력할 수 없습니다.`),
});

export const LOTTO_NUM_ERROR = Object.freeze({
  length: generateMessage(
    `로또 번호는 ${LOTTO_NUM_LENGTH}개만 입력할 수 있습니다.`
  ),
  duplicated: generateMessage("중복된 번호는 입력할 수 없습니다."),
  range: generateMessage(
    `로또 번호는 ${RANDOM_RANGE.min}부터 ${RANDOM_RANGE.max}까지의 수만 입력할 수 있습니다.`
  ),
});

export const BONUS_NUM_ERROR = Object.freeze({
  duplicated: generateMessage(
    "로또 번호에 이미 있는 번호는 입력할 수 없습니다."
  ),
});
