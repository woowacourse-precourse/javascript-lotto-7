const TOTAL_EARNINGS_IS = '총 수익률은 ';
const PERCENT_IT_IS = '%입니다.';

export const MESSAGES = Object.freeze({
  moneyInput: '구입금액을 입력해 주세요.\n',
  howManyBought: '개를 구매했습니다.',
  mainNumbers: '\n당첨 번호를 입력해 주세요.\n',
  bonusNumber: '\n보너스 번호를 입력해 주세요.\n',
  winningStatistics: '\n당첨 통계\n---',
  earningsRateIs: (earningsRate) => TOTAL_EARNINGS_IS + earningsRate + PERCENT_IT_IS,
});

const COUNT = '개';

export const PRIZE_MESSAGES = Object.freeze({
  placeOf5: '3개 일치 (5,000원) - ',
  placeOf4: '4개 일치 (50,000원) - ',
  placeOf3: '5개 일치 (1,500,000원) - ',
  placeOf2: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  placeOf1: '6개 일치 (2,000,000,000원) - ',
  howManyMatchAndCount: (rankingName, count) => PRIZE_MESSAGES[rankingName] + count + COUNT,
});
