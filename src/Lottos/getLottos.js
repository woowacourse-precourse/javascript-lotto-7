import { Console, Random } from '@woowacourse/mission-utils';

export const getLottos = (num) => {
  const lottos = [];

  Console.print('\n' + num + '개를 구매했습니다.');

  for (let i = 1; i <= num; i++) {
    const lotto = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
      (a, b) => a - b
    );
    lottos.push(lotto);
    Console.print(lotto);
  }
  return lottos;
};
