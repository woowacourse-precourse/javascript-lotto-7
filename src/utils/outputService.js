import { Console } from '@woowacourse/mission-utils';

export function outputPayment(amount) {
  if (amount % 1000 !== 0) return;

  Console.print(`${amount / 1000}개를 구매했습니다.`);
}

export function printLottos(lottos) {
  lottos.forEach((lotto) => {
    Console.print(`[${lotto.numbers.join(', ')}]`);
  });

  Console.print('');
}
