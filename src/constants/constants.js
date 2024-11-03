import deepFreeze from '../utils/deepFreeze.js';

const constants = deepFreeze({
  LOTTO: {
    PRICE: 1000,
    NUMBER: {
      MIN: 1,
      MAX: 45,
      LENGTH: 6,
      FIVE_MATCH: 5,
    },
    PRIZE: {
      THREE: 5000,
      FOUR: 50000,
      FIVE: 1500000,
      BONUS: 30000000,
      SIX: 2000000000,
    },
    MESSAGE: {
      MATCH: {
        THREE: '3개 일치',
        FOUR: '4개 일치',
        FIVE: '5개 일치',
        BONUS: '5개 일치, 보너스 볼 일치',
        SIX: '6개 일치',
      },
    },
    WINNING_RESULTS: [
      { match: 'THREE', count: 3 },
      { match: 'FOUR', count: 4 },
      { match: 'FIVE', count: 5 },
      { match: 'BONUS', count: 'bonus' },
      { match: 'SIX', count: 6 },
    ],
  },
  ERROR: {
    NUMBER: {
      FORMAT: '[ERROR] 숫자 형식이 아닙니다.',
      POSITIVE: '[ERROR] 양수를 입력해주세요.',
      UNIT: '[ERROR] 1000원 단위로 입력해주세요.',
    },
    LOTTO: {
      LENGTH: '[ERROR] 로또 번호는 6개여야 합니다.',
      DUPLICATE: '[ERROR] 로또 번호는 중복될 수 없습니다.',
      RANGE: '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.',
      COMMA: '[ERROR] 쉼표(,)로 구분된 숫자를 입력해 주세요.',
      BONUS_DUPLICATE: '[ERROR] 보너스 번호는 당첨번호와 중복될 수 없습니다.',
    },
  },
  MESSAGE: {
    INPUT: {
      PURCHASE: '구입금액을 입력해 주세요.\n',
      WINNING: '\n당첨 번호를 입력해 주세요.\n',
      BONUS: '\n보너스 번호를 입력해주세요.\n',
    },
    OUTPUT: {
      PURCHASE: '개를 구매했습니다.',
      STATISTICS: '당첨 통계',
      DIVIDER: '---',
      RATE: '총 수익률은 ',
      RATE_UNIT: '%입니다.',
    },
  },
});

export default constants;
