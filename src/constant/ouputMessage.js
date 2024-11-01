import { RANK_PRICE } from './system.js';

export const OUTPUT_MESSAGE = Object.freeze({
  WINNING_STATISTICS: '\n당첨 통계\n---',
  LOTTO_LENGTH: '개를 구매했습니다.',
});

export const RANK_OUTPUT_MESSAGE = Object.freeze({
  THREE: `3개 일치 (${RANK_PRICE.THREE.toLocaleString()}원)`,
  FOUR: `4개 일치 (${RANK_PRICE.FOUR.toLocaleString()}원)`,
  FIVE: `5개 일치 (${RANK_PRICE.FIVE.toLocaleString()}원)`,
  FIVE_BONUS: `5개 일치, 보너스 볼 일치 (${RANK_PRICE.FIVE_BONUS.toLocaleString()}원)`,
  SIX: `6개 일치 (${RANK_PRICE.SIX.toLocaleString()}원)`,
});
