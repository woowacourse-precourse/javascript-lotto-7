const ERROR_MESSAGE = Object.freeze({
  INPUT_AMOUNT:
    "[ERROR] 구입 금액은 1,000원 단위여야 하며, 1,000원으로 나누어 떨어져야 합니다.",
  WINNING_NUMBER_RANGE:
    "[ERROR] 당첨번호는 1~45 사이의 숫자로 이루어져야 합니다.",
  WINNING_NUMBER_DUP:
    "[ERROR] 당첨번호는 겹치지 않는 6개의 숫자로 이루어져야 합니다.",
  BONUS_NUMBER: "[ERROR] 보너스 번호는 1~45 사이의 숫자이어야 합니다.",
});

export default ERROR_MESSAGE;
