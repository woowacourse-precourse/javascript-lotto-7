import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from '../entities/Lotto.js';

/**
 * @example
 * console.log(
 * MockLottoGenerator([
 *   [1, 2, 3, 4, 5, 6],
 *   [7, 8, 9, 10, 11, 12],
 * ]),
 * );
 */
export const MockLottoGenerator = (lottoNumbers) => {
  const lotto = lottoNumbers;
  lotto.forEach((element) => {
    MissionUtils.Console.print(`[${element.join(', ')}]`);
  });
  return lotto.map((element) => new Lotto(element));
};
