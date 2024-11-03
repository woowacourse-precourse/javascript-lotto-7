import RULES from '../constants/Rules.js';
import Output from './io/Output.js';

// [3개, 4개, 5개, 5개 + 보너스 볼, 6개 일치]
export function lottoMatchResult(matchCount, rateOfReturn) {
  const logs = [
    `당첨 통계`,
    `---`,
    `3개 일치 (${RULES.LOTTO_3_MATCH}) - ${matchCount[3]}개`,
    `4개 일치 (${RULES.LOTTO_4_MATCH}) - ${matchCount[4]}개`,
    `5개 일치 (${RULES.LOTTO_5_MATCH}) - ${matchCount[5]}개`,
    `5개 일치, 보너스 볼 일치 (${RULES.LOTTO_5_BONUS_MATCH}) - ${matchCount[5.5]}개`,
    `6개 일치 (${RULES.LOTTO_6_MATCH}) - ${matchCount[6]}개`,
    `총 수익률은 ${rateOfReturn}%입니다.`,
  ];

  logs.forEach((log) => Output.print(log));
}
