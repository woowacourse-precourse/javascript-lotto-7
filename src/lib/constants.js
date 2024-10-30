export const INPUT_MESSAGE = {
  PURCHASE_PRICE: '구입금액을 입력해 주세요.\n',
  WINNING_NUMBER: '당첨 번호를 입력해 주세요.\n',
  BONUS_NUMBER: '보너스 번호를 입력해 주세요.\n',
};
export const OUTPUT_MESSAGE = {
  PURCHASE_COUNT: '개를 구매했습니다.\n',
  WINNING_STATICS: '당첨 통계\n---\n',
};
export const WINNING_PRICE_OBJECT = {
  3: 5_000,
  4: 50_000,
  5: 1_500_000,
  5_1: 30_000_000,
  6: 2_000_000_000,
};
export const ERROR_MESSAGE_DEFAULT = '[ERROR]';
export const ERROR_MESSAGE = {
  NOT_NUMERIC: `${ERROR_MESSAGE_DEFAULT} 숫자를 입력해주세요.`,
  NOT_THOUSAND_UNIT: `${ERROR_MESSAGE_DEFAULT} 1,000 단위의 숫자를 입력해주세요.`,
  NOT_POSITIVE: `${ERROR_MESSAGE_DEFAULT} 양수를 입력해주세요.`,
};
