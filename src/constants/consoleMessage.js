import { MATCH_COUNTS_BY_RANK } from './constraints.js';

export const INPUT = Object.freeze({
  PURCHASE_COST_PROMPT: '구입금액을 입력해 주세요\n',
  WINNING_NUMBERS_PROMPT: '\n당첨 번호를 입력해 주세요.\n',
  BONUS_NUMBER_PROMPT: '\n보너스 번호를 입력해 주세요.\n',
});

export const OUTPUT = Object.freeze({
  WINNING_STATISTICS_TITLE: '\n당첨 통계',
  WINNING_STATISTICS_SEPARATOR: '---',
  MATCH_COUNT_FIFTH_PRIZE: (count) =>
    `${MATCH_COUNTS_BY_RANK.FIFTH}개 일치 (5,000원) - ${count}개`,
  MATCH_COUNT_FOURTH_PRIZE: (count) =>
    `${MATCH_COUNTS_BY_RANK.FOURTH}개 일치 (50,000원) - ${count}개`,
  MATCH_COUNT_THIRD_PRIZE: (count) =>
    `${MATCH_COUNTS_BY_RANK.SECOND}개 일치 (1,500,000원) - ${count}개`,
  MATCH_COUNT_SECOND_PRIZE: (count) =>
    `${MATCH_COUNTS_BY_RANK.SECOND}개 일치, 보너스 볼 일치 (30,000,000원) - ${count}개`,
  MATCH_COUNT_FIRST_PRIZE: (count) =>
    `${MATCH_COUNTS_BY_RANK.FIRST}개 일치 (2,000,000,000원) - ${count}개`,
  TOTAL_EARNINGS_RATIO: (ratio) => `총 수익률은 ${ratio}%입니다.`,
});
