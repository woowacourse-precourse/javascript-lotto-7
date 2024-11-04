function validateUserMoney(inputMoney) {
  if (!inputMoney.trim()) {
    throw new Error('[ERROR] 금액은 공백이 아니어야 합니다.');
  }

  const userMoney = Number(inputMoney.trim());
  if (isNaN(userMoney)) {
    throw new Error('[ERROR] 금액은 숫자여야 합니다.');
  }

  if (userMoney % 1000 !== 0) {
    throw new Error(
      '[ERROR] 사용 가능한 금액은 1000으로 나누어 떨어져야 합니다.'
    );
  }

  if (userMoney <= 0) {
    throw new Error('[ERROR] 금액은 0보다 커야 합니다.');
  }

  return userMoney;
}

function validateLottoNumbers(numbers) {
  if (numbers.some((num) => num === '')) {
    throw new Error('[ERROR] 당첨 번호는 빈 값 없이 입력해야 합니다.');
  }
  if (numbers.length !== 6) {
    throw new Error('[ERROR] 당첨 번호는 6개여야 합니다.');
  }
  numbers.forEach((num) => {
    num = Number(num);
    if (num < 1 || num > 45) {
      throw new Error('[ERROR] 당첨 번호는 1에서 45 사이의 숫자여야 합니다.');
    }
    if (typeof num !== 'number' || isNaN(num)) {
      throw new Error('[ERROR] 모든 당첨 번호는 숫자여야 합니다.');
    }
  });
  if (new Set(numbers).size !== numbers.length) {
    throw new Error('[ERROR] 당첨 번호는 중복되지 않아야 합니다.');
  }
  return numbers;
}

function validateBonusNumber(bonusNumber, winningNumber) {
  bonusNumber = Number(bonusNumber);
  if (bonusNumber === '') {
    throw new Error('[ERROR] 보너스 번호는 공백일 수 없습니다.');
  }

  if (typeof bonusNumber !== 'number' || isNaN(bonusNumber)) {
    throw new Error('[ERROR] 보너스 번호는 숫자여야 합니다.');
  }
  if (bonusNumber < 1 || bonusNumber > 45) {
    throw new Error('[ERROR] 보너스 번호는 1에서 45 사이의 숫자여야 합니다.');
  }
  if (winningNumber.includes(bonusNumber)) {
    throw new Error('[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.');
  }

  const winningNumLotto = winningNumber.map(Number);
  if (winningNumLotto.includes(bonusNumber)) {
    throw new Error('[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.');
  }

  return bonusNumber;
}

export { validateUserMoney, validateLottoNumbers, validateBonusNumber };
