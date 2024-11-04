import { Console } from '@woowacourse/mission-utils';
import LottoResult from '../Lotto_modules/LottoResult.js';

function printLottos(lottos) {
  Console.print(`\n${lottos.length}개를 구매했습니다.`);
  lottos.forEach((lotto) => Console.print(`[${lotto.numbers.join(", ")}]`));
}

function printResult(result) {
  Console.print('\n당첨 통계\n---');
  Console.print(`3개 일치 (5,000원) - ${result.fifth}개`);
  Console.print(`4개 일치 (50,000원) - ${result.fourth}개`);
  Console.print(`5개 일치 (1,500,000원) - ${result.third}개`);
  Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${result.second}개`);
  Console.print(`6개 일치 (2,000,000,000원) - ${result.first}개`);
}

function printRate(result, purchaseAmount) {
  const earningsRate = LottoResult.calculateEarningsRate(result, purchaseAmount);
  Console.print(`\n총 수익률은 ${earningsRate}%입니다.`);
}

export { printLottos, printResult, printRate };
