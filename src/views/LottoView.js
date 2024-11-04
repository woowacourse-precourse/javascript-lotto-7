import { Console } from "@woowacourse/mission-utils";
import { RUN_MESSAGE } from "../constants/runMessages.js";
import { generateLottoNumbersByCount } from "../services/generateLottoNumbersByCount.js";

class LottoView {
  displayLottoCount(count) {
    return Console.print(RUN_MESSAGE.PURCHASED_LOTTO_COUNT(count));
  }

  displayLottoNumbers(lottoCount) {
    const lottoNumbers = generateLottoNumbersByCount(lottoCount);

    lottoNumbers.forEach((numbers) => {
      Console.print(`[${numbers.join(", ")}]`);
    });

    return lottoNumbers;
  }
}

export default LottoView;
