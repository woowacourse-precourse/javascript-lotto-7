import { Console } from "@woowacourse/mission-utils";
import { isValidPrice, isZeroPrice } from "./errors/LottoInputErrors.js";

class App {
  async run() {
    const lottoPrice = await Console.readLineAsync(
      "구입금액을 입력해 주세요.\n"
    );
    isZeroPrice(lottoPrice);
    isValidPrice(lottoPrice);
  }
}

export default App;
