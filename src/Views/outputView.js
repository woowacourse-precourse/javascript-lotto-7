import { Console } from '@woowacourse/mission-utils';
import { issueLottoList } from '../Models/issueLottoList.js';

const printCountPurchaseAmount = (purchaseCount) => {
  Console.print(`\n${purchaseCount}개를 구매했습니다.`);
};

const printLottoList = (lottoCount) => {
  const lottoList = issueLottoList(lottoCount);
  for (let i = 0; i < lottoCount; i += 1) {
    Console.print(lottoList[i]);
  }
  Console.print('\n');
};

export { printCountPurchaseAmount, printLottoList };
