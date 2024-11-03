import {
  WINNING_NUMBER_MIN,
  WINNING_NUMBER_MAX,
  WINNING_NUMBER_COUNT,
} from "../lottoConstants.js";

export const ERROR_MESSAGE_WINNING_NUMBER_SEPARATOR = "쉼표(,)";

export const WINNING_NUMBERS = Object.freeze({
  INVALID_SEPARATOR: `[ERROR] 당첨 번호는 ${ERROR_MESSAGE_WINNING_NUMBER_SEPARATOR}로 구분해야 합니다.`,
  NOT_A_NUMBER: "[ERROR] 당첨 번호는 숫자로 입력해야 합니다.",
  DUPLICATE_NUMBERS: "[ERROR] 당첨 번호는 중복될 수 없습니다.",
  OUT_OF_RANGE: `[ERROR] 당첨 번호는 ${WINNING_NUMBER_MIN}에서 ${WINNING_NUMBER_MAX} 사이의 숫자여야 합니다.`,
  INVALID_COUNT: `[ERROR] 당첨 번호는 ${WINNING_NUMBER_COUNT}개여야 합니다.`,
});
