import { RANK_PRICE, RANK_NAMES } from './system.js';

export const OUTPUT_MESSAGE = Object.freeze({
  WINNING_STATISTICS: '\n당첨 통계\n---',
  LOTTO_LENGTH: '개를 구매했습니다.',
});

export const RANK_OUTPUT_MESSAGE = Object.freeze({
  [RANK_NAMES.THREE]: `${RANK_NAMES.THREE}개 일치 (${RANK_PRICE[RANK_NAMES.THREE].toLocaleString()}원)`,
  [RANK_NAMES.FOUR]: `${RANK_NAMES.FOUR}개 일치 (${RANK_PRICE[RANK_NAMES.FOUR].toLocaleString()}원)`,
  [RANK_NAMES.FIVE]: `${RANK_NAMES.FIVE}개 일치 (${RANK_PRICE[RANK_NAMES.FIVE].toLocaleString()}원)`,
  [RANK_NAMES.FIVE_BONUS]: `${RANK_NAMES.FIVE}개 일치, 보너스 볼 일치 (${RANK_PRICE[RANK_NAMES.FIVE_BONUS].toLocaleString()}원)`,
  [RANK_NAMES.SIX]: `${RANK_NAMES.SIX}개 일치 (${RANK_PRICE[RANK_NAMES.SIX].toLocaleString()}원)`,
});
