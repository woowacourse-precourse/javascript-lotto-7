import { LOTTO } from './lotto.js';

const ERORR_HEADER = '[ERROR]';

export default Object.freeze({
  HAS_UN_NUMERIC_CHARACTER: `${ERORR_HEADER} 숫자가 아닌 문자가 있습니다.`,
  LOTTO: Object.freeze({
    MUST_HAS_6_NUMBERS: `${ERORR_HEADER} 로또 번호는 6개여야 합니다.`,
    NUMBER_IS_DUPLICATED: `${ERORR_HEADER} 로또 번호는 증복될 수 없습니다.`,
    NUMBER_OUT_OF_RANGE:
      `${ERORR_HEADER} 로또 번호는 ${LOTTO.NUMBER_RANGE.MIN}~${LOTTO.NUMBER_RANGE.MAX}사이의 숫자여야 합니다.`,
    BONUS_NUMBER_IS_DUPLICATED: `${ERORR_HEADER} 보너스 번호는 당첨번호와 중복될 수 없습니다.`,
  }),
  PURCHASE: Object.freeze({
    MUST_BE_NUMBER: `${ERORR_HEADER} 구입금액 숫자로만 입력가능합니다.`,
    MUST_BE_DIVIDED_INTO_UNITS: `${ERORR_HEADER} 당첨금액은 ${LOTTO.PRICE}단위로 나누어져야합니다.`,
  }),
});

