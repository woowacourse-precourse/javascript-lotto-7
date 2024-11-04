const INPUT_MESSAGE = {
  LOTTO_WINNING_NUMBERS: '당첨 번호를 입력해 주세요.',
  LOTTO_BONUS_NUMBER: '보너스 번호를 입력해 주세요.',
  LOTTO_PURCHASE_AMOUNT: '구입금액을 입력해 주세요.',
  TOTAL_PROFIT_RATE: (rate) => `총 수익률은 ${rate}%입니다.`,
};

const OUTPUT_MESSAGE = {
  LOTTO_PURCHASE_MESSAGE: '개를 구매했습니다.',
  LOTTO_RESULT_MESSAGE: '당첨 통계\n---',
  MATCH_3: (count) => `3개 일치 (5,000원) - ${count}개`,
  MATCH_4: (count) => `4개 일치 (50,000원) - ${count}개`,
  MATCH_5: (count) => `5개 일치 (1,500,000원) - ${count}개`,
  MATCH_5_WITH_BONUS: (count) =>
    `5개 일치, 보너스 볼 일치 (30,000,000원) - ${count}개`,
  MATCH_6: (count) => `6개 일치 (2,000,000,000원) - ${count}개`,
  TOTAL_PROFIT_RATE: (rate) => `총 수익률은 ${rate}%입니다.`,
};

const ERROR_MESSAGE = {
  INVALID_WINNING_NUMBERS_COUNT: '[ERROR] 로또 번호는 6개여야 합니다.',
  INVALID_WINNING_NUMBERS_DUPLICATE:
    '[ERROR] 로또 번호는 중복되지 않은 숫자로 이루어져야 합니다.',
  INVALID_WINNING_NUMBERS_RANGE:
    '[ERROR] 로또 번호는 1이상 45이하의 정수로 이루어져야 합니다.',
  INVALID_EMPTY_BONUS_NUMBER: '[ERROR] 보너스 번호는 반드시 입력해야 합니다.',
  INVALID_BONUS_NUMBER_COUNT: '[ERROR] 보너스 번호는 1개를 초과할 수 없습니다.',
  INVALID_BONUS_NUMBER_RANGE:
    '[ERROR] 보너스 번호는 1이상 45이하 정수이어야 합니다.',
  INVALID_BONUS_NUMBER_DUPLICATE:
    '[ERROR] 보너스 번호는 기존 당첨 번호와 중복될 수 없습니다.',
  INVALID_EMPTY_PURCHASE_AMOUNT:
    '[ERROR] 로또 구입 금액은 반드시 입력해야 합니다.',
  INVALID_PURCHASE_AMOUNT_RANGE:
    '[ERROR] 로또 구입 금액은 1,000원 이상이어야 합니다.',
  INVALID_PURCHASE_AMOUNT_DIVISIBLE_BY_THOUSAND:
    '[ERROR] 로또 구입 금액은 1,000원으로 나누어 떨어져야 합니다.',
};

export { INPUT_MESSAGE, OUTPUT_MESSAGE, ERROR_MESSAGE };
