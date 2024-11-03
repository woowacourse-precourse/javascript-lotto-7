const ERROR_TAG = '[ERROR]';

export const ERROR = Object.freeze({
  INVALID_PURCHASE_AMOUNT: {
    name: 'InvalidPurchaseAmountError',
    message: `${ERROR_TAG} 구입 금액은 1000원 단위로 입력해야 합니다.`,
  },
  INVALID_LOTTO_NUMBER_COUNT: {
    name: 'InvalidLottoNumberCountError',
    message: `${ERROR_TAG} 로또 번호는 6개여야 합니다.`,
  },
  DUPLICATE_LOTTO_NUMBER: {
    name: 'DuplicateLottoNumberError',
    message: `${ERROR_TAG} 입력하신 로또 번호에 중복된 숫자가 있습니다.`,
  },
  INVALID_NUMBER_RANGE: {
    name: 'InvalidNumberRangeError',
    message: `${ERROR_TAG} 1~45의 숫자를 입력하셔야 됩니다.`,
  },
  INVALID_NUMBER_TYPE: {
    name: 'InvalidNumberTypeError',
    message: `${ERROR_TAG} 양의 정수만 입력하셔야 됩니다.`,
  },
  INVALID_MATCH_COUNT: {
    name: 'InvalidMatchCountError',
    message: `${ERROR_TAG} 유효하지 않은 매칭 개수입니다.`,
  },
});
