import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const purchaseAmount = await this.getPurchaseAmount();
      const lottoCount = purchaseAmount / 1000;

      MissionUtils.Console.print(`\n${lottoCount}개를 구매했습니다.`);
      this.getLottoNumbers(lottoCount);

      const winningNumbers = await this.getWinningNumbers(); // 당첨 번호 입력 받기
      MissionUtils.Console.print(`\n당첨 번호: ${winningNumbers.join(", ")}`);
    } catch (error) {
      MissionUtils.Console.print(error.message);
      await this.run(); // 금액 입력 재시도
    }
  }

  async getPurchaseAmount() {
    const input = await MissionUtils.Console.readLineAsync(
      "구입금액을 입력해 주세요.\n"
    );
    const amount = Number(input);

    if (isNaN(amount) || amount <= 0 || amount % 1000 !== 0) {
      throw new Error("[ERROR] 금액은 1,000원 단위의 양수로 입력해 주세요.");
    }

    return amount;
  }

  getLottoNumbers(lottoCount) {
    const lottoNumbers = [];

    for (let i = 0; i < lottoCount; i++) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      numbers.sort((a, b) => a - b);
      lottoNumbers.push(numbers);
      MissionUtils.Console.print(`[${numbers.join(", ")}]`);
    }

    return lottoNumbers;
  }

  async getWinningNumbers() {
    const input = await MissionUtils.Console.readLineAsync(
      "\n당첨 번호를 입력해 주세요.\n"
    );
    const winningNumbers = input.split(",").map(Number); // 쉼표로 구분

    // 유효성 검사: 1~45 범위, 중복 확인, 숫자 개수 확인
    if (
      winningNumbers.length !== 6 ||
      winningNumbers.some((num) => isNaN(num) || num < 1 || num > 45) ||
      new Set(winningNumbers).size !== 6
    ) {
      throw new Error(
        "[ERROR] 당첨 번호는 1부터 45 사이의 중복되지 않는 숫자 6개여야 합니다."
      );
    }

    return winningNumbers;
  }
}

export default App;
