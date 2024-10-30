import LOTTO_INFO from './lotto.js';

const ERROR_MESSAGE = Object.freeze({
  EMPTY: '[ERROR] 값을 입력해 주세요.\n',
  NOT_A_NUMBER: '[ERROR] 숫자만 입력 가능합니다.\n',
  NOT_DIVIDED_NUMBER: `[ERROR] ${LOTTO_INFO.PRICE}원 단위로 입력해주세요.\n`,
});

export default ERROR_MESSAGE;
