import { Console, Random } from '@woowacourse/mission-utils';

export const getLotto = (num) => {
  const lottos = [];

  for (let i = 1; i <= num; i++) {
    const lotto = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
      (a, b) => a - b
    );
    lottos.push(lotto);
    Console.print(lotto);
  }
};
