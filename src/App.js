import { purchase } from "./Purchase.js";
import { getInput } from "./Input.js";
import { LOTTO } from "./constant.js";

class App {
  async run() {
    const budget = await getInput('구입금액을 입력해 주세요.');
    const lotto = purchase(budget/LOTTO.PRICE);
    const winnumInput = await getInput('당첨 번호를 입력해 주세요.');
    const winnum = winnumInput.split(',').map(num => num.trim());
    const bonusnum = await getInput('보너스 번호를 입력해 주세요.');
  }
}

export default App;
