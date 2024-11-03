export const PROGRESS_MESSAGE = Object.freeze({
  ENTER_PURCHASE_AMOUNT: '구입금액을 입력해 주세요.',
  ENTER_WINNING_NUMBERS: '당첨 번호를 입력해 주세요.',
  ENTER_BONUS_NUMBER: '보너스 번호를 입력해 주세요.',
  PURCHASE_RESULT: '개를 구매했습니다.',
  WINNING_RESULT: '당첨 통계\n---',
});

export const LOTTO_RESULT_MESSAGES = Object.freeze({
  FIRST: '6개 일치 (2,000,000,000원) - ',
  SECOND: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  THIRD: '5개 일치 (1,500,000원) - ',
  FOURTH: '4개 일치 (50,000원) - ',
  FIFTH: '3개 일치 (5,000원) - ',
});

export const ERROR_MESSAGES = Object.freeze({
  INVALID_THOUSAND_UNIT: '[ERROR] 구매 금액은 1000원 단위여야 합니다.',
  EMPTY_INPUT: '[ERROR] 입력값이 없습니다.',
  NON_NUMERIC_INPUT: '[ERROR] 숫자로 입력해야 합니다.',
  INVALID_COMMA_FORMAT: '[ERROR] 구분자가 잘못되었습니다.',
  INCORRECT_NUMBER_COUNT: '[ERROR] 로또 번호는 6개여야 합니다.',
  DUPLICATE_NUMBER: '[ERROR] 중복되는 번호가 존재합니다.',
  NON_POSITIVE_INTEGER: '[ERROR] 모든 숫자는 양의 정수여야 합니다.',
  NUMBER_OUT_OF_RANGE: '[ERROR] 모든 숫자는 1부터 45 사이여야 합니다.',
  DUPLICATE_BONUS_NUMBER: '[ERROR] 당첨번호와 중복되는 번호입니다.',
});
