import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  static PRICE_PER_TICKET = 1000;

  async run() {
    try {
      const money = await Console.readLineAsync("구입 금액을 입력해 주세요.\n");
      const lottos = this.purchaseLottos(Number(money));
      this.issueLottos(lottos);    
    
      const winInput = await Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
      const winNumbers = this.parseWinInput(winInput);

    } catch (error) {
      Console.print(error.message); 
    }
}

  purchaseLottos(money) {
    if (!Number.isInteger(money) || money <= 0 || money % App.PRICE_PER_TICKET !== 0) {
      throw new Error("[ERROR] 구입 금액은 1,000원 단위의 양의 정수여야 합니다.");
    }
    
    const count = money / App.PRICE_PER_TICKET;
    return Array.from({ length: count }, () => Lotto.generateLotto());
  }

  issueLottos(lottos) {
    Console.print(`${lottos.length}개를 구매했습니다.`);
    lottos.forEach((lotto) => Console.print(`[${lotto.getNumbers().join(", ")}]`));
  }

  parseWinInput(input) {
    const numbers = input.split(',').map(Number);
    if (numbers.length !== 6 || new Set(numbers).size !== 6) {
      throw new Error("[ERROR] 당첨 번호는 중복되지 않는 6개의 숫자로 구성되어야 합니다.");
    }
    if (!numbers.every((num) => Number.isInteger(num) && num >= 1 && num <= 45)) {
      throw new Error("[ERROR] 당첨 번호는 1부터 45 사이의 정수로 구성되어야 합니다.");
    }
    return numbers;
  }

}


export default App;