import { MissionUtils } from '@woowacourse/mission-utils';

import { INPUT } from '../../../constants/constants.js';

export const inputLottoBuy = async () => {
  const purchasePrice = await MissionUtils.Console.readLineAsync(INPUT.PURCHASE_PRICE);

  return purchasePrice;
};
