import { purchase } from '../constants/constants.js';
import Lotto from '../Lotto.js';
import Random from './random.js';

export const getPurchaseNums = (nums) => {
  for (let i = 0; i < nums; i++) {
    let randomNums = Random();
    randomNums.sort((a, b) => a - b);
    const lotto = new Lotto(randomNums);
    purchase.push(lotto.getNumbers());
  }
  return purchase;
};
