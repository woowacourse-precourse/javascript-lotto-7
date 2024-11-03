export const INPUT_MESSAGE = {
  BUY_PRICE: '구입금액을 입력해 주세요.',
  WINNING_NUMBERS: '당첨 번호를 입력해 주세요.',
  BONUS_NUMBER: '보너스 번호를 입력해 주세요.',
};

export const OUTPUT_MESSAGE = {
  BUY_COUNT: '개를 구매했습니다.',
  WINNING_STATISTICS: '당첨 통계 \n ---',
};

export const ERROR_MESSAGE_PREFIX = '[ERROR]';

export const ERROR_MESSAGE = {
  BUY_PRICE_UNIT: `${ERROR_MESSAGE_PREFIX} 1000원 단위로 입력하셔야 합니다.`,
  BUY_PRICE_TYPE: `${ERROR_MESSAGE_PREFIX} 금액은 숫자로 입력하셔야 합니다.`,
  BUY_PRICE_POSITIVE: `${ERROR_MESSAGE_PREFIX} 음수를 입력할 수 없습니다.`,
};
