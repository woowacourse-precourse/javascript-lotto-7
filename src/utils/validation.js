import { LOTTO_RULE } from "../constants/rule.js";

export const isLottoLengthValid = (numbers) => numbers.length === 6;

export const hasDuplicate = (array) => new Set(array).size !== array.length;

const isNumber = (number) => !Number.isNaN(Number(number));

const isInteger = (number) => Number.isInteger(Number(number));

const isInRange = (number) => number >= LOTTO_RULE.MIN_NUMBER && number <= LOTTO_RULE.MAX_NUMBER;

export const validateLottoNumber = (number) => {
  if (!isNumber(number)) {
    throw new Error("[ERROR] 로또 번호는 숫자만 입력 가능합니다.");
  }
  if (!isInteger(number)) {
    throw new Error("[ERROR] 로또 번호는 정수만 입력 가능합니다.");
  }
  if (!isInRange(number)) {
    throw new Error(
      `[ERROR] 로또 번호 범위는 ${LOTTO_RULE.MIN_NUMBER}~${LOTTO_RULE.MAX_NUMBER}입니다.`,
    );
  }
};
