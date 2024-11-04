import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const purchaseAmount = await this.getPurchaseAmount();
      const lottoCount = purchaseAmount / 1000;

      MissionUtils.Console.print(`\n${lottoCount}개를 구매했습니다.`);
      this.getLottoNumbers(lottoCount);
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
      numbers.sort((a, b) => a - b); // 오름차순 정렬
      lottoNumbers.push(numbers);
      MissionUtils.Console.print(`[${numbers.join(", ")}]`);
    }

    return lottoNumbers;
  }
}

export default App;
