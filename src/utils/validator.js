export function purchaseError(money) {
  if (isNaN(money)) {
    throw new Error("[ERROR] 금액은 숫자로 입력해야 합니다.");
  }
  if (money % 1000 !== 0) {
    throw new Error("[ERROR] 로또 구매는 1,000원 단위로만 가능합니다.");
  }
  if (money <= 0) {
    throw new Error("[ERROR] 금액은 0원 이상이어야 합니다.");
  }
}
