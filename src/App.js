import { Console, MissionUtils } from "@woowacourse/mission-utils";
import Price from "./Price.js";
import LottoList from "./LottoList.js";

class App {
  async run() {
    // 1~2. 로또 구입 금액 입력 및 유효성 검사
    const priceInput = await Console.readLineAsync(
      "구입금액을 입력해 주세요.\n"
    );
    const price = new Price(priceInput);

    // 3. 발행한 금액 수량 출력
    const lottoNum = price.getPrice() / 1000;
    Console.print("\n" + lottoNum + "개를 구매했습니다.");

    const lottos = new LottoList(lottoNum);

    // 4. 발행한 로또 번호 출력
    lottos.getLottoList().forEach((lotto) => {
      Console.print(lotto.getLotto());
    });
  }
}

export default App;
