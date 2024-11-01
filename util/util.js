import { Random } from "@woowacourse/mission-utils";
import { CONSTANT_LOTTO } from "./const";

export const isOutOfRange = (number) =>
  number < CONSTANT_LOTTO.MIN_NUMBER || number > CONSTANT_LOTTO.MAX_NUMBER;

export const isNotANumber = (number) => Number.isNaN(+number);

export const matchedBonusNumber = (lottoNumbers, bonusNumber) =>
  lottoNumbers.includes(bonusNumber);

export const getPrize = (prize, count) => prize * count;

export const getRate = (prizePrice, purchasePrice) => {
  if (purchasePrice === 0) {
    return 0;
  }
  return (prizePrice / purchasePrice) * 100;
};

export const getReduceValue = (prizeList) =>
  prizeList.reduce((prev, cur) => prev + cur, 0);

export const generateLottoNumbers = (count) => {
  const lottoNumberDoubleArray = [];
  for (let i = 0; i < count; i++) {
    lottoNumberDoubleArray.push(Random.pickUniqueNumbersInRange(1, 45, 6));
  }
};
