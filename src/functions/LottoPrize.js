import Lotto from '../Lotto.js';

export const splitByComma = (stringInput) => {
  return stringInput.split(',').map(Number);
};

export const getLottoPrizeCount = (lotto, lottoPrizeNumbers) => {
  let prizeCount = 0;

  lottoPrizeNumbers.forEach((lottoPrizeNumber) => {
    if (lotto.numbers.includes(lottoPrizeNumber)) {
      prizeCount += 1;
    }
  });

  return prizeCount;
};

const getIsBonusNumber = (lotto, lottoBonusNumber, prizeCount) => {
  if (prizeCount == 5 && lotto.numbers.includes(lottoBonusNumber)) {
    return true;
  }
  return false;
};
