const PREFIX = '[ERROR]';
const ERROR_MESSAGE = Object.freeze({
  NOT_SIX_LENGTH: `${PREFIX} 로또 번호는 6개여야 합니다.`,
  EMPTY_NUMBER: `${PREFIX} 로또 번호는 빈 수일 수 없습니다.`,
  CONTAIN_STRING: `${PREFIX} 로또 번호는 문자가 들어갈 수 없습니다.`,
  NOT_BETWEEN_1_TO_45_NUMBER: `${PREFIX} 로또 번호의 숫자 범위는 1~45 입니다.`,
  DUPLICATE_NUMBER: `${PREFIX} 로또 번호는 중복될 수 없습니다.`,
  EMPTY_MONEY: `${PREFIX} 구입금액은 빈 수일 수 없습니다.`,
  NOT_NUMBER_TYPE_MONEY: `${PREFIX} 구입금액은 숫자여야 합니다.`,
  NOT_POSITIVE_MONEY: `${PREFIX} 구입금액은 양수여야 합니다.`,
  NOT_DIVIDE_BY_BASIC_MONEY: `${PREFIX} 구입금액이 1000으로 나누어 떨어지지 않습니다.`,
});

export default ERROR_MESSAGE;
