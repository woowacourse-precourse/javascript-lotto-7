import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

const LOTTO_COST_MIN = 1000;
const GUIDE_MESSAGE_INPUT_COST = "구입금액을 입력해 주세요. (ex: 2000)\n";
const GUIDE_MESSAGE_INPUT_USER_PICKED_NUMBERS =
  "\n당첨 번호를 입력해 주세요. (ex: 1,2,3,4,5,6)\n";
const GUIDE_MESSAGE_INPUT_USER_PICKED_BONUS_NUMBER =
  "\n보너스 번호를 입력해 주세요. (ex: 7)\n";
const ERROR_MESSAGE_INVALID_COST =
  "[ERROR] 입력하신 금액이 1,000원 단위가 아닙니다. 다시";
const ERROR_MESSAGE_NOT_NUMBER = "[ERROR] 입력값이 숫자가 아닙니다. 다시";
const ERROR_MESSAGE_NOT_IN_VALID_RANGE =
  "[ERROR] 입력값이 로또 번호 범위에 있지 않습니다. 다시";
const ERROR_MESSAGE_DUPLICATED_LOTTO_NUMBER =
  "[ERROR] 중복된 로또 번호가 있습니다. 다시";
const ERROR_MESSAGE_NOT_SIX_NUMBERS =
  "[ERROR] 6개의 당첨 번호를 입력해야합니다. 다시";

class App {
  async run() {
    let lottoBudget;
    let isValid = false;

    while (!isValid) {
      try {
        lottoBudget = Number(await this.getLottoCost());
        if (isNaN(lottoBudget)) {
          throw new Error(ERROR_MESSAGE_NOT_NUMBER);
        } else if (lottoBudget % LOTTO_COST_MIN !== 0) {
          throw new Error(ERROR_MESSAGE_INVALID_COST);
        }
        isValid = true;
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }

    const lottoCnt = lottoBudget / LOTTO_COST_MIN;
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

    isValid = false;
    while (!isValid) {
      try {
        userPickedNumbers = this.splitUserPickedNumbers(
          await this.getUserPickedNumbers()
        ).map(Number);

        if (userPickedNumbers.length != 6) {
          throw new Error(ERROR_MESSAGE_NOT_SIX_NUMBERS);
        }

        userPickedNumbers.forEach((number) => {
          if (!Lotto.isValidLottoNumberRange(number)) {
            throw new Error(ERROR_MESSAGE_NOT_IN_VALID_RANGE);
          }
        });

        if (Lotto.hasDuplicatedLottoNumber(userPickedNumbers)) {
          throw new Error(ERROR_MESSAGE_DUPLICATED_LOTTO_NUMBER);
        }

        isValid = true;
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }

    let userPickedBonusNum;

    isValid = false;
    while (!isValid) {
      try {
        userPickedBonusNum = Number(await this.getUserPickedBonusNumber());

        if (userPickedNumbers.includes(userPickedBonusNum)) {
          throw new Error(ERROR_MESSAGE_DUPLICATED_LOTTO_NUMBER);
        }

        if (!Lotto.isValidLottoNumberRange(userPickedBonusNum)) {
          throw new Error(ERROR_MESSAGE_NOT_IN_VALID_RANGE);
        }

        isValid = true;
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }

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

    const profitRatio = Lotto.getProfitRatio(lottoBudget, totalPrizeMoney);
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
    j;
  }
}

export default App;
