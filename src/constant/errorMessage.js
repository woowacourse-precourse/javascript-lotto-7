import { PRICE_RANGE, NUMBER_RANGE, LOTTO_NUMBER_LENGTH } from './system.js';

const ERROR_PREFIX = '[ERROR]';

export const ERROR_MESSAGE = Object.freeze({
  NUMBER_PRICE: `${ERROR_PREFIX} 구입 금액은 숫자로 입력해 주세요`,
  MIN_PRICE: `${ERROR_PREFIX} 구입 금액은 ${PRICE_RANGE.MIN.toLocaleString()}원 이상 입력해 주세요`,
  UNIT_PRICE: `${ERROR_PREFIX} 구입 금액은 ${PRICE_RANGE.MIN.toLocaleString()}원 단위로 입력해 주세요`,
  MAX_PRICE: `${ERROR_PREFIX} 구입 금액은 ${PRICE_RANGE.MAX.toLocaleString()}원 미만으로 입력해 주세요`,
  LENGTH_WINNING_NUMBERS: `${ERROR_PREFIX} 당첨 번호는 ${LOTTO_NUMBER_LENGTH}개 입력해 주세요`,
  DUPLICATE_WINNIG_NUMBERS: `${ERROR_PREFIX} 당첨 번호는 중복없이 입력해 주세요`,
  INTEGER_WINNING_NUMBERS: `${ERROR_PREFIX} 당첨 번호는 정수로 입력해 주세요`,
  RANGE_WINNING_NUMBERS: `${ERROR_PREFIX} 당첨 번호는 ${NUMBER_RANGE.MIN}~${NUMBER_RANGE.MAX} 사이 수로 입력해 주세요`,
  INTEGER_BONUS_NUMBER: `${ERROR_PREFIX} 보너스 번호는 정수로 입력해 주세요`,
  RANGE_BONUS_NUMBER: `${ERROR_PREFIX} 보너스 번호는 ${NUMBER_RANGE.MIN}~${NUMBER_RANGE.MAX} 사이 수로 입력해 주세요`,
  DUPLICATE_BONUS_NUMBER: `${ERROR_PREFIX} 보너스 번호는 당첨 번호와 중복되지 않게 입력해 주세요`,
});
