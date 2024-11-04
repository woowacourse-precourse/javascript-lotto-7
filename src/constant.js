export const ERROR_MESSAGE = {
  OUT_OF_RANGE_ERROR: '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.',
  NOT_NUM_ERROR: '[ERROR] 숫자만 입력 가능합니다.',
  LOTTO_NUM_FORMAT_ERROR:
    '[ERROR] 로또 번호 6개를 쉼표로 구분하여 입력해야 합니다.',
  LOTTO_AMOUNT_UNIT_ERROR: '[ERROR] 로또 구입 금액은 1000원 단위여야 합니다.',
  BONUS_NUM_NOT_UNIQUE_ERROR:
    '[ERROR] 보너스 번호는 당첨 번호에 포함되지 않아야 합니다.',
  LOTTO_NUM_NOT_UNIQUE_ERROR: '[ERROR] 로또 번호는 중복되지 않아야 합니다.',
};

export const INPUT_MESSAGE = {
  INPUT_LOTTO_AMOUNT: '구입금액을 입력해 주세요.\n',
  INPUT_LOTTO_NUMBERS: '\n당첨 번호를 입력해 주세요.\n',
  INPUT_BONUS_NUMBERS: '\n보너스 번호를 입력해 주세요.\n',
};

export const OUTPUT_MESSAGE = {
  LOTTO_CNT: (cnt) => `\n${cnt}개를 구매했습니다.`,
  HEADER: `\n당첨 통계\n---`,
  MATCH_3: (cnt) => `3개 일치 (5,000원) - ${cnt}개`,
  MATCH_4: (cnt) => `4개 일치 (50,000원) - ${cnt}개`,
  MATCH_5: (cnt) => `5개 일치 (1,500,000원) - ${cnt}개`,
  MATCH_BONUS: (cnt) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${cnt}개`,
  MATCH_6: (cnt) => `6개 일치 (2,000,000,000원) - ${cnt}개`,
  TOTAL_RETURN: (rate) => `총 수익률은 ${rate}%입니다.`,
};

export const PRIZE = {
  3: 5000,
  4: 50000,
  5: 1500000,
  bonus: 30000000,
  6: 2000000000,
};
