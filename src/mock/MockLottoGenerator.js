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
  const lottos = lottoNumbers;
  lottos.forEach((element) => {
    MissionUtils.Console.print(`[${element.join(', ')}]`);
  });
  const lotto = lottos.map((element) => new Lotto(element));
  return lotto;
};
