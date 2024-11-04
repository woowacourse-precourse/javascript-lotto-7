import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const money = await Console.readLineAsync("구입 금액을 입력해 주세요.\n");
      const lottos = this.purchaseLottos(Number(money));

    } catch (error) {
      Console.print(error.message); 
    }
}

  purchaseLottos(money) {
    if (!Number.isInteger(money) || money <= 0 || money % App.PRICE_PER_TICKET !== 0) {
      throw new Error("[ERROR] 구입 금액은 1,000원 단위의 양의 정수여야 합니다.");
    }
  }
}


export default App;