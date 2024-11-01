import { LOTTO } from './constants/index.js';

export class Validator {
  validatePurchaseAmount = (purchaseAmount) => {
    if (purchaseAmount === '') {
      throw new Error('[ERROR] 구입 금액이 입력되지 않았습니다.');
    }
    if (!Number.isInteger(parseFloat(purchaseAmount))) {
      throw new Error('[ERROR] 구입 금액은 정수이어야 합니다.');
    }
    if (purchaseAmount < 1000) {
      throw new Error('[ERROR] 구입 금액은 1,000원 이상이어야 합니다.');
    }
    if (parseInt(purchaseAmount, 10) % LOTTO.UNIT_PRICE !== 0) {
      throw new Error('[ERROR] 구입 금액은 1,000원 단위여야 합니다.');
    }
  };

  validateWinningNumberString = (winningNumbersString) => {
    const regex = /^[0-9,]+$/;
    if (!regex.test(winningNumbersString)) {
      throw new Error(
        '[ERROR] 숫자와 구분자를 제외한 문자가 포함되어있습니다.',
      );
    }
  };

  validateWinningNumbers = (winningNumbers) => {
    if (winningNumbers.length !== LOTTO.NUMBER_OF_SPACE) {
      throw new Error(
        '[ERROR] 당첨 번호는 6개의 1과 45 사이의 숫자로 이루어져야 합니다.',
      );
    }
    winningNumbers.forEach((winningNumber) => {
      if (
        parseInt(winningNumber, 10) < LOTTO.MINIMUM_NUMBER ||
        parseInt(winningNumber, 10) > LOTTO.MAXIMUM_NUMBER
      ) {
        throw new Error('[ERROR] 당첨 번호가 1과 45 사이에 존재하지 않습니다.');
      }
    });
  };

  validateBonusNumber = (bonusNubmer) => {
    if (bonusNubmer === '') {
      throw new Error('[ERROR] 보너스  입력되지 않았습니다.');
    }
    if (!Number.isInteger(parseFloat(bonusNubmer))) {
      throw new Error('[ERROR] 구입 금액은 정수이어야 합니다.');
    }
    if (
      parseInt(bonusNubmer, 10) < LOTTO.MINIMUM_NUMBER ||
      parseInt(bonusNubmer, 10) > LOTTO.MAXIMUM_NUMBER
    ) {
      throw new Error('[ERROR] 보너스 번호가 1과 45 사이에 존재하지 않습니다.');
    }
    if (
      parseInt(bonusNubmer, 10) < LOTTO.MINIMUM_NUMBER ||
      parseInt(bonusNubmer, 10) > LOTTO.MAXIMUM_NUMBER
    ) {
      throw new Error('[ERROR] 보너스 번호가 1과 45 사이에 존재하지 않습니다.');
    }
  };
}
