export function purchaseAmountValidation(purchaseAmount) {
  const amount = Number(purchaseAmount.trim());
  if (isNaN(amount) || amount < 1000 || amount % 1000 !== 0) {
    throw new Error('[ERROR] 구입 금액은 1000원 단위의 숫자여야 합니다.');
  }
  return amount;
}

export function winningLottoValidation(input) {
  const numbers = input.split(',').map((num) => Number(num.trim()));
  if (
    numbers.length !== 6 ||
    numbers.some((num) => isNaN(num) || num < 1 || num > 45)
  ) {
    throw new Error('[ERROR] 당첨 번호는 1부터 45 사이의 숫자 6개여야 합니다.');
  }
  return numbers;
}

export function bonusLottoValidation(bonusNumber, winningLotto) {
  const number = Number(bonusNumber.trim());
  if (
    isNaN(number) ||
    number < 1 ||
    number > 45 ||
    winningLotto.includes(number)
  ) {
    throw new Error(
      '[ERROR] 보너스 번호는 1부터 45 사이의 숫자 중 당첨 번호와 중복되지 않아야 합니다.',
    );
  }
  return number;
}
