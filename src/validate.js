export function validatePurchaseAmount(amount) {
  if (amount <= 0) {
    throw new Error("[ERROR] 구입 금액은 0보다 커야합니다.");
  }
  if (amount % 1000 !== 0) {
    throw new Error("[ERROR] 구입금액이 1000원 단위로 나누어지지 않음.");
  }
}
