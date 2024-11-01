import Lotto from '../Lotto.js';

export const splitByComma = (stringInput) => {
  return stringInput.split(',').map(Number);
};

export const getLottoPrizeCount = (lotto, lottoPrizeNumbers) => {
  let lottoPrizeCount = 0;

  lottoPrizeNumbers.forEach((lottoPrizeNumber) => {
    if (lotto.numbers.includes(lottoPrizeNumber)) {
      lottoPrizeCount += 1;
    }
  });

  return lottoPrizeCount;
};

export const getIsBonusNumber = (lotto, lottoBonusNumber, lottoPrizeCount) => {
  if (lottoPrizeCount == 5 && lotto.numbers.includes(lottoBonusNumber)) {
    return true;
  }
  return false;
};
