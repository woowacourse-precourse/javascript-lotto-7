import { Console } from '@woowacourse/mission-utils';

function lottoList(lottoList) {
  lottoList.forEach((lotto) => {
    Console.print(`[${lotto.numbers.join(', ')}]`);
  });
}

export default { lottoList };
