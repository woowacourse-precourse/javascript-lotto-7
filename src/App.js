import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const purchasePrice = await Console.readLineAsync("구입금액을 입력해 주세요.");

    if (purchasePrice % 1000 === 0) {
      throw new Error("[ERROR] 1,000원 단위로 나누어 떨어지지 않습니다.")
    }
  }
}

export default App;
