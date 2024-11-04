const deepFreeze = (obj) => {
  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      deepFreeze(obj[key]);
    }
  });
  return Object.freeze(obj);
};

const MESSAGES = deepFreeze({
  INFO: {
    START_PROGRAM: '프로그램이 시작되었습니다.\n',
    PURCHASE_QUANTITY: '{count}개를 구매했습니다.',
    WINNING_STATISTICS: '당첨 통계',
    DASH_SYMBOL: '---',
    LINE_BREAK: '',
  },
  INPUT: {
    PURCHASE_AMOUNT: '구입 금액을 입력해주세요.\n',
    WINNING_NUMBERS: '당첨 번호를 입력해주세요.\n',
    BONUS_NUMBER: '보너스 번호를 입력해주세요.\n',
  },
  ERROR: {
    IS_EMPTY: '[ERROR] 입력값이 비었습니다.',
    IS_MAX_AMOUNT: '[ERROR] 10억 이하의 금액만 구매 가능합니다.',
    NOT_NUMBER: '[ERROR] 숫자를 입력해주세요.',
    NOT_NATURAL_NUMBER: '[ERROR] 자연수를 입력해주세요.',
    NOT_DIVISIBLE_BY_THOUSAND: '[ERROR] 1000의 배수를 입력해주세요.',
    NOT_LOTTO_RANGE:
      '[ERROR] 로또 당첨 번호는 1부터 45까지의 자연수를 입력해주세요.',
    NOT_WINNING_LENGTH: '[ERROR] 당첨 번호는 6개를 입력해야합니다.',
    IS_SAME_NUMBER: '[ERROR] 당첨 번호 입력에 중복된 숫자가 있습니다.',
    IS_SAME_BONUS_NUMBER:
      '[ERROR] 당첨 번호에 이미 입력된 숫자입니다. 다른 숫자를 입력해주세요.',
  },
  PRIZE: {
    MATCH_3: '3개 일치 (5,000원) - {count}개',
    MATCH_4: '4개 일치 (50,000원) - {count}개',
    MATCH_5: '5개 일치 (1,500,000원) - {count}개',
    MATCH_5_WITH_BONUS: '5개 일치, 보너스 볼 일치 (30,000,000원) - {count}개',
    MATCH_6: '6개 일치 (2,000,000,000원) - {count}개',
  },
  RATE_OF_RETURN: '총 수익률은 {rate}%입니다.',
});

export default MESSAGES;
