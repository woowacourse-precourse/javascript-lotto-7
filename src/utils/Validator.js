// 입력한 로또 구입 금액 검증 함수
export function validateBudget(budget) {
  budget = Number(budget);

  if (isNaN(budget)) {
    throw new Error("[ERROR] 금액은 숫자로 입력해야 한다.");
  }

  if (!Number.isInteger(budget) || budget <= 0) {
    throw new Error("[ERROR] 금액은 자연수로 입력해야 한다.");
  }

  if (budget % 1000 != 0) {
    throw new Error("[ERROR] 금액은 1000원 단위로 입력해야 한다.");
  }
}

// 입력한 당첨 번호들 검증 함수
export function validateWinningNumbers(winningNumbers) {
  if (winningNumbers.length !== 6) {
    throw new Error("[ERROR] 당첨 번호는 6개여야 한다.");
  }

  for (const num of winningNumbers) {
    if (isNaN(num)) {
      throw new Error("[ERROR] 당첨 번호는 숫자로만 이루어져야 한다.");
    }

    if (num < 1 || num > 45) {
      throw new Error("[ERROR] 당첨 번호는 1 이상 45 이하의 숫자여야 한다.");
    }
  }

  const uniqueNumbers = new Set(winningNumbers);
  if (uniqueNumbers.size !== winningNumbers.length) {
    throw new Error("[ERROR] 당첨 번호는 중복될 수 없다.");
  }
}

export function validateBounsNumber(bonusNumber, winningNumbers) {
  if (isNaN(bonusNumber)) {
    throw new Error("[ERROR] 보너스 번호는 숫자여야 한다.");
  }

  if (winningNumbers.includes(bonusNumber)) {
    throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없다.");
  }
}