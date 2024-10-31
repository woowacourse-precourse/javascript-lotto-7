import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
const GUIDE_MESSAGE_INPUT_COST = "구입금액을 입력해 주세요.\n";
const ERROR_MESSAGE_INVALID_COST =
  "[ERROR] 입력하신 금액이 1,000원 단위가 아닙니다. 다시";

class App {
  async run() {
    let lottoCost;
    let isValid = false;

    while (!isValid) {
      lottoCost = Number(
        await MissionUtils.Console.readLineAsync(GUIDE_MESSAGE_INPUT_COST)
      );
      if (lottoCost % 1000 !== 0) {
        throw new Error(ERROR_MESSAGE_INVALID_COST);
      }
      isValid = true;
    }

    const lottoCnt = lottoCost / 1000;
    let lottoNumbers = [];
    for (let i = 0; i < lottoCnt; i++) {
      lottoNumbers[i] = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      lottoNumbers[i].sort((a, b) => {
        return a - b;
      });
    }
  }
}

export default App;
