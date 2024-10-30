function checkNumber(number) {
  if (Number.isNaN(number)) {
    throw new Error('[ERROR] 입력 번호는 숫자여야 합니다.')
  }

  if (number < 1 || number > 45) {
    throw new Error('[ERROR] 번호는 1 ~ 45 사이의 숫자여야 합니다.')
  }

  if (Math.floor(number) !== number && Math.ceil(number) !== number) {
    throw new Error('[ERROR] 번호는 양의 정수여야 합니다.')
  }
};

function checkWinNumbers(numbers) {
  numbers.forEach(number => checkNumber(number));
};

export { checkNumber, checkWinNumbers };