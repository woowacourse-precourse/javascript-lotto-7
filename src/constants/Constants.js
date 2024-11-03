const MESSAGES = {
  PROMPT: {
    BUY_LOTTO_COUNT: '구입금액을 입력해 주세요.',
    PICK_LOTTO_NUMBER: '당첨 번호를 입력해 주세요.',
    PICK_BONUS_NUMBER: '보너스 번호를 입력해 주세요.',
  },
  OUTPUT: {
    BUY_LOTTO_COUNT: '개를 구매했습니다.',
    WINNING_STATISTICS: `당첨 통계\n---`,
    EARNING_RATE: `총 수익률은 %입니다.`,
  },
  ERROR: {
    BUY_LOTTO_COUNT: {
      INVALID_CHARACTER: '[ERROR] 구입 금액은 숫자를 입력해야 합니다.',
      INVALID_UNIT: '[ERROR] 구입 금액은 1,000원 단위로 입력해야 합니다.',
      INVALID_SIGN: '[ERROR] 구입 금액은 양수를 입력해야 합니다.',
      INVALID_RANGE: '[ERROR] 구입 금액은 최대 구입 금액보다 적게 입력해야 합니다.',
      INVALID_SPACE: '[ERROR] 로또 구입 금액은 최소 1,000원 이상 입력해야 합니다.',
    },
    PICK_LOTTO_NUMBER: {
      INVALID_CHARACTER: '[ERROR] 당첨 번호는 쉼표(,)로 구분해야 합니다.',
      INVALID_COUNT: '[ERROR] 당첨 번호는 6개를 입력해야 합니다.',
      INVALID_RANGE: '[ERROR] 당첨 번호는 로또 번호의 숫자 범위(1~45) 안에서 입력해야 합니다.',
      DUPLICATED_NUMBER: '[ERROR] 1개의 로또를 발행할 때에는 중복되지 않는 6개의 숫자를 뽑아야 합니다.',
    },
    PICK_BONUS_NUMBER: {
      INVALID_TYPE: '[ERROR] 보너스 번호에는 정수를 입력해야 합니다.',
      INVALID_RANGE: '[ERROR] 보너스 번호는 로또 번호의 숫자 범위(1~45) 안에서 입력해야 합니다.',
      DUPLICATED_NUMBER: '[ERROR] 이미 존재하는 번호를 보너스 번호로 입력할 수 없습니다.',
    },
    LOTTO_NUMBER: {
      INVALID_COUNT: '[ERROR] 로또 번호는 6개여야 합니다.',
      DUPLICATED_NUMBER: '[ERROR] 중복된 로또 번호는 존재할 수 없습니다.',
      INVALID_RANGE: '[ERROR] 로또 번호는 숫자 범위(1~45) 안에서 존재해야 합니다.',
    },
  },
};

const WINNING_PRIZES = {
  MATCH_3: { COUNT: 3, PRIZE: 5000, MESSAGE: '3개 일치 (5,000원)' },
  MATCH_4: { COUNT: 4, PRIZE: 50000, MESSAGE: '4개 일치 (50,000원)' },
  MATCH_5: { COUNT: 5, PRIZE: 1500000, MESSAGE: '5개 일치 (1,500,000원)' },
  MATCH_5_BONUS: { COUNT: '5+', PRIZE: 30000000, MESSAGE: '5개 일치, 보너스 볼 일치 (30,000,000원)' },
  MATCH_6: { COUNT: 6, PRIZE: 2000000000, MESSAGE: '6개 일치 (2,000,000,000원)' },
};

const NUMBERS = {
  LOTTO_NUMBER: {
    START: 1,
    END: 45,
    COUNT: 6,
  },
  DIVIED_NUMBER: 1000,
};

export { MESSAGES, NUMBERS, WINNING_PRIZES };
