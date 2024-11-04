import { Console } from '@woowacourse/mission-utils';

const LOTTOS_SYSTEM_INPUT = {
  LOTTO_PRICE: '구입금액을 입력해 주세요.',
  NUMBER_INPUT: '당첨 번호를 입력해 주세요.',
  ADD_NUMBER_INPUT: '보너스 번호를 입력해 주세요.',
};

const PRICE_PROMPT = {
  getPriceResultPrompt: (count) => `${count}개를 구매했습니다.`,
};

const RESULT_PROMPT = {
  RESULT_START: '당첨 통계',
  PROGRESS_BAR: '---',
  MATCH_3: (count) => `3개 일치 (5,000원) - ${count}개`,
  MATCH_4: (count) => `4개 일치 (50,000원) - ${count}개`,
  MATCH_5: (count) => `5개 일치 (1,500,000원) - ${count}개`,
  MATCH_5_BONUS: (count) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${count}개`,
  MATCH_6: (count) => `6개 일치 (2,000,000,000원) - ${count}개`,
  getEarningsRatePrompt: (rate) => `총 수익률은 ${rate}%입니다.`,

  displayResults: (winnings) => {
    Console.print(RESULT_PROMPT.RESULT_START);
    Console.print(RESULT_PROMPT.PROGRESS_BAR);
    Console.print(RESULT_PROMPT.MATCH_3(winnings[3]));
    Console.print(RESULT_PROMPT.MATCH_4(winnings[4]));
    Console.print(RESULT_PROMPT.MATCH_5(winnings[5]));
    Console.print(RESULT_PROMPT.MATCH_5_BONUS(winnings[5.5]));
    Console.print(RESULT_PROMPT.MATCH_6(winnings[6]));
  },
};

export { LOTTOS_SYSTEM_INPUT, PRICE_PROMPT, RESULT_PROMPT };
