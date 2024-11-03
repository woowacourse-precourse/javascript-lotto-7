import deepFreeze from '../../utils/deepFreeze.js';

const ERROR_MESSAGES = deepFreeze({
  ERROR_PREFIX: '[ERROR] ',
  MONEY_TYPE_NOT_NUMBER: '구매 금액으로 숫자가 아닌 값을 입력할 수 없습니다!',
  MONEY_UNIT_NOT_RIGHT: '구매 금액을 1000원 단위로 입력해 주세요!',
  LOTTO_LENGTH_NOT_RIGHT: '로또 번호는 6개여야 합니다.',
  LOTTO_NUMBER_TYPE_NOT_NUMBER: '로또 번호는 숫자 타입이어야 합니다.',
  LOTTO_NUMBER_DUPLICATION: '로또 번호는 중복된 번호가 존재하면 안 됩니다.',
  LOTTO_NUMBER_RANGE_NOT_RIGHT: '로또 번호의 숫자 범위는 1~45여야 합니다.',
  BONUS_NUMBER_TYPE_NOT_NUMBER: '보너스 번호는 숫자타입이어야 합니다.',
  BONUS_NUMBER_DUPLICATION: '보너스 번호는 당첨 번호와 중복될 수 없습니다.',
  BONUS_NUMBER_RANGE_NOT_RIGHT:
    '보너스 번호의 숫자 범위는 로또 번호의 숫자 범위와 같이 1~45여야 합니다.',
  BONUS_NUMBER_NOT_INTEGER: '보너스 번호는 정수형이어야 합니다.',
});

export default ERROR_MESSAGES;
