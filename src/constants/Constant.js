const ERROR_MESSAGES = {
  MONEY_INVALID: '[ERROR] 구입금액이 문자로 입력되었습니다. 숫자로 입력해주세요.',
  MONEY_EMPTY: '[ERROR] 구입금액을 입력해주세요.',
  MONEY_UNIT: '[ERROR] 구입 금액을 1000 단위로 입력해주세요.',
  LOTTO_INVALID: '[ERROR] 당첨 번호가 문자로 입력되었습니다. 숫자와 쉼표로 입력해주세요.',
  LOTTO_EMPTY: '[ERROR] 당첨 번호를 입력해주세요.',
  LOTTO_COUNT: '[ERROR] 6개의 당첨 번호를 입력해주세요.',
  LOTTO_RANGE: '[ERROR] 1~45의 당첨 번호를 입력해주세요.',
  LOTTO_DUPLICATE: '[ERROR] 당첨 번호는 중복될 수 없습니다.',
  BONUS_INVALID: '[ERROR] 보너스 번호는 숫자만 입력해주세요.',
  BONUS_EMPTY: '[ERROR] 보너스 번호를 입력해주세요.',
  BONUS_RANGE: '[ERROR] 1~45의 보너스 번호를 입력해주세요.  ',
  BONUS_DUPLICATE: '[ERROR] 당첨 번호와 보너스 번호는 중복될 수 없습니다.',
};

export default ERROR_MESSAGES;
