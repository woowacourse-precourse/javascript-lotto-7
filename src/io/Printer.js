import { Console } from '@woowacourse/mission-utils';
import { CONFIG } from '../constants/index.js';

export const print = (query) => {
  Console.print(query);
};

export const printNewline = () => {
  Console.print(CONFIG.newline);
};
