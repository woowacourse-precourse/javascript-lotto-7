export function purchaseAmountValidation(purchaseAmount) {
  if (!purchaseAmount.trim()) throw '구매금액은 1000단위의 숫자만 입력해주세요';
  if (!isNaN(purchaseAmount)) throw '구매금액은 1000단위의 숫자만 입력해주세요';
  if (Number(purchaseAmount) % 1000)
    throw '구매금액을 1000 단위로 입력해주세요';

  return Number(purchaseAmount) / 1000;
}
