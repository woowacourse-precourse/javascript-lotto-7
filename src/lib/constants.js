export const INPUT_MESSAGE = {
  PURCHASE_PRICE: '구입금액을 입력해 주세요.\n',
  WINNING_NUMBER: '당첨 번호를 입력해 주세요.\n',
  BONUS_NUMBER: '보너스 번호를 입력해 주세요.\n',
};
export const OUTPUT_MESSAGE = {
  PURCHASE_COUNT: '개를 구매했습니다.\n',
  WINNING_STATICS: '당첨 통계\n---\n',
};

export const RANK_OBJECT_ARRAY = [
  {
    rank: 1,
    winningCount: 6,
    isBonusMatch: false,
    winningPrice: 2_000_000_000,
  },
  { rank: 2, winningCount: 5, isBonusMatch: true, winningPrice: 30_000_000 },
  { rank: 3, winningCount: 5, isBonusMatch: false, winningPrice: 1_500_000 },
  { rank: 4, winningCount: 4, isBonusMatch: false, winningPrice: 50_000 },
  { rank: 5, winningCount: 3, isBonusMatch: false, winningPrice: 5_000 },
];

export const ERROR_MESSAGE_DEFAULT = '[ERROR]';
export const ERROR_MESSAGE = {
  NOT_NUMERIC: `${ERROR_MESSAGE_DEFAULT} 숫자를 입력해주세요.`,
  NOT_THOUSAND_UNIT: `${ERROR_MESSAGE_DEFAULT} 1,000 단위의 숫자를 입력해주세요.`,
  NOT_POSITIVE: `${ERROR_MESSAGE_DEFAULT} 양수를 입력해주세요.`,
  NOT_SIX: `${ERROR_MESSAGE_DEFAULT} 로또 번호는 6개여야 합니다.`,
  NOT_ALL_ITEMS_NUMERIC: `${ERROR_MESSAGE_DEFAULT} 로또 번호는 숫자여야 합니다.`,
  NOT_ALL_ITEMS_BETWEEN_1_AND_45: `${ERROR_MESSAGE_DEFAULT} 로또 번호는 1과 45사이어야 합니다.`,
  NOT_ALL_ITEMS_UNIQUE: `${ERROR_MESSAGE_DEFAULT} 로또 번호는 중복되면 안됩니다.`,
};
