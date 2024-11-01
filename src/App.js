import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import Lotto_purchase from "./Lotto_purchase.js";
import Rank_check from "./Rank_check.js";
import Lotto_bonus from "./Lotto_bonus.js";

class App {
  async run() {
    Console.print("구입금액을 입력해 주세요.");
    let payment = await Console.readLineAsync("");
    let myLottoArray = new Lotto_purchase(payment);
    
    Console.print("당첨 번호를 입력해 주세요.");
    let inputLottoNumber = await Console.readLineAsync("");
    let lottoNumberArray = inputLottoNumber.split(",");
    let numbers = new Lotto(lottoNumberArray);
    
    Console.print("\n보너스 번호를 입력해 주세요.");
    let inputbonusNumber = await Console.readLineAsync("");
    let bonusNumber = new Lotto_bonus(inputbonusNumber).bonusNumber;
    new Rank_check(myLottoArray, numbers, bonusNumber);
  }
}

export default App;
