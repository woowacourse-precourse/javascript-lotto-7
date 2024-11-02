import { Console } from '@woowacourse/mission-utils';
import { LOG_MESSAGE } from '../constants/message.js'; 

const getPurchaseAmount = () => Console.readLineAsync(LOG_MESSAGE.START_MESSAGE); 

export { 
  getPurchaseAmount,
};