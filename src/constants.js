const USER_MESSAGE = Object.freeze({
  MONEY: '구입 금액을',
  WIN_NUMBERS: '로또 번호를',
  BONUS_NUMBER: '보너스 번호를',
  MONEY_INPUT: '구입금액을 입력해 주세요.\n',
  WIN_NUMBERS_INPUT: '\n당첨 번호를 입력해 주세요.\n',
  BONUS_NUMBER_INPUT: '\n보너스 번호를 입력해 주세요.\n',
  BEFORE_RESULT: '\n당첨 통계\n---',
});

const ERROR_MESSAGE = Object.freeze({
  NOT_EMPTY_INPUT: ' 입력해 주세요.',
  MONEY_IS_POSITIVE_NUMBER:
    '구입 금액은 정수 외 다른 문자열은 입력할 수 없어요.',
  MONEY_MAX_HUNDRED_THOUSAND: '로또 최대 하루 구입 금액은 10만원입니다.',
  MONEY_UNIT_THOUSAND: '구입 금액은 1000원 단위로 입력해주세요.',
  LOTTO_NUMBERS_IS_SIX: '로또 번호는 6개여야 합니다.',
  LOTTO_NUMBERS_NOT_OVERLAP: '로또 번호는 중복되면 안됩니다.',
  LOTTO_NUMBERS_IS_MIN_ONE_MAX_FORTY_FIVE:
    '로또 번호는 1부터 45 사이의 숫자여야 합니다.',
  LOTTO_NUMBER_IS_POSITIVE_NUMBER:
    '로또 번호는 숫자외 다른 문자열이 포함될 수 없습니다.',
  BONUS_NUMBER_IS_POSITIVE_NUMBER:
    '보너스 번호는 양의 정수로만 구성되어야 합니다.',
  BONUS_NUMBERS_IS_MIN_ONE_MAX_FORTY_FIVE:
    '보너스 번호는 숫자는 1부터 45 사이의 숫자여야 합니다.',
});

const FIND_NOT_NUMBER = /[^\d+]/g;
const LOTTO_PRICE = 1000;
const PERCENT_FACTOR = 100;
export {
  USER_MESSAGE,
  ERROR_MESSAGE,
  FIND_NOT_NUMBER,
  LOTTO_PRICE,
  PERCENT_FACTOR,
};
