import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import Lotto_purchase from "./Lotto_purchase.js";
import Rank_check from "./Rank_check.js";

class App {
  async run() {
    let payment = await Console.readLineAsync("");
    let myLottoArray = new Lotto_purchase(payment);
    
    let inputLottoNumber = await Console.readLineAsync("");
    let lottoNumberArray = inputLottoNumber.split(",");
    let numbers = new Lotto(lottoNumberArray);
    
    new Rank_check(myLottoArray, numbers);
  }
}

export default App;
