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
      MissionUtils.Console.print("");
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
      if (isNaN(purchaseAmount) | (purchaseAmount < 0)) {
        MissionUtils.Console.print("[ERROR] 숫자만 입력하세요.");
        throw new Error();
      }
      const change = "" + parseInt(purchaseAmount / 1000) * 1000;
      const orig = "" + purchaseAmount;
      if (purchaseAmount < 1000) {
        MissionUtils.Console.print("[ERROR] 한 로또 당 1000원 입니다.");
        throw new Error();
      }
      if (change != orig) {
        MissionUtils.Console.print("[ERROR] 잔돈은 계산하지 않습니다.");
        throw new Error();
      }
    }

    function generateLotto(USER_PURCHASE) {
      let LOTTO_RESULTS = [];
      let LOTTO_RESULT;
      let LOTTO_COUNT = parseInt(USER_PURCHASE / 1000);
      MissionUtils.Console.print(LOTTO_COUNT + "개를 구매했습니다.");
      for (let COUNT = 0; COUNT < LOTTO_COUNT; COUNT++) {
        LOTTO_RESULT = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
        MissionUtils.Console.print("[" + LOTTO_RESULT + "]");
        LOTTO_RESULTS.push(LOTTO_RESULT);
      }
      return LOTTO_RESULTS;
    }

    // function lottoCount(purchase) {
    //   return parseInt(purchase / 1000);
    // }

    // function printLottoCount(purchase) {
    //   return `\n\n ${lottoCount(purchase)}개를 구매했습니다.\n`;
    // }

    // function printGenerateLotto(USER_PURCHASE) {
    //   let printStr;
    //   const LOTTO_RESULTS = generateLotto(lottoCount(USER_PURCHASE));
    //   for (let LOTTO_RESULT in LOTTO_RESULTS)
    //     printStr += `[${[...LOTTO_RESULT]}]\n`;
    //   return printStr;
    // }

    // async function main() {
    //   const USER_PURCHASE = await userPurchase();
    //   let printStr = "";
    //   printStr += printLottoCount(USER_PURCHASE);
    //   printStr += printGenerateLotto(USER_PURCHASE);
    //   return printStr;
    // }

    // const PRINT = main();
    // return PRINT;

    // async function printResult() {

    // }

    // printResult();

    const USER_PURCHASE = await userPurchase();
    const LOTTO_RESULTS = generateLotto(USER_PURCHASE);
    MissionUtils.Console.print("");
    const USER_INPUT = await userInput();
    const GAME_START = new Lotto(USER_INPUT[0]);
    const USER_NUMBERS = GAME_START.addBonusDraw(USER_INPUT[0], USER_INPUT[1]);
  }
}

export default App;
