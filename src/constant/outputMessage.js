import { RANK_PRICE, RANK_NAME } from './system.js';

export const OUTPUT_MESSAGE = Object.freeze({
  WINNING_STATISTICS: '\n당첨 통계\n---',
  LOTTO_LENGTH: '개를 구매했습니다.',
});

export const RANK_OUTPUT_MESSAGE = Object.freeze({
  [RANK_NAME.THREE]: `${RANK_NAME.THREE}개 일치 (${RANK_PRICE[RANK_NAME.THREE].toLocaleString()}원)`,
  [RANK_NAME.FOUR]: `${RANK_NAME.FOUR}개 일치 (${RANK_PRICE[RANK_NAME.FOUR].toLocaleString()}원)`,
  [RANK_NAME.FIVE]: `${RANK_NAME.FIVE}개 일치 (${RANK_PRICE[RANK_NAME.FIVE].toLocaleString()}원)`,
  [RANK_NAME.FIVE_BONUS]: `${RANK_NAME.FIVE}개 일치, 보너스 볼 일치 (${RANK_PRICE[RANK_NAME.FIVE_BONUS].toLocaleString()}원)`,
  [RANK_NAME.SIX]: `${RANK_NAME.SIX}개 일치 (${RANK_PRICE[RANK_NAME.SIX].toLocaleString()}원)`,
});
