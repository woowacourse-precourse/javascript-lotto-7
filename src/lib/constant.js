export const INPUT_MESSAGE = {
  BUY_PRICE: '\n구입금액을 입력해 주세요. \n',
  WINNING_NUMBERS: '\n 당첨 번호를 입력해 주세요.\n',
  BONUS_NUMBER: '\n 보너스 번호를 입력해 주세요.\n',
};

export const OUTPUT_MESSAGE = {
  BUY_COUNT: '개를 구매했습니다.',
  WINNING_STATISTICS: '당첨 통계\n---\n',
  MATCH_THREE: '3개 일치 (5,000원)',
  MATCH_FOUR: '4개 일치 (50,000원)',
  MATCH_FIVE: '5개 일치 (1,500,000원)',
  MATCH_FIVE_BONUS: '5개 일치, 보너스 볼 일치 (30,000,000원)',
  MATCH_SIX: '6개 일치 (2,000,000,000원)',
  ROI: '총 수익률은 ',
};

export const ERROR_MESSAGE_PREFIX = '[ERROR]';

export const ERROR_MESSAGE = {
  BUY_PRICE_UNIT: `${ERROR_MESSAGE_PREFIX} 1000원 단위로 입력하셔야 합니다.`,
  INPUT_TYPE: `${ERROR_MESSAGE_PREFIX} 숫자로 입력하셔야 합니다.`,
  NUMBER_POSITIVE: `${ERROR_MESSAGE_PREFIX} 음수를 입력할 수 없습니다.`,
  WINNING_NUMBER_COUNT: `${ERROR_MESSAGE_PREFIX} 당첨 번호는 6개여야 합니다.`,
  WINNING_NUMBER_RANGE: `${ERROR_MESSAGE_PREFIX} 당첨 번호의 범위는 1~45입니다.`,
  WINNING_NUMBER_DUPLICATE: `${ERROR_MESSAGE_PREFIX} 당첨 번호는 중복될 수 없습니다.`,
  LOTTO_NUMBER_COUNT: `${ERROR_MESSAGE_PREFIX} 로또 번호는 6개여야 합니다.`,
  LOTTO_NUMBER_DUPLICATE: `${ERROR_MESSAGE_PREFIX} 로또 번호에 중복된 숫자가 있습니다.`,
};
