import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const purchase = await this.getPurchase();
    } catch (error) {
      throw new Error("[ERROR]" + error.message);
    }
  }

  async getPurchase() {
    const moneyString = await Console.readLineAsync(
      "구입금액을 입력해 주세요.\n"
    );
    const moneyNumber = parseInt(moneyString);
    if (isNaN(moneyNumber) || moneyNumber % 1000 !== 0) {
      throw new Error("구입 금액은 1,000원 단위로 입력해야 합니다.");
    }
    return moneyNumber;
  }
}

export default App;
