export const ERROR_MESSAGES = {
  INVALID_BONUS_NUMBER_RANGE: '[ERROR] 보너스 번호 숫자 범위는 1~45 입니다.',
  INVALID_BONUS_NUMBER_INTEGER: '[ERROR] 보너스 번호는 정수만 입력 가능합니다.',
  INVALID_BONUS_NUMBER_COUNT:
    '[ERROR] 보너스 번호는 하나의 숫자만 입력 가능합니다.',
  INVALID_BONUS_NUMBER_DUPLICATE:
    '[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.',
  INVALID_LOTTO_NUMBER_LENGTH: '[ERROR] 로또 번호는 6개여야 합니다.',
  INVALID_LOTTO_NUMBER_DUPLICATE:
    '[ERROR] 로또 번호는 중복하여 입력할 수 없습니다.',
  INVALID_LOTTO_NUMBER_RANGE: '[ERROR] 로또 번호 숫자 범위는 1~45입니다.',
  INVALID_LOTTO_NUMBER_TYPE: '[ERROR] 로또 번호는 숫자만 입력 가능합니다.',
  INVALID_LOTTO_NUMBER_INTEGER: '[ERROR] 로또 번호는 정수만 입력 가능합니다.',
  INVALID_PURCHASE_AMOUNT_FORM: '[ERROR] 잘못된 구입 금액입니다.',
  INVALID_PURCHASE_AMOUNT_RANGE:
    '[ERROR] 구입 금액은 1000원 이상이어야 합니다.',
};

export const INPUT_MESSAGES = {
  INPUT_PURCHASE_AMOUNT: `구입금액을 입력해 주세요.\n`,
  INPUT_WINNING_NUMBERS: `\n당첨 번호를 입력해 주세요.\n`,
  INPUT_BONUS_NUMBER: `\n보너스 번호를 입력해 주세요.\n`,
};

export const OUTPUT_LOTTO_TICKETS = (tickets) =>
  `\n${tickets}개를 구매했습니다.`;

export const OUTPUT_WINNING_RESULT = (ranks, profitRate) => {
  return `
당첨 통계 
---
3개 일치 (5,000원) - ${ranks.fifth}개
4개 일치 (50,000원) - ${ranks.fourth}개
5개 일치 (1,500,000원) - ${ranks.third}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${ranks.second}개
6개 일치 (2,000,000,000원) - ${ranks.first}개
총 수익률은 ${profitRate}%입니다.`;
};

export const LOTTO_NUM_MAX = 45;
export const LOTTO_NUM_MIN = 1;
export const LOTTO_NUM_LENGTH = 6;
export const LOTTO_FIRST_PRIZE = 2000000000;
export const LOTTO_SECOND_PRIZE = 30000000;
export const LOTTO_THIRD_PRIZE = 1500000;
export const LOTTO_FOURTH_PRIZE = 50000;
export const LOTTO_FIFTH_PRIZE = 5000;
export const UNIT = 1000;
