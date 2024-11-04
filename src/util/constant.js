const INPUT = Object.freeze({
  PURCHASE_AMOUNT: '구입금액을 입력해 주세요.\n',
  WINNING_NUMBERS: '\n당첨 번호를 입력해 주세요.\n',
  BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n',
});

const OUTPUT = Object.freeze({
  PURCHASED_TICKETS: (input) => `\n${input}개를 구매했습니다.`,
});

const LOTTO = Object.freeze({
  PRICE: 1000,
  COUNT: 6,
  MIN_NUMBER: 1,
  MAX_NUMBER: 45,
});

const PRIZE = Object.freeze({
  FIFTH_PLACE: 5000,
  FOURTH_PLACE: 50000,
  THIRD_PLACE: 1500000,
  SECOND_PLACE: 30000000,
  FIRST_PLACE: 2000000000,
});

const ERROR = Object.freeze({
  INVALID_AMOUNT: '[ERROR] 구입 금액은 1,000원 단위여야 합니다.',
  EMPTY_QUERY: '[ERROR] 값을 입력해야 합니다.',
  INVALID_INPUT: '[ERROR] 숫자만 입력해야 합니다.',
  INVALID_LOTTO_COUNT: '[ERROR] 로또 번호는 6개여야 합니다.',
  INVALID_LOTTO_NUMBERS: '[ERROR] 로또 번호는 1 ~ 45 사이여야 합니다.',
  DUPLICATE_LOTTO_NUMBERS: '[ERROR] 당첨번호에 보너스 번호가 존재합니다.',
  NUMBER_EXISTS: '[ERROR] 중복되는 번호가 존재합니다',
  INVALID_LOTTO_NUMBERS_INPUT: '[ERROR] 입력한 로또 번호들이 문자열이 아닙니다.',
});

const CONDITION = Object.freeze({
  FIRST_PLACE: 6,
  THIRD_PLACE: 5,
  FOURTH_PLACE: 4,
  FIFTH_PLACE: 3,
});

const RESULT = (position) => {
  return `\n당첨 통계
---
3개 일치 (5,000원) - ${position.fifth}개
4개 일치 (50,000원) - ${position.fourth}개
5개 일치 (1,500,000원) - ${position.third}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${position.second}개
6개 일치 (2,000,000,000원) - ${position.first}개`;
};

const PRIZE_RATE = (rate) => {
  return `총 수익률은 ${rate}%입니다.`;
};

export {
  INPUT,
  OUTPUT,
  LOTTO,
  PRIZE,
  ERROR,
  CONDITION,
  RESULT,
  PRIZE_RATE,
};