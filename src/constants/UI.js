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

export const MESSAGE = Object.freeze({
  INPUT_PURCHASE: '구입금액을 입력해 주세요.\n',
  PURCHASE_COUNT: (count) => `${count}개를 구매했습니다.\n`,
  INPUT_WINNING_NUMBER: '\n당첨 번호를 입력해 주세요.\n',
  INPUT_BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n',
  WINNING_STATISTICS: '\n당첨 통계\n---',
  THREE_MATCHES: '3개 일치 (5,000원) -',
  FOUR_MATCHES: '4개 일치 (50,000원) -',
  FIVE_MATCHES: '5개 일치 (1,500,000원) -',
  FIVE_BONUS_MATCHES: '5개 일치, 보너스 볼 일치 (30,000,000원) -',
  SIX_MATCHES: '6개 일치 (2,000,000,000원) -',
  RATE_OF_RETURN: (revenue) => `총 수익률은 ${revenue}입니다.`,
});
