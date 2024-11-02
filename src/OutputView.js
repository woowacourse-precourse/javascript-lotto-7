import { OUTPUT_MESSAGE } from './util/constant.js';
import { printResult } from './util/missionUtil.js';

class OutputView {
  static async printLottoCount(count) {
    const lottoCount = count / 1000;
    await printResult(OUTPUT_MESSAGE.buyLotto(lottoCount));
  }

  static async printLottoNumbers(numbers) {
    for (const lotto of numbers) {
      const number = lotto.getNumbers();
      await printResult(OUTPUT_MESSAGE.lottoNumbers(number));
    }
  }
}

export default OutputView;
