import { Console } from "@woowacourse/mission-utils";
import LottoArr from "./LottoArr.js";
import Win from "./Win.js";
import { inputBonusNumber, inputPay, inputWinningNumbers } from "./VaildInput.js";

class App {

  async run() {
    const PAY_INPUT = await inputPay()
    //const PAY_INPUT = await Console.readLineAsync("구입금액을 입력해 주세요.\n")
    console.log(PAY_INPUT)
    const LOTTO_ARRAY = new LottoArr(PAY_INPUT)
    Console.print("\n" + LOTTO_ARRAY.print())
    const WINNING_NUMBERS = await inputWinningNumbers()
    // const WINNING_NUMBERS = await Console.readLineAsync("당첨 번호를 입력해 주세요.\n")
    const WIN = new Win(WINNING_NUMBERS, PAY_INPUT)
    const BONUS_NUMBER = await inputBonusNumber()
    // const BONUS_NUMBER = await Console.readLineAsync("보너스 번호를 입력해 주세요.\n")
    WIN.getBonusNumber(BONUS_NUMBER)
    WIN.calculator(LOTTO_ARRAY.toArr())
    Console.print(WIN.print())
  }
}

export default App;


