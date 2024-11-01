import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const lottoPurchaseAmount = await MissionUtils.Console.readLineAsync(
      "구입금액을 입력해 주세요.\n"
    );
    if (lottoPurchaseAmount % 1000 !== 0) {
      throw new Error("[ERROR] : 구입금액이 1000원 단위로 나누어지지 않음.");
    }

    const lottoQuantity = lottoPurchaseAmount / 1000;
    MissionUtils.Console.print(`\n${lottoQuantity}개를 구매했습니다.`);

    for (let i = 0; i < lottoQuantity; i++) {
      const lottoNumbers = MissionUtils.Random.pickUniqueNumbersInRange(
        1,
        45,
        6
      );
      lottoNumbers.sort((a, b) => a - b);
      MissionUtils.Console.print(`[${lottoNumbers.join(", ")}]`);
    }

    const winningNumbersInput = await MissionUtils.Console.readLineAsync(
      "당첨 번호를 입력해 주세요.\n"
    );

    const winningNumbers = winningNumbersInput
      .split(",")
      .map((num) => num.trim());

    const bonusNumber = await MissionUtils.Console.readLineAsync(
      "보너스 번호를 입력해 주세요.\n"
    );

    console.log(bonusNumber);
  }
}

export default App;
