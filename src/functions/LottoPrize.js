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

export const setLottoPrizeRank = (
  lottoPrizeCount,
  LottoPrizeList,
  isBonusNumber,
) => {
  const result = LottoPrizeList.map((lottoPrize) => {
    if (lottoPrizeCount === 5 && isBonusNumber) {
      return {
        ...lottoPrize,
        count: lottoPrize.count + 1,
      };
    } else if (lottoPrize.id === lottoPrizeCount) {
      return {
        ...lottoPrize,
        count: lottoPrize.count + 1,
      };
    }
    return lottoPrize;
  });

  return result;
};
