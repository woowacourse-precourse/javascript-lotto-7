export const INPUT_MESSAGE = {
  PURCHASE_PRICE: '구입금액을 입력해 주세요.\n',
  WINNING_NUMBER: '당첨 번호를 입력해 주세요.\n',
  BONUS_NUMBER: '보너스 번호를 입력해 주세요.\n',
};

export const OUTPUT_MESSAGE = {
  PURCHASE_COUNT: '개를 구매했습니다.',
  WINNING_STATICS: '당첨 통계\n---',
};

export const LOTTO_RANK_MAP = {
  5: { winningCount: 3, isBonusMatch: false, prizeMoney: 5_000 },
  4: { winningCount: 4, isBonusMatch: false, prizeMoney: 50_000 },
  3: { winningCount: 5, isBonusMatch: false, prizeMoney: 1_500_000 },
  2: { winningCount: 5, isBonusMatch: true, prizeMoney: 30_000_000 },
  1: { winningCount: 6, isBonusMatch: false, prizeMoney: 2_000_000_000 },
};

export const LOTTO = {
  MIN_NUMBER: 1,
  MAX_NUMBER: 45,
  NUMBER_COUNT: 6,
  PRICE: 1000,
};

export const ERROR_MESSAGE_DEFAULT = '[ERROR]';
export const ERROR_MESSAGE = {
  NOT_NUMERIC: `${ERROR_MESSAGE_DEFAULT} 숫자를 입력해주세요.`,
  NOT_THOUSAND_UNIT: `${ERROR_MESSAGE_DEFAULT} ${LOTTO.PRICE} 단위의 숫자를 입력해주세요.`,
  NOT_POSITIVE: `${ERROR_MESSAGE_DEFAULT} 양수를 입력해주세요.`,
  NOT_SIX: `${ERROR_MESSAGE_DEFAULT} 로또 번호는 ${LOTTO.NUMBER_COUNT}개여야 합니다.`,
  NOT_BETWEEN_1_AND_45: `${ERROR_MESSAGE_DEFAULT} 로또 번호는 ${LOTTO.MIN_NUMBER}과 ${LOTTO.MAX_NUMBER}사이어야 합니다.`,
  NOT_UNIQUE: `${ERROR_MESSAGE_DEFAULT} 로또 번호는 중복되면 안됩니다.`,
};
