import { Console } from "@woowacourse/mission-utils";
import { isValidPrice, isZeroPrice } from "./errors/LottoInputErrors.js";
import { getLottoCount, getLottoNums } from "./services/LottoGenerator.js";

class App {
  async run() {
    const lottoPrice = await Console.readLineAsync(
      "구입금액을 입력해 주세요.\n"
    );
    isZeroPrice(lottoPrice);
    isValidPrice(lottoPrice);

    const lottoCount = getLottoCount(lottoPrice);
    const lottoNumbers = getLottoNums(lottoCount);

    Console.print(`\n${lottoCount}개를 구매했습니다.`);
    lottoNumbers.forEach((numbers) => {
      Console.print(numbers.sort((a, b) => a - b));
    });
  }
}

export default App;
