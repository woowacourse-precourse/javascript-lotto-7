import { Console } from "@woowacourse/mission-utils";
import LottoArr from "./LottoArr.js";
import Win from "./Win.js";

class App {
  async run() {
    const PAY_INPUT = await Console.readLineAsync("구입금액을 입력해 주세요.\n")
    const LOTTO_ARRAY = new LottoArr(PAY_INPUT)
    Console.print("\n" + LOTTO_ARRAY.print())
    const WINNING_NUMBERS = await Console.readLineAsync("당첨 번호를 입력해 주세요.\n")
    const Wisn = new Win(WINNING_NUMBERS, PAY_INPUT)
    const BONUS_NUMBER = await Console.readLineAsync("보너스 번호를 입력해 주세요.\n")
    Wisn.getBonusNumber(BONUS_NUMBER)
    Wisn.calculator(LOTTO_ARRAY.toArr())
    Console.print(Wisn.print())
  }
}

export default App;


