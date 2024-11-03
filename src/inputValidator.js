const inputValidator = {
  checkPurchaseAmount(value) {
    this.isEmpty(value);
    this.isNumber(value);
    this.isThousandUnit(value);
    return Number(value);
  },
  isEmpty(value) {
    if (!value || !value.trim()) {
      throw new Error("[ERROR] 입력이 비어 있습니다.");
    }
  },
  isNumber(value) {
    if (isNaN(value)) {
      throw new Error("[ERROR] 입력에 숫자가 아닌 문자가 포함되어 있습니다.");
    }
  },
  isThousandUnit(value) {
    if (Number(value) % 1000 !== 0) {
      throw new Error("[ERROR] 입력이 1000원 단위가 아닙니다.");
    }
  },
};

export default inputValidator;
