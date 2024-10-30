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

const validateDuplicate = (number, winningNumbers) => {
  const isDuplicate = (winningNumber) => winningNumber === number;
  if (winningNumbers.some(isDuplicate)) {
    throw new Error('[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.');
  }
}

const BonusNumberValidations = (number, winningNumbers) => {
  validateNumber(number);
  validateInteger(number);
  validateBonusNumberRange(number);
  validateDuplicate(number, winningNumbers);
};

export default BonusNumberValidations;
