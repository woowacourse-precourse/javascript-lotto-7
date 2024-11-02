export function validatePurchaseAmount(purchaseAmountInput) {
  if (!purchaseAmountInput) {
    throw new Error('[ERROR] 입력이 없습니다.');
  }

  const regex = /^[0-9]*$/;
  if (!regex.test(purchaseAmountInput)) {
    throw new Error('[ERROR] 숫자 이외의 문자가 입력되었습니다.');
  }

  if (!purchaseAmountInput.endsWith('000')) {
    throw new Error('[ERROR] 로또 구입 금액은 1,000원 단위여야 합니다.');
  }
};

export function validateWinningNumber(parsedWinningNumbers) {
  if (!parsedWinningNumbers) {
    throw new Error('[ERROR] 입력이 없습니다.');
  }

  if (parsedWinningNumbers.length != 6) {
    throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
  }

  const regex = /^[0-9]*$/;
  parsedWinningNumbers.forEach((num) => {
    if (!regex.test(num)) {
      throw new Error('[ERROR] 숫자 이외의 문자가 입력되었습니다.');
    }

    if (Number(num) < 1 || Number(num) > 45) {
      throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');
    }
  });

  const winningNumbersSet = new Set(parsedWinningNumbers);
  if (parsedWinningNumbers.length != winningNumbersSet.size) {
    throw new Error('[ERROR] 로또 번호는 중복될 수 없습니다.');
  }
};

export function validateBonusNumber(bonusNumberInput) {
  if (!bonusNumberInput) {
    throw new Error('[ERROR] 입력이 없습니다.');
  }

  const regex = /^[0-9]*$/;
  if (!regex.test(bonusNumberInput)) {
    throw new Error('[ERROR] 숫자 이외의 문자가 입력되었습니다.');
  }

  if (Number(bonusNumberInput) < 1 || Number(bonusNumberInput) > 45) {
    throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');
  }
};