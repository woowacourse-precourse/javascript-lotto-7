const validateNumberOnly = (winningNumber) => {
  const isNumbers = winningNumber.every((num) => Number.isInteger(num));

  if (!isNumbers) {
    throw new Error("[ERROR] 로또 번호는 정수로만 입력되어야 합니다.");
  }
};

const validateNumberRange = (winningNumber) => {
  const isInRange = winningNumber.every((num) => 1 <= num && num <= 45);

  if (!isInRange) {
    throw new Error("[ERROR] 로또 번호는 1~45 사이로 입력되어야 합니다.");
  }
};

const validateNumberLength = (winningNumber) => {
  const setNumbers = new Set(winningNumber);

  if (setNumbers.size !== winningNumber.length) {
    throw new Error("[ERROR] 로또 번호는 중복없이 입력되어야 합니다.");
  }
};

export const validateWinningNumber = (winningNumber) => {
  if (!Array.isArray(winningNumber)) {
    throw new Error("[ERROR] 잘못된 형식의 당첨 번호가 입력되었습니다.");
  }

  validateNumberOnly(winningNumber);
  validateNumberRange(winningNumber);
  validateNumberLength(winningNumber);
};
