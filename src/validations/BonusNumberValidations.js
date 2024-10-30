const validateNumber = (number) => {
  if (isNaN(number)) {
    throw new Error('[ERROR] 보너스 번호가 숫자가 아닙니다. 다시 입력해주세요.');
  }
}

const validateInteger = (number) => {
  if (!Number.isInteger(number)) {
    throw new Error('[ERROR] 보너스 번호가 정수가 아닙니다. 다시 입력해주세요.');
  }
}

const validateBonusNumberRange = (number) => {
  if (number < 1 || number > 45) {
    throw new Error('[ERROR] 보너스 번호는 1 이상 45 이하의 숫자로 입력해 주세요.');
  }
}

const validateDuplicate = (number) => {
  // TODO: 당첨 번호에 있는 숫자들과 중복되는지 확인
}

const BonusNumberValidations = (number) => {
  validateNumber(number);
  validateInteger(number);
  validateBonusNumberRange(number);
  validateDuplicate(number);
};

export default BonusNumberValidations;
