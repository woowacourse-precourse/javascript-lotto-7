import { MagicNumber } from './MagicNumber.js';
import formatNum from '../util/formatNum.js';

export const IOMessage = Object.freeze({
  PRICE_INPUT: '구입금액을 입력해 주세요. \n',
  PURCHASED_COUNT: count => `\n${count / 1000}개를 구매했습니다.\n`,
  LOTTO_INPUT: '\n당첨 번호를 입력해 주세요.\n',
  BONUS_NUM_INPUT: '\n보너스 번호를 입력해 주세요.\n',

  WIN_STATISTICS: '\n당첨 통계\n---',
  MATCH_3: count => `3개 일치 (${formatNum(MagicNumber.MATCH_3_PRIZE)}원) - ${count}개`,
  MATCH_4: count => `4개 일치 (${formatNum(MagicNumber.MATCH_4_PRIZE)}원) - ${count}개`,
  MATCH_5: count => `5개 일치 (${formatNum(MagicNumber.MATCH_5_PRIZE)}원) - ${count}개`,
  MATCH_5_BONUS: count =>
    `5개 일치, 보너스 볼 일치 (${formatNum(MagicNumber.MATCH_5_BONUS_PRIZE)}원) - ${count}개`,
  MATCH_6: count => `6개 일치 (${formatNum(MagicNumber.MATCH_6_PRIZE)}원) - ${count}개`,
  PROFIT_RATE: rate => `총 수익률은 ${rate}%입니다.`,
});
