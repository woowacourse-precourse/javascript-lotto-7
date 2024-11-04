import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
const LOTTO_COST_MIN = 1000;
const GUIDE_MESSAGE_INPUT_COST = "구입금액을 입력해 주세요.\n";
const GUIDE_MESSAGE_INPUT_USER_PICKED_NUMBERS =
  "\n당첨 번호를 입력해 주세요.\n";
const GUIDE_MESSAGE_INPUT_USER_PICKED_BONUS_NUMBER =
  "\n보너스 번호를 입력해 주세요.\n";
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

    const lottoCnt = lottoCost / LOTTO_COST_MIN;
    let lottoNumbers = [];
    for (let i = 0; i < lottoCnt; i++) {
      const randomNumbers = Lotto.generateRandomNumbers();

      lottoNumbers.push(new Lotto(randomNumbers));
    }

    MissionUtils.Console.print(`\n${lottoCnt}개를 구매했습니다.`);

    lottoNumbers.forEach((eachLotto) => {
      MissionUtils.Console.print(`[${eachLotto.getNumbers().join(", ")}]`);
    });

    let userPickedNumbers = [];
    userPickedNumbers = this.splitUserPickedNumbers(
      await this.getUserPickedNumbers()
    ).map(Number);

    let userPickedBonusNum = Number(await this.getUserPickedBonusNumber());

    let score = Lotto.getScore(
      userPickedNumbers,
      lottoNumbers,
      userPickedBonusNum
    );

    let counts = Lotto.getCounts(score);

    // 당첨 내역 반환된거 출력
    let resultMessage = Lotto.getResultMessage(...counts);
    MissionUtils.Console.print(`${resultMessage}`);

    let totalPrizeMoney = Lotto.calculateTotalPrizeMoney(counts);

    const profitRatio = Lotto.getProfitRatio(lottoCost, totalPrizeMoney);
    // 수익률 반환된거 출력
    MissionUtils.Console.print(`총 수익률은 ${profitRatio}%입니다.`);
  }

  getLottoCost() {
    return MissionUtils.Console.readLineAsync(GUIDE_MESSAGE_INPUT_COST);
  }

  getUserPickedNumbers() {
    return MissionUtils.Console.readLineAsync(
      GUIDE_MESSAGE_INPUT_USER_PICKED_NUMBERS
    );
  }

  splitUserPickedNumbers(userPickedStr) {
    return userPickedStr.split(",");
  }

  getUserPickedBonusNumber() {
    return MissionUtils.Console.readLineAsync(
      GUIDE_MESSAGE_INPUT_USER_PICKED_BONUS_NUMBER
    );
  }
}

export default App;
