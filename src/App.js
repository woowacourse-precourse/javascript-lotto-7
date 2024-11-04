import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const purchaseAmount = await this.getPurchaseAmount();
      MissionUtils.Console.print(`${purchaseAmount}`);
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

    // 금액이 숫자고 1,000원 단위의 양수인지 확인
    if (isNaN(amount) || amount <= 0 || amount % 1000 !== 0) {
      throw new Error("[ERROR] 금액은 1,000원 단위의 양수로 입력해 주세요.");
    }

    return amount;
  }
}

export default App;
