import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import Lotto_purchase from "./Lotto_purchase.js";
import Rank_check from "./Rank_check.js";
import Lotto_bonus from "./Lotto_bonus.js";

class App {
  async run() {
    let myLottoArray;
    let numbers;
    let bonusNumber;

    let isValidPayment = false;
    let isValidLottoNumbers = false;
    let isValidLottoBonusNumber = false;
    while (!isValidPayment) {
      try {
        Console.print("구입금액을 입력해 주세요.");
        let payment = await Console.readLineAsync("");
        myLottoArray = new Lotto_purchase(payment);
        isValidPayment = true;
      } catch (err) {
        Console.print(err.message);
      }
    }
    while (!isValidLottoNumbers) {
      try {
        Console.print("당첨 번호를 입력해 주세요.");
        let inputLottoNumber = await Console.readLineAsync("");
        let lottoNumberArray = inputLottoNumber.split(",");
        numbers = new Lotto(lottoNumberArray);
        isValidLottoNumbers = true;
      } catch (err) {
        Console.print(err.message);
      }
    }
    while (!isValidLottoBonusNumber) {
      try {
        Console.print("\n보너스 번호를 입력해 주세요.");
        let inputbonusNumber = await Console.readLineAsync("");
        bonusNumber = new Lotto_bonus(inputbonusNumber).bonusNumber;
        isValidLottoBonusNumber = true;
      } catch (err) {
        Console.print(err.message);
      }
    }
    new Rank_check(myLottoArray, numbers, bonusNumber);
  }
}

export default App;
