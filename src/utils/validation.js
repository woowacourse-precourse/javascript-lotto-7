import { ERROR_MESSAGES, LOTTO_COAST_UNIT } from "../constant.js";

export function checkCoastValid(coast) {
  if (!/^\d+$/.test(coast)) {
    throw new Error(ERROR_MESSAGES.COAST_WITH_NUMBER);
  }
  if (Number(coast) % LOTTO_COAST_UNIT !== 0) {
    throw new Error(ERROR_MESSAGES.COAST_UNIT(LOTTO_COAST_UNIT));
  }
  if (Number(coast) < 0) {
    throw new Error(ERROR_MESSAGES.COAST_MUST_BE_POSITIVE);
  }
}

export function checkBonusNumberValid(number, winningNumbers) {
  if (typeof number !== "number" || number < 1 || number > 45) {
    throw new Error(ERROR_MESSAGES.NOT_IN_RANGE);
  }
  if (winningNumbers.includes(number)) {
    throw new Error(ERROR_MESSAGES.DUPLICATED_NUMBER);
  }
}
