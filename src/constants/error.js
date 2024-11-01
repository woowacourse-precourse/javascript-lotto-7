const ERROR_MESSAGES = {
  EMPTY: '[ERROR] 입력값은 필수입니다. 로또 번호는 6개의 번호를 쉼표(,)를 기준으로 입력해주세요.',
  PRICE_NOT_DIVISIBLE: '[ERROR] 1000 단위의 정수만 가능합니다.',
  PRICE_NEGATIVE: '[ERROR] 구매 금액은 음수가 될 수 없습니다.',
  LENGTH_WINNING_NUMBERS: '[ERROR] 로또 번호는 6개여야 합니다.',
  LENGTH_BONUS_NUMBERS: '[ERROR] 보너스 번호는 1개로 필수값 입니다.',
  DUPLICATE_WINNING_NUMBER: '[ERROR] 로또 번호는 중복되는 값을 가질 수 없습니다.',
  DUPLICATE_BONUS_NUMBER: '[ERROR] 보너스 번호는 로또 번호와 중복되는 값을 가질 수 없습니다.',
  NOT_INTEGER: '[ERROR] 정수만 입력할 수 있습니다.',
  INVALID_NUMBER: '[ERROR] 숫자가 아닌 값은 입력할 수 없습니다.',
  INVALID_NUMBER_RANGE: '[ERROR] 로또 및 보너스 번호의 유효 범위는 1 ~ 45 입니다.',
  INVALID_PRICE_RANGE: '[ERROR] 구매금액은 1000원 이상 100000원 이하입니다.'
};

export default ERROR_MESSAGES;
