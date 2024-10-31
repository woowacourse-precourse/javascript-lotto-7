import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import Lotto_purchase from "./Lotto_purchase.js";
class App {
  async run() {
    let payment = await Console.readLineAsync("");
    new Lotto_purchase(payment);

    let inputLottoNumber = await Console.readLineAsync("");
    let lottoNumberArray = inputLottoNumber.split(",");
    new Lotto(lottoNumberArray);
  }
}

export default App;
