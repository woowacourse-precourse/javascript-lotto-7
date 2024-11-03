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

    async function userPurchase(USER_NUMBERS) {
      let USER_THIRD_INPUT, PURCHASE_COMPLETE;
      let VALID_THIRD_INPUT = false;
      do {
        try {
          USER_THIRD_INPUT = await getUserPurchase();
          PURCHASE_COMPLETE = new Lotto(USER_NUMBERS[0]).checkPurchase(
            USER_THIRD_INPUT
          );
          VALID_THIRD_INPUT = true;
        } catch (THIRD_INPUT_ERROR) {
          MissionUtils.Console.print(THIRD_INPUT_ERROR);
        }
      } while (!VALID_THIRD_INPUT);
      return USER_THIRD_INPUT;
    }

    async function main() {
      const USER_NUMBERS = await userInput();
      const USER_PURCHASE = await userPurchase(USER_NUMBERS);
      // console.log(USER_NUMBERS);
    }

    // async function main() {
    //   let USER_FIRST_INPUT, USER_DRAW, USER_SECOND_INPUT, BONUS_DRAW;
    //   let VALID_FIRST_INPUT,
    //     VALID_SECOND_INPUT = false;
    //   do {
    //     try {
    //       USER_FIRST_INPUT = await getUserDraw();
    //       USER_DRAW = new Lotto(USER_FIRST_INPUT);
    //       VALID_FIRST_INPUT = true;
    //     } catch (FIRST_INPUT_ERROR) {
    //       MissionUtils.Console.print(FIRST_INPUT_ERROR);
    //     }
    //   } while (!VALID_FIRST_INPUT);

    //   do {
    //     try {
    //       USER_SECOND_INPUT = await getBonusDraw();
    //       BONUS_DRAW = USER_DRAW.addBonusDraw(
    //         USER_FIRST_INPUT,
    //         USER_SECOND_INPUT
    //       );
    //       VALID_SECOND_INPUT = true;
    //     } catch (SECOND_INPUT_ERROR) {
    //       MissionUtils.Console.print(SECOND_INPUT_ERROR);
    //     }
    //   } while (!VALID_SECOND_INPUT);
    //   // const USER_PURCHASE = checkUserPurchase(USER_DRAW_AND_BONUS);
    //   // const LOTTO_RESULTS = USER_DRAW.generateLotto(USER_PURCHASE);
    // }

    main();
  }
}

export default App;
