import { WINNINGS } from './constants.js';

export const INPUT_MESSAGE = Object.freeze({
  PURCHASE_PRICE: '구입금액을 입력해 주세요.\n',
  WINNING_NUMBERS: '당첨 번호를 입력해 주세요.\n',
  BONUS_NUMBER: '보너스 번호를 입력해 주세요.\n',
});

export const OUTPUT_MESSAGE = Object.freeze({
  PURCHASE_COUNT: '개를 구매했습니다.',
  WINNING_STATISTICS: '당첨 통계',
  HYPHENS: '---',
  MATCH_THREE: `3개 일치 (${WINNINGS.THREE.toLocaleString()}원) - `,
  MATCH_FOUR: `4개 일치 (${WINNINGS.FOUR.toLocaleString()}원) - `,
  MATCH_FIVE: `5개 일치 (${WINNINGS.FIVE.toLocaleString()}원) - `,
  MATCH_FIVE_BONUS: `5개 일치, 보너스 볼 일치 (${WINNINGS.FIVE_BONUS.toLocaleString()}원) - `,
  MATCH_SIX: `6개 일치 (${WINNINGS.SIX.toLocaleString()}원) - `,
  MATCH_COUNT_UNIT: '개',
  TOTAL_RETURN: '총 수익률은 ',
  PERCENTAGE_SUFFIX: '%입니다.',
});
