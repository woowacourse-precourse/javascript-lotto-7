import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../src/message.js';
import { validateCost } from '../src/error.js';

export async function getCost() {
  const cost = await Console.readLineAsync(MESSAGE.ASK_COST+"\n");
  validateCost(Number(cost));
  return cost;
}
