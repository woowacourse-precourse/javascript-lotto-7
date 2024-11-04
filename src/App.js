import { MissionUtils } from "@woowacourse/mission-utils";
import { collectLottoNumbers, collectBonusNumber } from "./InputValidator.js";
import Lotto from "./Lotto.js";

class App {
  async run() {
    const price = await MissionUtils.Console.readLineAsync(
      "구입금액을 입력해 주세요."
    );

    if (price % 1000 !== 0) {
      throw new Error("구입 금액은 1000원 단위로 입력해야 합니다.");
    }

    const resultPrice = price / 1000;
    MissionUtils.Console.print(`${resultPrice}개를 구매했습니다.`);

    const lottoNumbersList = [];
    for (let i = 0; i < resultPrice; i++) {
      const randomLottoNumbers = Lotto.generateRandomNumbers();
      lottoNumbersList.push(randomLottoNumbers);
    }

    lottoNumbersList.forEach((numbers) => {
      MissionUtils.Console.print(`[${numbers.join(", ")}]`);
    });

    const lottoNumbers = await collectLottoNumbers();
    const bonusNumber = await collectBonusNumber();
  }
}

export default App;
