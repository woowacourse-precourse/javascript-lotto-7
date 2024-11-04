import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    this.#askPurchaseAmount();
  }

  #askPurchaseAmount() {
    Console.readLine("구입금액을 입력해 주세요.\n", (input) => {
      this.#validatePurchaseAmount(input);
      const amount = parseInt(input, 10);
      const lottoCount = Math.floor(amount / 1000);
      Console.print(`\n${lottoCount}개를 구매하였습니다.`);
      // TODO: 로또 자동 발행 기능 호출
    });
  }

  #validatePurchaseAmount(input) {
    const amount = parseInt(input, 10);
    if (isNaN(amount) || amount % 1000 !== 0) {
      throw new Error("[ERROR] 구입 금액은 1,000원 단위로 입력해 주세요.");
    }
  }
}

export default App;
