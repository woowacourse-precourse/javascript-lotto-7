import { purchase } from "./Purchase.js";
import { getInput } from "./Input.js";
import { LOTTO } from "./constant.js";
import { prize } from "./Prize.js";
import { validateBonusnum, validateBudget, validateWinnum } from "./Validation.js";
import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    let budget, lotto, winnum, bonusnum;

    while (true) {
      try {
        budget = await getInput('구입금액을 입력해 주세요.');
        validateBudget(budget);
        lotto = purchase(budget / LOTTO.PRICE);
        break;
      } catch (error) {
        if (error.message.startsWith("[ERROR]")) {
          Console.print(error.message);
        } else {
          throw error;
        }
      }
    }

    while (true) {
      try {
        const winnumInput = await getInput('당첨 번호를 입력해 주세요.');
        winnum = winnumInput.split(',').map(num => parseInt(num.trim(), 10));
        validateWinnum(winnum);
        break;
      } catch (error) {
        if (error.message.startsWith("[ERROR]")) {
          Console.print(error.message);
        } else {
          throw error;
        }
      }
    }

    while (true) {
      try {
        const bonusnumInput = await getInput('보너스 번호를 입력해 주세요.');
        bonusnum = parseInt(bonusnumInput.trim(), 10);
        validateBonusnum(bonusnum, winnum);
        break;
      } catch (error) {
        if (error.message.startsWith("[ERROR]")) {
          Console.print(error.message);
        } else {
          throw error;
        }
      }
    }

    prize(lotto, winnum, bonusnum);
  }
}

export default App;
