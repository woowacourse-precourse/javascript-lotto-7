import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../src/message.js';
import { validateCost } from '../src/error.js';
import { generateLottos } from '../src/Lotto.js';

export async function getCost() {
  const cost = await Console.readLineAsync(MESSAGE.ASK_COST+"\n");
  validateCost(Number(cost));
  const count = cost/1000;
  return count;
}

export async function displayLottosCount(count){
  Console.print("\n"+count+MESSAGE.COUNT_INFO);
}

export async function displayLottosNumber(count){
  const lottos = generateLottos(count);
  lottos.forEach(lotto => {
    Console.print(`[${lotto.getNumbers().join(', ')}]`);
  });
}
