const validateNumberOnly = (inputMoney) => {
  const reg = /^[0-9]+$/;

  if (!reg.test(inputMoney)) {
    throw new Error("[ERROR] 입력 금액은 정수로만 입력되어야 합니다.");
  }
};

export const validateInputMoney = (inputMoney) => {
  validateNumberOnly(inputMoney);
};
