import throwError from "../utils/throwError";

export function purchaseAmountValidate(amount) {
  if (!amount.trim()) {
    throwError("구입 금액을 입력해 주세요.");
  }

  if (isNaN(amount)) {
    throwError("구입 금액은 숫자로만 입력해 주세요.");
  }

  const amountNumber = Number(amount);

  if (amountNumber <= 0 || amountNumber % 1000 !== 0) {
    throwError("구입 금액은 1,000원 단위의 양의 정수로 입력해 주세요.");
  }
}
