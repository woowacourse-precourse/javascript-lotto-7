import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
class App {
  async run() {
    let inputLottoNumber = await Console.readLineAsync("");
    let lottoNumberArray = inputLottoNumber.split(",");
    new Lotto(lottoNumberArray);
  }
}

export default App;
