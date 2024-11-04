import RULES from '../RULES.js';

export default {
  NOT_TOTALLY_PICKED: `[ERROR] 로또 번호는 ${RULES.TOTAL_PICK_COUNT}개여야 합니다.`,
  DUPLICATED_NUMBER: `[ERROR] 로또 번호는 중복될 수 없습니다.`,
  OVER_NUMBER_RANGE: `[ERROR] 로또 번호는 ${RULES.PICK_RANGE_START}에서 ${RULES.PICK_RANGE_END} 사이의 숫자여야 합니다.`,
};
