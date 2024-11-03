const ERROR_MESSAGE = Object.freeze({
  NOT_SIX_LENGTH: `로또 번호는 6개여야 합니다.`,
  EMPTY_NUMBER: `로또 번호는 빈 수일 수 없습니다.`,
  CONTAIN_STRING: `로또 번호는 문자가 들어갈 수 없습니다.`,
  CONTAIN_FLOAT: `로또 번호는 실수가 들어갈 수 없습니다.`,
  NOT_BETWEEN_1_TO_45_NUMBER: `로또 번호의 숫자 범위는 1~45 입니다.`,
  DUPLICATE_NUMBER: `로또 번호는 중복될 수 없습니다.`,
  EMPTY_MONEY: `구입금액은 빈 수일 수 없습니다.`,
  STRING_MONEY: `구입금액은 문자일 수 없습니다.`,
  FLOAT_MONEY: `구입금액은 실수일 수 없습니다.`,
  NOT_POSITIVE_MONEY: `구입금액은 양수이며, 2**53 – 1 수를 초과하지 않아야 합니다.`,
  NOT_DIVIDE_BY_BASIC_MONEY: `구입금액이 1000으로 나누어 떨어지지 않습니다.`,
});

export default ERROR_MESSAGE;
