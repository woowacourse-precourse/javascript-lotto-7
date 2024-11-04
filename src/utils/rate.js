import { Console } from '@woowacourse/mission-utils';
import { getInputBuyCashValue, LOTTO_RESULT, resultNums } from '../constants/constants.js';
import { IO_MESSAGE } from '../constants/message.js';

function Rate() {
  let total = 0;
  for (let [key, value] of resultNums) {
    if (LOTTO_RESULT.has(key)) {
      total += value * LOTTO_RESULT.get(key);
    }
  }
  
  let rate = (total / getInputBuyCashValue()) * 100;
  rate = rate.toFixed(1);
  rate = Number(rate).toLocaleString();

  Console.print(IO_MESSAGE.OUTPUT_RATE(rate));
  return;
}
export default Rate;
