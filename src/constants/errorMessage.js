import lottoConstants from './lottoConstants.js';

const ERROR_PREFIX = '[ERROR] ';

const errorMessages = {
  MONEY_ERROR: `${ERROR_PREFIX} 구입금액은 양의 정수이며 ${lottoConstants.PRICE}으로 나눠떨어져야 합니다.`,
  LOTTOS_LENGHT_ERROR: `${ERROR_PREFIX} 로또 번호는 ${lottoConstants.LENGHT}개여야 합니다.`,
  LOTTO_NUM_ERROR: `${ERROR_PREFIX} 로또 번호는 양의 정수만 가능합니다.`,
  LOTTO_RANGE_ERROR: `${ERROR_PREFIX} 로또 번호는 ${lottoConstants.MIN_NUM}과 ${lottoConstants.MAX_NUM} 사이의 양의 정수만 가능합니다.`,
  LOTTOS_DUPLICATE_ERROR: `${ERROR_PREFIX} 로또 번호에 중복된 수가 존재합니다.`,
  BONUS_DUPLICATE_ERROR: `${ERROR_PREFIX} 보너스 번호는 당첨 번호가 중복됩니다.`,
};

export default errorMessages;
