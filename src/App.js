import { Console } from "@woowacourse/mission-utils";


class App {
  async run() {
    const PAY_INPUT = await Console.readLineAsync("구입금액을 입력해 주세요.\n")
    const WINNING_NUMBERS = await Console.readLineAsync("당첨 번호를 입력해 주세요.\n")
    const BONUS_NUMBER = await Console.readLineAsync("보너스 번호를 입력해 주세요.\n")
  }
}

export default App;
