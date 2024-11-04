import { MissionUtils } from '@woowacourse/mission-utils';

import { INPUT } from '../../../constants/constants.js';

export const inputLottoNumber = async () => {
  const lottoNumber = await MissionUtils.Console.readLineAsync(INPUT.LOTTO_NUMBER);

  return lottoNumber;
};

export const inputBonusNumber = async () => {
  const bonusNumber = await MissionUtils.Console.readLineAsync(INPUT.BONUS_NUMBER);

  return bonusNumber;
};
