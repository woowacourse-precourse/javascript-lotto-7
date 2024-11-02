import {
  LOTTO_PRICE,
  LOTTO_NUMBER_MIN,
  LOTTO_NUMBER_MAX,
  LOTTO_NUMBER_COUNT as COUNT,
} from './numbers.js';

export const INVALID_AMOUNT = `유효하지 않은 금액입니다. ${LOTTO_PRICE}원 단위의 금액을 입력해 주세요.\n`;
export const LOTTO_NUMBER_COUNT = `로또 번호는 ${COUNT}개여야 합니다.\n`;
export const LOTTO_NUMBER_DUPLICATED = '로또 번호에 중복된 숫자가 있습니다.\n';

export const LENGTH_NOT_SIX = `쉼표로 구분된 ${COUNT}개의 당첨 번호를 입력해주세요.\n`;
export const NOT_IN_RANGE = `${LOTTO_NUMBER_MIN}에서 ${LOTTO_NUMBER_MAX} 사이의 정수만 입력해주세요.\n`;
export const DUPLICATED = '중복된 숫자는 입력할 수 없습니다.\n';
export const BONUS_NUMBER_DUPLICATED = '보너스 번호는 당첨 번호와 중복될 수 없습니다.\n';
