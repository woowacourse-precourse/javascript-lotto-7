import Lotto from "./Lotto.js";
import { Console, MissionUtils } from "@woowacourse/mission-utils";

class LottoManager {
  generateLotto(lottoCount) {
    let userLottoNumbers = [];
    for (let i = 0; i < lottoCount; i++) {
      const lottoNumbers = MissionUtils.Random.pickUniqueNumbersInRange(
        1,
        45,
        6
      );
      lottoNumbers.sort((a, b) => a - b);
      userLottoNumbers.push(new Lotto(lottoNumbers));
    }
    return userLottoNumbers;
  }

  async printLottoNumbers(userLottoNumbers, lottoCount) {
    await Console.print(`\n${lottoCount}개를 구매했습니다.`);
    await Console.print(
      userLottoNumbers
        .map((lotto) => `[${lotto.getNumbers().join(", ")}]`)
        .join("\n")
    );
  }
}

export default LottoManager;
