import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  async run() {
    async function getUserInput() {
      const INPUT = await MissionUtils.Console.readLineAsync(
        "당첨 번호를 입력해 주세요.\n"
      );
      return INPUT;
    }

    async function main() {
      let USER_INPUT;
      let LOTTO_DRAW;
      let CORRECT_INPUT = false;

      do {
        try {
          USER_INPUT = await getUserInput();
          LOTTO_DRAW = new Lotto(USER_INPUT.split(","));
          CORRECT_INPUT = true;
        } catch (INPUT_ERROR) {
          MissionUtils.Console.print(INPUT_ERROR);
        }
      } while (!CORRECT_INPUT);
    }

    main();
  }
}

export default App;
