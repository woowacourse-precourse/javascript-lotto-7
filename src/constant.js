export const THREE_MATCH_AMOUNT = 5000
export const FOUR_MATCH_AMOUNT = 50000
export const FIVE_MATCH_AMOUNT = 1500000
export const BONUS_MATCH_AMOUNT = 30000000
export const SIX_MATCH_AMOUNT = 2000000000

export const ERROR_MESSAGES = Object.freeze({
  PURCHASE_AMOUNT: '구매 금액은 숫자만 입력할 수 있습니다.',
  PURCHASE_AMOUNT_UNIT: '구매 금액은 천원 단위로 입력해 주세요.',
  MINIMUM_PURCHASE: '최소 한 장 이상 구매해 주세요.',
  WINNING_NUMBER_DUPLICATE: '당첨번호는 중복되지 않아야 합니다.',
  WINNING_NUMBER_RANGE: '당첨번호는 1과 45 사이의 숫자여야 합니다.',
  BONUS_NUMBER_TYPE: '보너스 숫자는 숫자만 입력할 수 있습니다.',
  BONUS_NUMBER_RANGE: '보너스 숫자는 1과 45 사이여야 합니다.',
  BONUS_NUMBER_DUPLICATE: '보너스 숫자는 로또 번호와 겹치지 않아야 합니다.',
});

export const PROMPTS = Object.freeze({
  PURCHASE_AMOUNT: '구매금액을 입력해 주세요.\n',
  WINNING_NUMBER: '당첨 번호를 입력해 주세요.\n',
  BONUS_NUMBER: '보너스 번호를 입력해 주세요.\n',
});