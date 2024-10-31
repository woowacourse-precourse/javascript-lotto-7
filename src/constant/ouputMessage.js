import { MATCH_PRICE } from './system';

export const OUTPUT_MESSAGE = Object.freeze({
  WINNING_STATISTICS: '당첨 통계\n---\n',
  LOTTO_NUMBER: '개를 구매했습니다.',
});

export const MATCH_OUPUT_MESSAGE = Object.freeze({
  THREE: `3개 일치 (${MATCH_PRICE.THREE.toLocaleString('ko-KR')}원)`,
  FOUR: `4개 일치 (${MATCH_PRICE.FOUR.toLocaleString('ko-KR')}원)`,
  FIVE: `5개 일치 (${MATCH_PRICE.FIVE.toLocaleString('ko-KR')}원)`,
  FIVE_BONUS: `5개 일치, 보너스 볼 일치 (${MATCH_PRICE.FIVE_BONUS.toLocaleString('ko-KR')}원)`,
  SIX: `6개 일치 (${MATCH_PRICE.SIX.toLocaleString('ko-KR')}원)`,
});
