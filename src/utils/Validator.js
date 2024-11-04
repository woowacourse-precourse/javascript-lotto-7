// 로또 구입 금액 입력 검증 함수
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
