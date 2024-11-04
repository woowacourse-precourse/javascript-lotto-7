import { purchase } from "./Purchase.js";
import { getInput } from "./Input.js";
import { LOTTO } from "./constant.js";
import { prize } from "./Prize.js";

class App {
  async run() {
    const budget = await getInput('구입금액을 입력해 주세요.');
    const lotto = purchase(budget/LOTTO.PRICE);
    const winnumInput = await getInput('당첨 번호를 입력해 주세요.');
    const winnum = winnumInput.split(',').map(num => parseInt(num.trim(), 10));
    
    const bonusnumInput = await getInput('보너스 번호를 입력해 주세요.');
    const bonusnum = parseInt(bonusnumInput.trim(), 10);

    prize(lotto, winnum, bonusnum);
  }
}

export default App;
