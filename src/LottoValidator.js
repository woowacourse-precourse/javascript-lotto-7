export function validateAmount(amount) {
    if (amount % 1000 !== 0) {
      throw new Error('[ERROR] 구입 금액은 1,000원 단위여야 합니다.');
    }
  }

  export function validateWinningNumbers(winningNumbers) {
    if (winningNumbers.length !== 6 || new Set(winningNumbers).size !== 6 || !winningNumbers.every(num => num >= 1 && num <= 45)) {
      throw new Error('[ERROR] 당첨 번호는 중복 없이 1부터 45 사이의 숫자여야 합니다.');
    }
  }

  export function validateBonusNumber(bonusNumber, winningNumbers) {
    if (isNaN(bonusNumber) || bonusNumber < 1 || bonusNumber > 45 || winningNumbers.includes(bonusNumber)) {
      throw new Error('[ERROR] 보너스 번호는 1부터 45 사이의 숫자이며, 당첨 번호와 중복되면 안 됩니다.');
    }
  }