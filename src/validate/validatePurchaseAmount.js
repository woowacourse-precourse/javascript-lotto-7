export default function validatePurchaseAmount(purchaseAmount) {
  if (purchaseAmount >= 1000000000) {
    throw new Error("[ERROR] 너무 큰 숫자를 입력하였습니다.\n");
  }
  if (isNaN(purchaseAmount)) {
    throw new Error("[ERROR] 숫자를 입력해 주세요.\n");
  }
  if (purchaseAmount < 1000) {
    throw new Error("[ERROR] 1000원 이상의 금액을 입력해 주세요.\n");
  }
  if (purchaseAmount % 1000 !== 0) {
    throw new Error("[ERROR] 1000원 단위로 입력해 주세요.\n");
  }
  if (purchaseAmount % 1 !== 0) {
    throw new Error("[ERROR] 정수를 입력해주세요.\n");
  }
}
