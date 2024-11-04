import { Console } from '@woowacourse/mission-utils';
import { PROMPT_MESSAGES } from '../constants/messages.js';

class OutputView {
  async printBoughtLottos(lottoCount, lottos) {
    await Console.print(`${lottoCount}${PROMPT_MESSAGES.OUTPUT_LOTTOS}`);
    for (const lotto of lottos) {
      const lottoNumbers = lotto.getLottoNumbersToString();
      await Console.print(`${lottoNumbers}`);
    }
  }

  async printResult(prizeCount, profitRate) {
    const {
      firstPrizeCount,
      secondPrizeCount,
      thirdPrizeCount,
      fourthPrizeCount,
      fifthPrizeCount,
    } = prizeCount;

    const printPrompt = [
      '당첨 통계',
      '---',
      `3개 일치 (5,000원) - ${fifthPrizeCount}개`,
      `4개 일치 (50,000원) - ${fourthPrizeCount}개`,
      `5개 일치 (1,500,000원) - ${thirdPrizeCount}개`,
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${secondPrizeCount}개`,
      `6개 일치 (2,000,000,000원) - ${firstPrizeCount}개`,
      `총 수익률은 ${profitRate}%입니다.`,
    ];

    for (const prompt of printPrompt) {
      await Console.print(`${prompt}`);
    }
  }
}

export default OutputView;
