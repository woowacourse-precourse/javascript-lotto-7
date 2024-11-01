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

    const winningNumbers = winningNumbersInput.split(",").map(Number);
    const uniqueNumbers = new Set(winningNumbers);
    if (!winningNumbers.every((num) => num >= 1 && num <= 45)) {
      throw new Error("[ERROR] : 당첨 번호는 1~45 사이여야 합니다.");
    }
    if (
      uniqueNumbers.size !== winningNumbers.length ||
      winningNumbers.length !== 6
    ) {
      throw new Error("[ERROR] : 6개의 숫자를 중복되지 않게 입력해야합니다.");
    }

    const bonusNumberInput = await MissionUtils.Console.readLineAsync(
      "보너스 번호를 입력해 주세요.\n"
    );
    const bonusNumber = Number(bonusNumberInput);
    if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error("[ERROR] : 보너스 번호는 1~45사이여야 합니다.");
    }
    if (uniqueNumbers.has(bonusNumber)) {
      throw new Error(
        "[ERROR] : 보너스 번호는 당첨 번호와 중복될 수 없습니다."
      );
    }
  }
}

export default App;
