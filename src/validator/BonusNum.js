const validateNumberOnly = (bonusNumber) => {
  if (!Number.isInteger(bonusNumber)) {
    throw new Error("[ERROR] 로또 번호는 정수로만 입력되어야 합니다.");
  }
};

const validateNumberRange = (bonusNumber) => {
  if (bonusNumber < 1 || bonusNumber > 45) {
    throw new Error("[ERROR] 로또 번호는 1~45 사이로 입력되어야 합니다.");
  }
};

export const validateBonusNumber = (bonusNumber) => {
  validateNumberOnly(bonusNumber);
  validateNumberRange(bonusNumber);
};
