import { CONFIG } from './index.js';

export const MESSAGES = Object.freeze({
  moneyInput: '구입금액을 입력해 주세요.\n',
  mainNumbers: '\n당첨 번호를 입력해 주세요.\n',
  bonusNumber: '\n보너스 번호를 입력해 주세요.\n',
  prizeStatistics: '\n당첨 통계\n---',
  howManyBought: (count) => `${count}개를 구매했습니다.`,
  wrapNumbers: (numbers) => `[${numbers.join(CONFIG.numbersOutputDelimiter)}]`,
  earningsRateIs: (earningsRate) => `총 수익률은 ${earningsRate}%입니다.`,
});

export const PRIZE_MESSAGES = Object.freeze({
  fifth: '3개 일치 (5,000원) - ',
  fourth: '4개 일치 (50,000원) - ',
  third: '5개 일치 (1,500,000원) - ',
  second: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  first: '6개 일치 (2,000,000,000원) - ',
  howManyMatchAndCount: (ranking, count) => `${PRIZE_MESSAGES[ranking]}${count}개`,
});
