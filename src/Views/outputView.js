import { Console } from '@woowacourse/mission-utils';
import { countPurchaseAmount } from '../Models/purchasePriceUtils.js';

const printCountPurchaseAmount = (purchasePrice) => {
  const purchaseCount = countPurchaseAmount(purchasePrice);
  Console.print(`\n${purchaseCount}개를 구매했습니다.`);
};

export { printCountPurchaseAmount };
