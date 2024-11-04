const ERROR_MESSAGE = Object.freeze({
  PURCHASE_PRICE_IS_NOT_INTEGER: '로또 구입 금액은 정수로 입력해주세요. (예: 5000)',
  PURCHASE_PRICE_IS_NOT_A_NUMBER: '로또 구입 금액은 숫자로 입력해주세요. (예: 5000)',
  PURCHASE_PRICE_IS_NEGATIVE: '로또 구입 금액은 음수가 될 수 없습니다.',
  PURCHASE_PRICE_IS_ZERO: '로또를 구입하려면 0원 이상을 입력해 주세요. (예: 5000)',
  PURCHASE_PRICE_AMOUNT_UNTI_MESSAGE: '로또 구매 금액은 1000원 단위어야 합니다.',

  INVALID_LOTTO_NUMBER_RANGE: '로또 번호는 1부터 45 사이의 숫자여야 합니다.',

  INVALID_WINNING_NUMBER_FORMAT: '당첨 번호는 쉼표(,)로 구분해서 입력해주세요.',
  INVALID_WINNING_NUMBER_COUNT: '당첨 번호는 6개만 입력해주세요.',
  WINNING_NUMBER_IS_NOT_A_NUMBER: '당첨 번호는 숫자로 입력해주세요.',
  INVALID_WINNING_NUMBER_NOT_INTEGER: '당첨 번호는 정수로 입력해주세요.',

  BONUS_NUMBER_IS_NOT_A_NUMBER: '보너스 번호는 숫자로 입력해주세요.',
  INVALID_BONUS_NUMBER_NOT_INTEGER: '보너스 번호는 정수로 입력해주세요.',
});

export default ERROR_MESSAGE;
