import {
  BONUS_NUMBER_COUNT,
  WINNING_NUMBER_MAX,
  WINNING_NUMBER_MIN,
} from "../lottoConstants.js";

export const BONUS_NUMBER = Object.freeze({
  NOT_A_NUMBER: "[ERROR] 보너스 번호는 숫자로 입력해야 합니다.",
  DUPLICATE_WITH_WINNING:
    "[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.",
  OUT_OF_RANGE: `[ERROR] 보너스 번호는 ${WINNING_NUMBER_MIN}에서 ${WINNING_NUMBER_MAX} 사이의 숫자여야 합니다.`,
  INVALID_COUNT: `[ERROR] 보너스 번호는 ${BONUS_NUMBER_COUNT}개만 입력해야 합니다.`,
});
