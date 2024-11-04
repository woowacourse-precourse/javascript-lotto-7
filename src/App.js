import { purchase } from "./Purchase.js";
import { getInput } from "./Input.js";
import { LOTTO } from "./constant.js";
import { prize } from "./Prize.js";
import { validateBonusnum, validateBudget, validateWinnum } from "./Validation.js";

class App {
  async run() {
    const budget = await this.getBudget();
    const lotto = purchase(budget / LOTTO.PRICE);

    const winnum = await this.getWinnum();
    const bonusnum = await this.getBonusnum(winnum);

    prize(lotto, winnum, bonusnum);
  }

  async getBudget() {
    const budget = await getInput('\n구입금액을 입력해 주세요.\n');
    validateBudget(budget);
    return budget;
  }

  async getWinnum() {
    const winnumInput = await getInput('\n당첨 번호를 입력해 주세요.\n');
    const winnum = winnumInput.split(',').map(num => parseInt(num.trim(), 10));
    validateWinnum(winnum);
    return winnum;
  }

  async getBonusnum(winnum) {
    const bonusnumInput = await getInput('\n보너스 번호를 입력해 주세요.\n');
    const bonusnum = parseInt(bonusnumInput.trim(), 10);
    validateBonusnum(bonusnum, winnum);
    return bonusnum;
  }
}

export default App;
