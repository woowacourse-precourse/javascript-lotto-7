import { LOTTO_INFO } from './lotto.js';

const ERROR_MESSAGE = Object.freeze({
  EMPTY: '[ERROR] 값을 입력해 주세요.\n',
  NOT_A_NUMBER: '[ERROR] 숫자만 입력 가능합니다.\n',
  NOT_DIVIDED_NUMBER: `[ERROR] ${LOTTO_INFO.PRICE}원 단위로 입력해주세요.\n`,
  LOTTO_NUM_LENGTH: `[ERROR] 로또 번호는 ${LOTTO_INFO.LENGTH}개 여야 합니다.\n`,
  LOTTO_NUM_DUPLICATION: `[ERROR] 로또 번호는 중복될 수 없습니다.\n`,
  LOTTO_NUM_TYPE: `[ERROR] 로또 번호는 숫자만 가능합니다.\n`,
  LOTTO_NUM_RANGE: `[ERROR] 로또 번호는 ${LOTTO_INFO.MIN_RANGE_NUM}~${LOTTO_INFO.MAX_RANGE_NUM} 사이 범위의 숫자여야 합니다. \n`,
  BONUS_NUM_DUPLICATION: `[ERROR] 보너스 번호는 당첨번호와 중복될 수 없습니다.\n`,
});

export default ERROR_MESSAGE;
