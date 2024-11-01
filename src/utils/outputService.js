import { Console } from '@woowacourse/mission-utils';

export function outputPayment(amount) {
  if (amount % 1000 !== 0) return;

  Console.print(`${amount / 1000}개를 구입했습니다.`);
}
