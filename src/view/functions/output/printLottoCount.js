import { MissionUtils } from '@woowacourse/mission-utils';

import { OUTPUT } from '../../../constants/constants.js';

export const printLottoCount = (lottoCount) => {
  MissionUtils.Console.print(`\n${lottoCount}${OUTPUT.PURCHASE_COUNT}`);
};
