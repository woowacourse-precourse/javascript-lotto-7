import throwError from "../utils/throwError.js";

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

export function winningNumbersValidate(numbers) {
  const numbersArray = numbers.split(",");
  const numbersSet = new Set(numbersArray);

  if (!numbers.trim()) {
    throwError("번호를 입력해 주세요.");
  }

  if (numbersArray.length !== 6) {
    throwError("로또 번호는 6개여야 합니다.");
  }

  if (numbersSet.size !== numbersArray.length) {
    throwError("중복된 번호가 있습니다.");
  }

  numbersArray.forEach((number) => {
    const numericValue = Number(number);

    if (isNaN(number)) {
      throwError("잘못된 입력이거나, 쉼표로 구분된 숫자열이 아닙니다.");
    }

    if (!Number.isInteger(numericValue)) {
      throwError("번호는 정수로 입력해주세요.");
    }

    if (numericValue < 1 || numericValue > 45) {
      throwError("숫자는 1 과 45 사이로 입력해주세요.");
    }
  });
}
