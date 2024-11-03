import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  async run() {
    async function getUserDraw() {
      const INPUT = await MissionUtils.Console.readLineAsync(
        "당첨 번호를 입력해 주세요.\n"
      );
      return INPUT.split(",");
    }

    async function getBonusDraw() {
      const INPUT = await MissionUtils.Console.readLineAsync(
        "보너스 번호를 입력 받는다.\n"
      );
      return INPUT;
    }

    async function userDraw() {
      let USER_FIRST_INPUT, USER_DRAW;
      let VALID_FIRST_INPUT = false;
      do {
        try {
          USER_FIRST_INPUT = await getUserDraw();
          USER_DRAW = new Lotto(USER_FIRST_INPUT);
          VALID_FIRST_INPUT = true;
        } catch (FIRST_INPUT_ERROR) {
          MissionUtils.Console.print(FIRST_INPUT_ERROR);
        }
      } while (!VALID_FIRST_INPUT);
      return USER_FIRST_INPUT;
    }

    async function bonusDraw(USER_DRAW) {
      let USER_SECOND_INPUT, USER_DRAW_AND_BONUS;
      const USER_NUMBERS = new Lotto(USER_DRAW);
      let VALID_SECOND_INPUT = false;
      do {
        try {
          USER_SECOND_INPUT = await getBonusDraw();
          USER_DRAW_AND_BONUS = USER_NUMBERS.addBonusDraw(
            USER_DRAW,
            USER_SECOND_INPUT
          );
          VALID_SECOND_INPUT = true;
        } catch (SECOND_INPUT_ERROR) {
          MissionUtils.Console.print(SECOND_INPUT_ERROR);
        }
      } while (!VALID_SECOND_INPUT);
      return USER_DRAW_AND_BONUS;
    }

    async function userInput() {
      let USER_SECOND_INPUT,
        USER_DRAW_AND_BONUS,
        VALID_SECOND_INPUT = false;
      const USER_DRAW = await userDraw();
      let USER_LOTTO = new Lotto(USER_DRAW);
      MissionUtils.Console.print("");
      do {
        try {
          USER_SECOND_INPUT = await getBonusDraw();
          USER_DRAW_AND_BONUS = USER_LOTTO.addBonusDraw(
            USER_DRAW,
            USER_SECOND_INPUT
          );
          VALID_SECOND_INPUT = true;
        } catch (SECOND_INPUT_ERROR) {
          MissionUtils.Console.print(SECOND_INPUT_ERROR);
        }
      } while (!VALID_SECOND_INPUT);
      return USER_DRAW_AND_BONUS;
    }

    async function getUserPurchase() {
      const INPUT = await MissionUtils.Console.readLineAsync(
        "구입금액을 입력해 주세요.\n"
      );
      return INPUT;
    }

    async function userPurchase() {
      let USER_INPUT, PURCHASE_COMPLETE;
      let VALID_INPUT = false;
      do {
        try {
          USER_INPUT = await getUserPurchase();
          checkPurchase(USER_INPUT);
          VALID_INPUT = true;
        } catch (INPUT_ERROR) {
          MissionUtils.Console.print(INPUT_ERROR);
        }
      } while (!VALID_INPUT);
      return USER_INPUT;
    }

    function checkPurchase(purchaseAmount) {
      if (isNaN(purchaseAmount) | (purchaseAmount < 0))
        throw new Error("[ERROR] 숫자만 입력하세요.");
      const change = "" + parseInt(purchaseAmount / 1000) * 1000;
      const orig = "" + purchaseAmount;
      if (purchaseAmount < 1000)
        throw new Error("[ERROR] 한 로또 당 1000원 입니다.");
      if (change != orig) throw new Error("[ERROR] 잔돈은 계산하지 않습니다.");
    }

    function generateLotto(purchase) {
      let LOTTO_RESULTS = [];
      let LOTTO_RESULT;
      for (
        let COUNT = 0;
        COUNT < parseInt(parseInt(purchase) / 1000);
        COUNT++
      ) {
        LOTTO_RESULT = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
        MissionUtils.Console.print(LOTTO_RESULT);
        LOTTO_RESULTS.push(LOTTO_RESULT);
      }
      return LOTTO_RESULTS;
    }

    async function main() {
      const USER_PURCHASE = await userPurchase();
      MissionUtils.Console.print("");
      const LOTTO_RESULTS = generateLotto(USER_PURCHASE);
      MissionUtils.Console.print("");
      const USER_INPUT = await userInput();
      const GAME_START = new Lotto(USER_INPUT[0]);
      const USER_NUMBERS = GAME_START.addBonusDraw(
        USER_INPUT[0],
        USER_INPUT[1]
      );
    }

    main();
  }
}

export default App;
