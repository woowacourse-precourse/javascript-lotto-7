const Errors = {
  cost: { NOT_CORRECT_UNIT: "[ERROR] 구매 금액은 1000원 단위여야 합니다." },
  lotto: {
    NOT_SIX_NUMBER: "[ERROR] 로또 번호는 6개여야 합니다.",
    NOT_UNIQUE_NUMBER: "[ERROR] 로또 번호는 중복될 수 없습니다.",
    NOT_VALID_RANGE: "[ERROR] 로또 번호가 1과 45 사이의 범위여야 합니다.",
    NOT_NUMBER: "[ERROR] 로또 번호가 숫자여야 합니다.",
  },
  bonusNumber: {
    NOT_INTEGER_NUMBER: "[ERROR] 보너스 번호가 정수가 아닙니다.",
    NOT_UNIQUE_NUMBER: "[ERROR] 보너스 번호가 당첨 번호에 포함됩니다.",
  },
};

export default Errors;
