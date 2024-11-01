import Bonus from "./Bonus.js";
import Lotto from "./Lotto.js";
import Price from "./Price.js";
import { read, print } from "./util/io.js";
import COMMON_MESSAGES from "./util/messages/message.js";
import { generateLottoNumbers, loopPrintLottoNumbers } from "./util/util.js";

class App {
  async run() {
    // 금액 입력 영역
    const inputPrice = await read(COMMON_MESSAGES.INPUT.LOTTO_PRICE);
    const price = new Price(inputPrice);

    // 로또 번호 생성 및 출력 영역
    const generatedNumbers = generateLottoNumbers(price.lottoCount);
    loopPrintLottoNumbers(price.lottoCount, generatedNumbers);

    // 당첨 번호 및 보너스 번호 입력 영역
    const inputLottoNumbers = await read(COMMON_MESSAGES.INPUT.LOTTO_NUMBER);
    const lottoNumbers = new Lotto(inputLottoNumbers);

    // 보너스 번호 입력 영역
    const inputBonusNumber = await read(COMMON_MESSAGES.INPUT.BONUS_NUMBER);
    const bonusNumber = new Bonus(inputBonusNumber);
    bonusNumber.validate(lottoNumbers.value);

    // 당첨 통계 출력 영역
    print(COMMON_MESSAGES.WINNING_STATISTICS);
  }
}

export default App;
