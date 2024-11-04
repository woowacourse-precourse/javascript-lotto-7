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