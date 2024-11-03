export class Validation {
  validatePurchasePrice(purchasePrice) {
    if (purchasePrice === '' || purchasePrice === ' ') {
      throw new Error('[ERROR] 값을 입력해 주세요.');
    }

    if (Number.isNaN(Number(purchasePrice)) === true) {
      throw new Error('[ERROR] 숫자를 입력해 주세요.');
    }

    if (purchasePrice === '0') {
      throw new Error('[ERROR] 1,000원이상 입력해 주세요.');
    }

    if (Number(purchasePrice) % 1000 !== 0) {
      throw new Error('[ERROR] 1,000원단위로 입력해 주세요.');
    }
  }

  validateWinningNumbers(winningNumArr) {
    if (winningNumArr.length > 6 || winningNumArr.length < 6) {
      throw new Error('[ERROR] 숫자는 6개를 입력해 주세요.');
    }

    winningNumArr.forEach((num) => {
      if (num === true) {
        throw new Error('[ERROR] 숫자를 입력해 주세요.');
      }

      if (num < 1 || num > 45) {
        throw new Error('[ERROR] 1 ~ 45 사이의 숫자를 입력해 주세요.');
      }
    });

    const set = new Set(winningNumArr);
    if (winningNumArr.length !== set.size) {
      throw new Error('[ERROR] 중복되지 않는 숫자를 입력해 주세요.');
    }
  }

  validateBonusNumber(bonusNumber, winningNumArr) {
    if (bonusNumber === '' || bonusNumber === ' ') {
      throw new Error('[ERROR] 값을 입력해 주세요.');
    }

    if (Number.isNaN(Number(bonusNumber)) === true) {
      throw new Error('[ERROR] 숫자만 입력해 주세요.');
    }

    if (Number(bonusNumber) < 1 || Number(bonusNumber) > 45) {
      throw new Error('[ERROR] 1 ~ 45 사이의 숫자를 입력해 주세요.');
    }

    winningNumArr.forEach((num) => {
      if (Number(num) === Number(bonusNumber)) {
        throw new Error('[ERROR] 당첨 번호와 중복되지 않는 숫자를 입력해 주세요.');
      }
    });
  }
}
