// 사용 시 Printer 네임스페이스로 import
import { Console } from '@woowacourse/mission-utils';
import { CONFIG } from '../constants';

export const print = (query) => {
  Console.print(query);
};

export const printNewline = () => {
  Console.print(CONFIG.newline);
};
