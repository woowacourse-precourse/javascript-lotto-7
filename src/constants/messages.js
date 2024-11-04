import commaizeNumber from '../utils/commaizeNumber.js';
import { PRIZES, PRIZE_RANKS } from './prizes.js';

export const PROMPT_MSG = Object.freeze({
  PURCHASE_AMOUNT: '구입 금액을 입력해 주세요. (1,000원 단위)',
  WINNING_NUMBERS: '당첨 번호를 입력해 주세요. (쉼표로 구분)',
  BONUS_NUMBER: '보너스 번호를 입력해 주세요.',
});

export const ERROR_MSG = Object.freeze({
  INVALID_AMOUNT: '구입 금액은 1,000원 이상, 1000 단위의 숫자여야 합니다.',
  MAX_PURCHASE_AMOUNT: '구입 금액은 100,000원을 초과할 수 없습니다.',
  INVALID_NUMBER_RANGE: '로또 번호는 1부터 45 사이의 숫자여야 합니다.',
  INVALID_WINNING_NUMBERS: '로또 번호는 6개여야 합니다.',
  DUPLICATE_NUMBERS: '번호는 중복되지 않아야 합니다.',
});

export const RESULT_MSG = Object.freeze({
  LOTTO_COUNT: (count) => `${count}개를 구매했습니다.`,
  TICKET_NUMBERS: (ticket) => `[${ticket.join(', ')}]`,
  WINNING_STATS_HEADER: '당첨 통계\n---',
  MATCH_RESULT: {
    [PRIZE_RANKS.MATCH_3]: `3개 일치 (${commaizeNumber(PRIZES[PRIZE_RANKS.MATCH_3])}원)`,
    [PRIZE_RANKS.MATCH_4]: `4개 일치 (${commaizeNumber(PRIZES[PRIZE_RANKS.MATCH_4])}원)`,
    [PRIZE_RANKS.MATCH_5]: `5개 일치 (${commaizeNumber(PRIZES[PRIZE_RANKS.MATCH_5])}원)`,
    [PRIZE_RANKS.MATCH_5_PLUS_BONUS]: `5개 일치, 보너스 볼 일치 (${commaizeNumber(PRIZES[PRIZE_RANKS.MATCH_5_PLUS_BONUS])}원)`,
    [PRIZE_RANKS.MATCH_6]: `6개 일치 (${commaizeNumber(PRIZES[PRIZE_RANKS.MATCH_6])}원)`,
  },
  YIELD: (yieldRate) => `총 수익률은 ${yieldRate}%입니다.`,
});
