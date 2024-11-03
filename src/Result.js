import { Console } from '@woowacourse/mission-utils';
const prize = [2000000000, 30000000, 1500000, 50000, 5000];
const matchNum = [6, 5, 5, 4, 3];

const getEarningRate = (resultCount, purchase) => {
  const total = getTotalPrize(resultCount);
  const earningRate = ((100 * total) / purchase).toFixed(1);

  return earningRate;
};

const getTotalPrize = (resultCount) => {
  let totalPrize = 0;
  for (let i = 0; i < 5; i++) {
    totalPrize += prize[i] * resultCount[i];
  }

  return totalPrize;
};

const printResult = (resultCount, earningRate) => {
  Console.print("\n당첨 통계\n---");
  for (let i = 4; i >= 0; i--) {
    if (i == 1) {
      Console.print(`${matchNum[i]}개 일치, 보너스 볼 일치 (${prize[i].toLocaleString()}원) - ${resultCount[i]}개`);
      continue;
    }
    Console.print(`${matchNum[i]}개 일치 (${prize[i].toLocaleString()}원) - ${resultCount[i]}개`);
  }
  Console.print(`총 수익률은 ${earningRate}%입니다.`);
};

export { getEarningRate, printResult };
