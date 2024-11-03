const validateNumberOnly = (inputMoney) => {
  const reg = /^[0-9]+$/;

  if (!reg.test(inputMoney)) {
    throw new Error("[ERROR] 입력 금액은 정수로만 입력되어야 합니다.");
  }
};

const validatePositiveNum = (inputMoney) => {
  if (inputMoney <= 0) {
    throw new Error("[ERROR] 입력 금액은 0이 넘는 금액이 입력되어야 합니다.");
  }
};

const validateMoneyUnit = (inputMoney) => {
  const isUnitMoney = inputMoney % 1000 === 0;

  if (!isUnitMoney) {
    throw new Error("[ERROR] 입력 금액은 1000원 단위로 입력되어야 합니다.");
  }
};

export const validateInputMoney = (inputMoney) => {
  validateNumberOnly(inputMoney);
  validatePositiveNum(inputMoney);
  validateMoneyUnit(inputMoney);
};
