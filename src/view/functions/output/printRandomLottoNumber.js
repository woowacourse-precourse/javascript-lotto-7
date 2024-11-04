import { MissionUtils } from '@woowacourse/mission-utils';

export const printRandomLottoNumber = (lottos) => {
  lottos.forEach((lotto) => {
    const numbers = lotto.getNumbers();

    MissionUtils.Console.print(`[${numbers.join(', ')}]`);
  });
};
