export const MESSAGES = {
  PURCHASE_COUNT: (count) => `\n${count}개를 구매했습니다.`,
  LOTTO_NUMBERS: (numbers) => `[${numbers.join(', ')}]`,
  INPUT_WINNING_NUMBERS: '\n당첨 번호를 입력해 주세요.\n',
  INPUT_BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n',
  WINNING_STATISTICS: '\n당첨 통계',
  DIVIDER: '---',
  FIFTH_PRIZE: (count) => `3개 일치 (5,000원) - ${count}개`,
  FOURTH_PRIZE: (count) => `4개 일치 (50,000원) - ${count}개`,
  THIRD_PRIZE: (count) => `5개 일치 (1,500,000원) - ${count}개`,
  SECOND_PRIZE: (count) =>
    `5개 일치, 보너스 볼 일치 (30,000,000원) - ${count}개`,
  FIRST_PRIZE: (count) => `6개 일치 (2,000,000,000원) - ${count}개`,
  PROFIT_RATE: (rate) => `총 수익률은 ${rate}%입니다.`,
};

export const ERROR_MESSAGES = {
  DUPLICATE_WINNING_NUMBERS:
    '[ERROR] 당첨 번호는 6개의 서로 다른 숫자여야 합니다.',
  INVALID_WINNING_NUMBERS: '[ERROR] 당첨 번호 입력이 잘못되었습니다.',
  INVALID_BONUS_NUMBER: '[ERROR] 보너스 번호 입력이 잘못되었습니다.',
  DUPLICATE_BONUS_NUMBER:
    '[ERROR] 당첨 번호와 보너스 번호는 중복될 수 없습니다.',
};
