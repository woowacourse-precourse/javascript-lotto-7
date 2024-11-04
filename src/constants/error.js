export const COST = {
  STRING: "[ERROR] 입력한 구입 금액이 숫자가 아닙니다.",
  ZERO: "[ERROR] 입력한 구입 금액이 0입니다.",
  NEGATIVE: "[ERROR] 입력한 구입 금액이 음수입니다.",
  REMAINDER: "[ERROR] 입력한 구입 금액이 1000으로 나누어 떨어지지 않습니다.",
};

export const LOTTO_NUMBER = {
  EXCEPT_COMMA: "[ERROR] 로또 번호는 콤마 이외의 문자는 들어갈 수 없습니다.",
  LENGTH: "[ERROR] 로또 번호는 6개여야 합니다.",
  DUPLICATION: "[ERROR] 로또 번호는 중복이 있으면 안됩니다.",
  BETWEEN_1_AND_45: "[ERROR] 로또 번호는 1과 45사이에 있어야 합니다.",
};

export const BONUS_NUMBER = {
  EQUAL_WINNING_NUMBERS: "[ERROR] 보너스 번호는 당첨 번호와 같으면 안됩니다.",
};
