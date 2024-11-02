import { FIVE_BONUS_KEY } from './lottoConstants.js';

const PRINT_MESSAGES = Object.freeze({
  INPUT: Object.freeze({
    AMOUNT: '구입금액을 입력해 주세요.',
    WINNING_NUMBERS: '\n당첨 번호를 입력해 주세요.',
    BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.',
  }),
  OUTPUT: Object.freeze({
    LOTTO_COUNT: (count) => `\n${count}개를 구매했습니다.`,
    STATISTICS_HEADER: '\n당첨 통계\n---',
    RETURN_RATE: (rate) => `총 수익률은 ${rate}%입니다.`,
  }),
});

const ERROR_MESSAGES = Object.freeze({
  INVALID_AMOUNT_INPUT: '[ERROR] 금액은 숫자만 입력 가능합니다.',
  INVALID_AMOUNT_RANGE: '[ERROR] 금액은 1000원 이상 100000원 이하로 입력 가능합니다.',
  INVALID_AMOUNT_UNIT: '[ERROR] 금액은 1000원 단위로 입력 가능합니다.',
  INVALID_WINNING_NUMBER_INPUT:
    '[ERROR] 당첨 번호는 숫자만 입력 가능하며 쉼표(,)를 기준으로 구분합니다.',
  INVALID_BONUS_NUMBER_INPUT: '[ERROR] 보너스 번호는 숫자만 입력 가능합니다.',
  INVALID_LOTTO_RANGE: '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.',
  DUPLICATE_BONUS_NUMBER: '[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.',
  DUPLICATE_WINNING_NUMBER: '[ERROR] 당첨 번호는 중복된 숫자를 포함할 수 없습니다.',
  INVALID_LOTTO_NUMBER_COUNT: '[ERROR] 로또 번호는 6개여야 합니다.',
  EMPTY_INPUT: '[ERROR] 입력값이 비어 있습니다. 값을 입력해 주세요.',
});

const STATISTICS_MESSAGES = Object.freeze({
  THREE: { message: '3개 일치 (5,000원)', key: 3 },
  FOUR: { message: '4개 일치 (50,000원)', key: 4 },
  FIVE: { message: '5개 일치 (1,500,000원)', key: 5 },
  FIVE_BONUS: { message: '5개 일치, 보너스 볼 일치 (30,000,000원)', key: FIVE_BONUS_KEY },
  SIX: { message: '6개 일치 (2,000,000,000원)', key: 6 },
});

export { PRINT_MESSAGES, ERROR_MESSAGES, STATISTICS_MESSAGES };
