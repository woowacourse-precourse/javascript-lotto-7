import { Console } from '@woowacourse/mission-utils';

const printCountPurchaseAmount = (purchaseCount) => {
  Console.print(`\n${purchaseCount}개를 구매했습니다.`);
};

const printLottoList = (lottoCount, lottoList) => {
  const totalLottoList = lottoList;
  for (let i = 0; i < lottoCount; i += 1) {
    Console.print(totalLottoList[i]);
  }
  Console.print('\n');
};

const printRateOfReturn = (rateOfReturn) => {
  Console.print(`총 수익률은 ${rateOfReturn}%입니다.`);
};

export { printCountPurchaseAmount, printLottoList, printRateOfReturn };
