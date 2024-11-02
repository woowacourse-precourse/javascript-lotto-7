import { OUTPUT_MESSAGE } from './util/constant.js';
import { printResult } from './util/missionUtil.js';

class OutputView {
  static async printLottoCount(count) {
    const lottoCount = count / 1000;
    await printResult(OUTPUT_MESSAGE.buyLotto(lottoCount));
  }

  static async printLottoNumbers(lottos) {
    lottos.forEach(async (lotto) => {
      const number = lotto.getNumbers();
      await printResult(OUTPUT_MESSAGE.lottoNumbers(number));
    });
  }
}

export default OutputView;
