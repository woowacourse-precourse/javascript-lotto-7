import { Random } from "@woowacourse/mission-utils";
import { CONSTANT_LOTTO, ZERO } from "./const.js";

export const isOutOfRange = (number) =>
  number < CONSTANT_LOTTO.MIN_NUMBER || number > CONSTANT_LOTTO.MAX_NUMBER;

export const isNotANumber = (number) => Number.isNaN(+number);

export const matchedBonusNumber = (lottoNumbers, bonusNumber) =>
  lottoNumbers.includes(bonusNumber);

export const getPrize = (prize, count) => prize * count;

export const getRate = (prizePrice, purchasePrice) => {
  if (prizePrice === 0 || purchasePrice === 0) {
    return 0;
  }
  return (prizePrice / purchasePrice) * 100;
};

export const getReduceValue = (prizeList) =>
  prizeList.reduce((prev, cur) => prev + cur, 0);

export const generateLottoNumbers = (count) => {
  const lottoNumberDoubleArray = [];
  for (let i = ZERO; i < count; i++) {
    const lottoNumbers = getLottoNumbers();
    lottoNumberDoubleArray.push(lottoNumbers);
  }
  return lottoNumberDoubleArray;
};

export const getLottoNumbers = () => {
  const lottoNumbers = Random.pickUniqueNumbersInRange(
    CONSTANT_LOTTO.MIN_NUMBER,
    CONSTANT_LOTTO.MAX_NUMBER,
    CONSTANT_LOTTO.LENGTH
  );
  lottoNumbers.sort((a, b) => a - b);
  return lottoNumbers;
};
