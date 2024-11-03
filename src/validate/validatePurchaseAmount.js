export default function validatePurchaseAmount(purchaseAmount) {
  if (isNaN(purchaseAmount)) {
    throw new Error("[ERROR] 숫자를 입력해 주세요.");
  }
  if (purchaseAmount < 1000) {
    throw new Error("[ERROR] 1000원 이상의 금액을 입력해 주세요.");
  }
  if (purchaseAmount % 1 !== 0) {
    throw new Error("[ERROR] 정수를 입력해주세요.");
  }
}
