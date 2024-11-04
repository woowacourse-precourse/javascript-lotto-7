const validateNumberOnly = (winningNumber) => {
  const isNumbers = winningNumber.every((num) => Number.isInteger(num));
  if (!isNumbers) {
    throw new Error("[ERROR] 로또 번호는 정수로만 입력되어야 합니다.");
  }
};

export const validateWinningNumber = (winningNumber) => {
  validateNumberOnly(winningNumber);
};
