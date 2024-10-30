import Lotto from "./Lotto.js";
import MESSAGES from "./constants/Messages.js";
import { Console } from "@woowacourse/mission-utils";
import { Random } from "@woowacourse/mission-utils";

class App {
  async run() {
    // 구입금액을 입력해주세요.
    const purchaseAmount = await Console.readLineAsync(MESSAGES.INPUT_MONEY);
    Console.print("");

    if (+purchaseAmount % 1000 !== 0) {
      throw new Error("[ERROR] 1000원단위로 구매해주세요.");
    }

    if (+purchaseAmount <= 0) {
      throw new Error("[ERROR] 1000원 이상의 돈을 내주세요.");
    }

    // ~개를 구매했습니다.

    const numberOfLottoes = +purchaseAmount / 1000;
    Console.print(`${numberOfLottoes}${MESSAGES.BUY_LOTTO}`);

    const lottoes = [];

    for (let i = 0; i < numberOfLottoes; i++) {
      lottoes.push(Random.pickUniqueNumbersInRange(1, 45, 6));
      lottoes[i].sort((a, b) => a - b);
      Console.print(`[${lottoes[i].join(", ")}]`);
    }
    Console.print("");

    // 당첨 번호를 입력해주세요.
    const winningNumbersInput = await Console.readLineAsync(
      MESSAGES.INPUT_WINNING_NUMBERS
    );
    Console.print("");

    const winningNumberArr = winningNumbersInput.split(",").map(Number);
    const winningNumbers = new Lotto(winningNumberArr);

    const bonusNumberInput = await Console.readLineAsync(
      MESSAGES.INPUT_BONUS_NUMBER
    );
    Console.print("");
    const bonusNumber = +bonusNumberInput;

    if (winningNumberArr.includes(bonusNumber)) {
      throw new Error("[ERROR] 보너스 번호는 당첨번호와 달라야 합니다.");
    }

    if (
      !(bonusNumber > 0 && bonusNumber < 46 && Number.isInteger(bonusNumber))
    ) {
      throw new Error("[ERROR] 보너스 번호는 1~45 사이 정수여야 합니다.");
    }

    const howManyMatch = [0, 0, 0, 0, 0];
    for (let i = 0; i < numberOfLottoes; i++) {
      let cnt = 0;
      let hasBonusNumber = lottoes[i].includes(bonusNumber);

      for (let j = 0; j < 6; j++) {
        if (lottoes[i].includes(winningNumberArr[j])) {
          cnt++;
        }
      }

      if (cnt === 3) howManyMatch[0]++;
      if (cnt === 4) howManyMatch[1]++;
      if (cnt === 5 && !hasBonusNumber) howManyMatch[2]++;
      if (cnt === 5 && hasBonusNumber) howManyMatch[3]++;
      if (cnt === 6) howManyMatch[4]++;
    }

    const totalPrizeMoney =
      howManyMatch[0] * 5000 +
      howManyMatch[1] * 50000 +
      howManyMatch[2] * 1500000 +
      howManyMatch[3] * 30000000 +
      howManyMatch[4] * 2000000000;
    const rateOfReturn = ((totalPrizeMoney / +purchaseAmount) * 100).toFixed(1);

    Console.print(MESSAGES.WON_STATISTICS);
    Console.print(MESSAGES.DIVIDING_LINE);
    Console.print(
      `${MESSAGES.MATCHED_THREE}${howManyMatch[0]}${MESSAGES.COUNT}`
    );
    Console.print(
      `${MESSAGES.MATCHED_FOUR}${howManyMatch[1]}${MESSAGES.COUNT}`
    );
    Console.print(
      `${MESSAGES.MATCHED_FIVE}${howManyMatch[2]}${MESSAGES.COUNT}`
    );
    Console.print(
      `${MESSAGES.MATCHED_FIVE_WITH_BONUS}${howManyMatch[3]}${MESSAGES.COUNT}`
    );
    Console.print(`${MESSAGES.MATCHED_SIX}${howManyMatch[4]}${MESSAGES.COUNT}`);
    Console.print(
      `${MESSAGES.TOTAL_RATE_OF_RETURN}${rateOfReturn}${MESSAGES.PERCENT}`
    );
  }
}

export default App;
