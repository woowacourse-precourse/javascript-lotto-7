import { lottoConfig } from '../models/lottoConfig';

export const ERROR_MESSAGE = Object.freeze({
  LOTTO: {
    INVALID_LOTTO_NUMBER_COUNT: '[ERROR] 로또 번호는 6개여야 합니다.',
  },
  LOTTO_GENERATOR: {
    INVALID_LOTTO_PRICE_UNIT: `[ERROR] 구매금액은 ${lottoConfig.LOTTO_PRICE}원 단위여야합니다.\n`,
    INVALID_POSITIVE_NUMBER: '[ERROR] 구매금액은 0보다 커야합니다.\n',
  },
  WINNING_LOTTO: {
    INVALID_NUMBER_RANGE: `[ERROR] 번호의 범위는 ${lottoConfig.MIN_NUMBER}~${lottoConfig.MAX_NUMBER}여야합니다.\n`,
    MAIN_NUMBER_DUPLICATION: '[ERROR] 당첨 번호에 중복된 숫자가 있습니다.\n',
    BONUS_NUMBER_DUPLICATION: '[ERROR] 보너스 번호가 당첨번호와 중복됩니다.\n',
  },
});
