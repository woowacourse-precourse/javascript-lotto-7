import { MissionUtils } from '@woowacourse/mission-utils';

import {
  PURCHASE_PROMPT,
  LOTTO_PAYOUT_HEADER_PROMPT,
  BONUS_MESSAGE_SUFFIX_PROMPT,
  PAYOUT_PROMPT, PERCENTAGE_SUFFIX_PROMPT,
} from '../constants/prompts.js';

export function printLottoQuantity(lottos) {
  MissionUtils.Console.print(`${lottos.length}${PURCHASE_PROMPT}`);
}

export function printLottos(lottos) {
  lottos.forEach((lotto) => {
    MissionUtils.Console.print(lotto.getFormattedNumbers());
  });
  MissionUtils.Console.print('\n');
}

export function printPrizes(prizes) {
  MissionUtils.Console.print(LOTTO_PAYOUT_HEADER_PROMPT);

  for (const [_, prize] of Object.entries(prizes)) {
    let BONUS_MESSAGE = BONUS_MESSAGE_SUFFIX_PROMPT;

    if (prize.bonus === false) {
      BONUS_MESSAGE = '';
    }

    MissionUtils.Console.print(`${prize.matchCount}개 일치${BONUS_MESSAGE} (${prize.money.toLocaleString()}원) - ${prize.count}개`);
  }
}

export function printPayoutPercentage(payoutPercentage) {
  MissionUtils.Console.print(`${PAYOUT_PROMPT} ${payoutPercentage}${PERCENTAGE_SUFFIX_PROMPT}`);
}
