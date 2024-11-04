import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  static PRIZE_INFO = {
    fifth: { matchCount: 3, prize: 5000, message: "3개 일치 (5,000원) - " },
    fourth: { matchCount: 4, prize: 50000, message: "4개 일치 (50,000원) - " },
    third: { matchCount: 5, prize: 1500000, message: "5개 일치 (1,500,000원) - " },
    second: {
      matchCount: 5,
      prize: 30000000,
      message: "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
      bonus: true,
    },
    first: { matchCount: 6, prize: 2000000000, message: "6개 일치 (2,000,000,000원) - " },
  };

  async retryOnError(asyncFunc) {
    try {
      return await asyncFunc();
    } catch (error) {
      MissionUtils.Console.print(error.message);
      return this.retryOnError(asyncFunc);
    }
  }

  inputPurchase() {
    return MissionUtils.Console.readLineAsync("구입금액을 입력해 주세요.\n");
  }

  validateMoney(money) {
    const rest = money % 1000;
    if (rest !== 0) {
      throw new Error("[ERROR] 천원 단위로만 입력해 주세요!");
    }
  }

  async run() {}
}

export default App;
