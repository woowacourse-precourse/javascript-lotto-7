import { Random } from "@woowacourse/mission-utils";
import Prize from "../Prize.js";
import { CONSTANT_LOTTO, NUMBERS, } from "./const.js";
import EXECUTE_MESSAGE from "./messages/execute-message.js";
import { print, printEmptyLine } from "./io.js";
import { getRate } from "./util.js";
import COMMON_MESSAGES from './messages/message.js';

export const generateLottoNumbers = (count) => {
  const lottoNumberDoubleArray = [];
  for (let i = NUMBERS.ZERO; i < count; i++) {
    const lottoNumbers = getRandomLottoNumbers();
    lottoNumbers.sort((a, b) => a - b);
    lottoNumberDoubleArray.push(lottoNumbers);
  }
  return lottoNumberDoubleArray;
};

export const getRandomLottoNumbers = () => {
  return Random.pickUniqueNumbersInRange(
    CONSTANT_LOTTO.MIN_NUMBER,
    CONSTANT_LOTTO.MAX_NUMBER,
    CONSTANT_LOTTO.LENGTH
  );
};

export const loopPrintLottoNumbers = (lottoCount, lottoNumbersDoubleArray) => {
  printEmptyLine();
  print(EXECUTE_MESSAGE.LOTTO.RECEIPT(lottoCount));
  lottoNumbersDoubleArray.forEach((lottoNumbers) => {
    print(`[${lottoNumbers.join(', ')}]`);
  });
  printEmptyLine();
};

export const printResult = (lottoNumbers, bonusNumber, generatedNumbers) => {
  print(COMMON_MESSAGES.WINNING_STATISTICS);
  for (let i = NUMBERS.ZERO; i < generatedNumbers.length; i++) {
    const count = getMatchCount(generatedNumbers[i], lottoNumbers);
    increaseMatchCount(count, generatedNumbers[i].includes(bonusNumber));
  }
  Object.values(matchingNumbers).forEach((prize) => prize.printResult());

  const totalRate = calculateTotalRate(generatedNumbers.length);
  print(EXECUTE_MESSAGE.PRIZE.TOTAL_RATE(totalRate.toFixed(NUMBERS.ONE)));
};

export const getMatchCount = (generatedLotto, lottoNumbers) => {
  return generatedLotto.filter((number) => {
    const lottoNumbersSplit = lottoNumbers.split(',').map(Number);
    return lottoNumbersSplit.includes(number);
  })
    .length;
};

const increaseMatchCount = (count, hasBonus) => {
  const matchActions = {
  [NUMBERS.THREE]: () => matchingNumbers.ThreeMatch.addCount(),
  [NUMBERS.FOUR]: () => matchingNumbers.FourMatch.addCount(),
  [NUMBERS.FIVE]: () =>
      hasBonus
        ? matchingNumbers.FiveBonusMatch.addCount()
        : matchingNumbers.FiveMatch.addCount(),
  [NUMBERS.SIX]: () => matchingNumbers.SixMatch.addCount(),
  };

  if (matchActions[count]) {
    matchActions[count]();
  }
};

const calculateTotalRate = (lottoCount) => {
  const totalRate = Object.values(matchingNumbers).reduce(
    (prev, cur) => prev + cur.getPrizeCount(),
    NUMBERS.ZERO
  );
  return getRate(totalRate, CONSTANT_LOTTO.PRICE * lottoCount);
};

const matchingNumbers = {
  ThreeMatch: new Prize(3, 5000, false),
  FourMatch: new Prize(4, 50000, false),
  FiveMatch: new Prize(5, 1500000, false),
  FiveBonusMatch: new Prize(5, 30000000, true),
  SixMatch: new Prize(6, 2000000000, false),
};
