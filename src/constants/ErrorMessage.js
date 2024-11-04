import LOTTO from './Lotto.js';

const ERROR = Object.freeze({
  PREFIX: '[ERROR]',
  EMPTY: '공백이 아닌 값을 입력해야 합니다.',
  PRICE: `${LOTTO.LOTTO_PRICE}원 이상부터 구매할 수 있습니다.`,
  UNIT: `${LOTTO.LOTTO_PRICE}원 단위로 입력해주세요.`,
  RANGE: `로또 번호는 ${LOTTO.MIN_LOTTO_NUMBER}~${LOTTO.MAX_LOTTO_NUMBER} 사이의 정수값 이여야 합니다.`,
  DELIMITER: `번호를 ${LOTTO.WINNING_NUMBER_DELIMETER}로 구분해서 입력해주세요.`,
  IS_NAN: '숫자를 입력해주세요.',
  COUNT: `당첨 번호는 ${LOTTO.LOTTO_NUMBER_COUNT}개의 숫자로 입력해주세요.`,
  WINNING_DUPLICATE: '당첨 번호는 서로 중복되지 않는 값들로 입력해주세요',
  BONUS_DUPLICATE: '보너스 번호는 당첨 번호와 중복되지 않는 값을 입력해주세요.',
});

export default ERROR;
