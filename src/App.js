import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
const LOTTO_COST_MIN = 1000;
const LOTTO_NUMBER_MIN = 1;
const LOTTO_NUMBER_MAX = 45;
const LOTTO_NUMBER_COUNT = 6;
const GUIDE_MESSAGE_INPUT_COST = "구입금액을 입력해 주세요.\n";
const GUIDE_MESSAGE_INPUT_USER_PICKED_NUMBERS =
  "\n당첨 번호를 입력해 주세요.\n";
const ERROR_MESSAGE_INVALID_COST =
  "[ERROR] 입력하신 금액이 1,000원 단위가 아닙니다. 다시";
const ERROR_MESSAGE_NOT_NUMBER = "[ERROR] 입력값이 숫자가 아닙니다. 다시";

class App {
  async run() {
    let lottoCost;
    let isValid = false;

    while (!isValid) {
      try {
        lottoCost = Number(await this.getLottoCost());
        if (isNaN(lottoCost)) {
          throw new Error(ERROR_MESSAGE_NOT_NUMBER);
        } else if (lottoCost % LOTTO_COST_MIN !== 0) {
          throw new Error(ERROR_MESSAGE_INVALID_COST);
        }
        isValid = true;
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }
    isValid = false;

    const lottoCnt = lottoCost / 1000;
    let lottoNumbers = [];
    for (let i = 0; i < lottoCnt; i++) {
      lottoNumbers[i] = MissionUtils.Random.pickUniqueNumbersInRange(
        LOTTO_NUMBER_MIN,
        LOTTO_NUMBER_MAX,
        LOTTO_NUMBER_COUNT
      );
      lottoNumbers[i].sort((a, b) => {
        return a - b;
      });
    }

    MissionUtils.Console.print(`\n${lottoCnt}개를 구매했습니다.`);

    lottoNumbers.forEach((eachLotto) => {
      MissionUtils.Console.print(`[${eachLotto.join(", ")}]`);
    });

    let userPickedNumbers = [];
  }
  getLottoCost() {
    return MissionUtils.Console.readLineAsync(GUIDE_MESSAGE_INPUT_COST);
  }
}

export default App;
