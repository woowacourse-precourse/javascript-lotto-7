const ERROR_PREFIX = '[ERROR]';

export const LOTTO_ERROR = Object.freeze({
  INVALID_AMOUNT: `${ERROR_PREFIX} 1000원 단위로만 입력 해 주세요`,
  INVALID_AMOUNT_TYPE: `${ERROR_PREFIX} 숫자만 입력해주세요`,
  INVALID_MINIMUM_PRICE: `${ERROR_PREFIX} 최소 금액은 1000원 입니다`,
  INVALID_LOTTO_ISSUANCE: `${ERROR_PREFIX} 서로 다른 6개 숫자가 발행되어야 합니다`,
  INVALID_NUMBER_RANGE: `${ERROR_PREFIX} 1~45 사이의 숫자만 입력하셔야 합니다`,
  DUPLICATE_BONUS_NUMBER: `${ERROR_PREFIX} 당첨 번호와 보너스 번호는 중복 될 수 없습니다`,
});

export const MESSAGE = Object.freeze({
  INPUT: {
    GET_AMOUNT: '구입금액을 입력해 주세요.\n',
    GET_WINNING_NUMBER: '당첨 번호를 입력해 주세요.\n',
    GET_BONUS_NUMBER: '보너스 번호를 입력해 주세요.\n',
  },
  OUTPUT: {
    displayLottoCount: (ticketCount) => `${ticketCount}개를 구매했습니다.`,
    fifthPrice: (price, count) => `${LOTTO.FIFTH_PLAECE}개 일치 (${price}원) - ${count}개`,
    fourthPrice: (price, count) => `${LOTTO.FOURTH_PLACE}개 일치 (${price}원) - ${count}개`,
    thirdPrice: (price, count) => `${LOTTO.THIRD_PLACE}개 일치 (${price}원) - ${count}개`,
    secondPrice: (price, count) => `${LOTTO.SECOND_PLACE}개 일치, 보너스 볼 일치 (${price}원) - ${count}개`,
    firstPrice: (price, count) => `${LOTTO.FIRST_PLACE}개 일치 (${price}원) - ${count}개`,
  },
});

export const LOTTO = Object.freeze({
  PRICE: 1000,
  WINNING_COUNT: 6,
  BONUS_COUNT: 1,
  MINIMUM_NUMBER: 1,
  MAXIMUM_NUMBER: 45,
  NUMBER_REGEX: /^[0-9]*$/,
  FIRST_PLACE: 6,
  SECOND_PLACE: 5,
  THIRD_PLACE: 5,
  FOURTH_PLACE: 4,
  FIFTH_PLACE: 3,
});

export const LOTTO_RANKS = Object.freeze({
  FIRST: 1,
  SECOND: 2,
  THIRD: 3,
  FOURTH: 4,
  FIFTH: 5,
  NONE: 6,
});

export const LOTTO_PRICE = Object.freeze({
  [LOTTO_RANKS.FIRST]: 2000000000,
  [LOTTO_RANKS.SECOND]: 30000000,
  [LOTTO_RANKS.THIRD]: 1500000,
  [LOTTO_RANKS.FOURTH]: 50000,
  [LOTTO_RANKS.FIFTH]: 5000,
  [LOTTO_RANKS.NONE]: 0,
});

export const INITIAL_LOTTO_RESULT = Object.freeze({
  [LOTTO_RANKS.FIRST]: 0,
  [LOTTO_RANKS.SECOND]: 0,
  [LOTTO_RANKS.THIRD]: 0,
  [LOTTO_RANKS.FOURTH]: 0,
  [LOTTO_RANKS.FIFTH]: 0,
  [LOTTO_RANKS.NONE]: 0,
});
