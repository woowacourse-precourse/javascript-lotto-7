import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  async run() {
    //Get user input
    async function getUserInput() {
      const INPUT = await MissionUtils.Console.readLineAsync(
        "당첨 번호를 입력해 주세요.\n"
      );
      return INPUT;
    }

    const LOTTO_DRAW = await getUserInput();

    //Create lotto instance
    const lotto = new Lotto(LOTTO_DRAW.split(","));
  }
}

export default App;
