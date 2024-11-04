import { LOTTO_CONFIG } from './lottoConfig.js';

export const ERROR_MESSAGES = {
  INVALID_NUMBER: '[ERROR] 숫자가 아닌 문자가 포함되었습니다.',
  OUT_OF_RANGE: `[ERROR] 로또 번호 범위(${LOTTO_CONFIG.NUMBER_MIN} ~ ${LOTTO_CONFIG.NUMBER_MAX})를 벗어난 숫자가 있습니다.`,
  DUPLICATE_NUMBER: '[ERROR] 중복된 숫자가 있습니다.',
  INVALID_PRICE: `[ERROR] 구입 금액이 ${LOTTO_CONFIG.PRICE}원 단위가 아닙니다.`,
  INVALID_LOTTO_COUNT: `[ERROR] 로또 번호는 ${LOTTO_CONFIG.NUMBER_COUNT}개여야 합니다.`,
  BONUS_NUMBER_DUPLICATE: '[ERROR] 보너스 번호와 당첨 번호가 중복됩니다.',
  SAFE_INTEGER: '[ERROR] 안전 범위를 벗어난 숫자 입니다.',
  INPUT_ERROR: '[ERROR] 입력 중 오류가 발생했습니다.',
};
