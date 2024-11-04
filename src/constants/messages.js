export const PROMPT_MESSAGES = Object.freeze({
  INPUT_AMOUNT: '구입금액을 입력해 주세요.\n',
  INPUT_WINNING_NUMBERS: '당첨 번호를 입력해 주세요.\n',
  INPUT_BONUS_NUMBERS: '보너스 번호를 입력해 주세요.\n',
  OUTPUT_LOTTOS: '개를 구매했습니다.',
});

export const ERROR_MESSAGES = Object.freeze({
  NON_NUMERIC_AMOUNT: '[ERROR] 구입 금액은 숫자로 입력해 주세요.',
  EMPTY_LOTTO_PRICE: '[ERROR] 구입 금액이 입력되지 않았습니다.',
  INVALID_LOTTO_PRICE: '[ERROR] 구입 금액은 1,000원 단위로 입력해 주세요.',
  INVALID_LOTTO_NUMBERS: '[ERROR] 당첨 번호를 숫자로 입력해 주세요.',
  EMPTY_LOTTO_NUMBERS: '[ERROR] 당첨 번호를 입력해 주세요.',
  INVALID_LOTTO_COUNT: '[ERROR] 로또 번호는 6개여야 합니다.',
  DUPLICATE_LOTTO_NUMBERS:
    '[ERROR] 로또 번호에 중복된 숫자를 사용하실 수 없습니다.',
});
