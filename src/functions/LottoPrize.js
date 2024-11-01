import Lotto from '../Lotto.js';

export const splitByComma = (stringInput) => {
  return stringInput.split(',');
};

export const getLottoPrizeCount = (lotto, lottoPrizeNumbers) => {
  let prizeCount = 0;
  lottoPrizeNumbers.forEach((lottoPrizeNumber) => {
    if (lotto.numbers.includes(lottoPrizeNumber)) {
      prizeCount += 1;
    }
  });
  console.log('prizeCount', prizeCount);
  return prizeCount;
};
