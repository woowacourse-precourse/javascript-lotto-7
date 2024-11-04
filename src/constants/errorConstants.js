const ERROR_MESSAGES = Object.freeze({
  PURCHASE_AMOUNT_IS_NOT_NUMBER: '[ERROR] 구입 금액을 숫자로 작성해주세요!',
  PURCHASE_AMOUNT_IS_NOT_DIVIDE_BY_THOUSAND:
    '[ERROR] 구입 금액이 1,000원 단위로 나누어 떨어져야 해요!',
  PURCHASE_AMOUNT_MORE_THAN_ZERO: '[ERROR] 로또를 1장 이상 구매해주세요!',
  DUPLICATE_NUMBER_IN_WINNING_NUMBER:
    '[ERROR] 당첨 숫자중에 중복된 값이 있어요!',
  DUPLICATE_NUMBER_IN_WINNING_AND_BONUS:
    '[ERROR] 당첨 숫자와 보너스 숫자 사이에 중복된 값이 있어요!',
  WINNING_NUMBER_IS_NOT_NUMBER:
    '[ERROR] 당첨 숫자로 양의 정수가 아닌 값이 들어왔어요!',
  BONUS_NUMBER_IS_NOT_NUMBER:
    '[ERROR] 보너스 숫자로 양의 정수가 아닌 값이 들어왔어요!',
  WINNING_NUMBER_OUT_OF_BOUNDS:
    '[ERROR] 당첨 숫자의 범위는 1 ~ 45 사이여야 해요!',
  BONUS_NUMBER_OUT_OF_BOUNDS:
    '[ERROR] 보너스 숫자의 범위는 1 ~ 45 사이여야 해요!',
  INVALID_LOTTO_NUMBER_COUNT: '[ERROR] 로또 번호는 6개여야 합니다.',
  DUPLICATE_NUMBER_IN_LOTTO: '[ERROR] 로또 번호에 중복된 숫자가 있어요!',
  INVALID_WINNING_NUMBER_COUNT: '[ERROR] 당첨 번호는 6개여야 합니다.',
});

export default ERROR_MESSAGES;
