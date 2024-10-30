import Lotto from "./Lotto.js";
import { Console } from "@woowacourse/mission-utils";
import { Random } from "@woowacourse/mission-utils";

class App {
  async run() {
    // 구입금액을 입력해주세요.
    const purchaseAmount = await Console.readLineAsync(
      "구입 금액을 입력해주세요.\n"
    );
    Console.print("");

    if (+purchaseAmount % 1000 !== 0) {
      throw new Error("[ERROR] 1000원단위로 구매해주세요.");
    }

    if (+purchaseAmount === 0) {
      throw new Error("[ERROR] 0원 이상의 돈을 내주세요.");
    }

    // ~개를 구매했습니다.

    const numberOfLottoes = +purchaseAmount / 1000;
    Console.print(`${numberOfLottoes}개를 구매했습니다.`);

    const lottoes = [];

    for (let i = 0; i < numberOfLottoes; i++) {
      lottoes.push(Random.pickUniqueNumbersInRange(1, 45, 6));
      lottoes[i].sort((a, b) => a - b);
      Console.print(`[${lottoes[i].join(", ")}]`);
    }
    Console.print("");

    // 당첨 번호를 입력해주세요.
    const winningNumbersInput = await Console.readLineAsync(
      "당첨 번호를 입력해 주세요.\n"
    );
    Console.print("");

    const winningNumberArr = winningNumbersInput.split(",").map(Number);
    const winningNumbers = new Lotto(winningNumberArr);

    const bonusNumberInput = await Console.readLineAsync(
      "보너스 번호를 입력해 주세요.\n"
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

    Console.print("당첨 통계");
    Console.print("---");
    Console.print(`3개 일치 (5,000원) - ${howManyMatch[0]}개`);
    Console.print(`4개 일치 (50,000원) - ${howManyMatch[1]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${howManyMatch[2]}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${howManyMatch[3]}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${howManyMatch[4]}개`);
    Console.print(`총 수익률은 ${rateOfReturn}%입니다.`);
  }
}

export default App;
