import { Random } from "@woowacourse/mission-utils";
import { CONSTANT_LOTTO, ONE_HUNDRED, ZERO } from "./const.js";
import { print, printEmptyLine } from "./io.js";

export const isOutOfRange = (number) =>
  number < CONSTANT_LOTTO.MIN_NUMBER || number > CONSTANT_LOTTO.MAX_NUMBER;

export const isNotANumber = (number) => Number.isNaN(+number);

export const matchedBonusNumber = (lottoNumbers, bonusNumber) =>
  lottoNumbers.includes(bonusNumber);

export const getPrize = (prize, count) => prize * count;

export const getRate = (prizePrice, purchasePrice) => {
  if (prizePrice === ZERO || purchasePrice === ZERO) {
    return ZERO;
  }
  return (prizePrice / purchasePrice) * ONE_HUNDRED;
};

export const getReduceValue = (prizeList) =>
  prizeList.reduce((prev, cur) => prev + cur, ZERO);

export const generateLottoNumbers = (count) => {
  const lottoNumberDoubleArray = [];
  for (let i = ZERO; i < count; i++) {
    const lottoNumbers = getLottoNumbers();
    lottoNumbers.sort((a, b) => a - b);
    lottoNumberDoubleArray.push(lottoNumbers);
  }
  return lottoNumberDoubleArray;
};

export const getLottoNumbers = () => {
  return Random.pickUniqueNumbersInRange(
    CONSTANT_LOTTO.MIN_NUMBER,
    CONSTANT_LOTTO.MAX_NUMBER,
    CONSTANT_LOTTO.LENGTH
  );
};

export const loopPrintLottoNumbers = (lottoNumbers) => {
  lottoNumbers.forEach(print);
  printEmptyLine();
};
