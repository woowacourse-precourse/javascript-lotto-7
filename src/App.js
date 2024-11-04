import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  getPositivePrice(input) {
    const regex = /^[1-9]\d*$/;
    if (!regex.test(input)) {
      throw new Error("[ERROR]구입금액은 양의 정수이어야 합니다.");
    }
    return input;
  }

  getThousandPrice(input) {
    if (input % 1000 != 0) {
      throw new Error("[ERROR]구입금액은 1000의 배수이어야 합니다.");
    }

    return input;
  }

  async run() {
    let isValid = false;
    let purchasePrice;
    let lottoQuantity;

    while (!isValid) {
      try {
        purchasePrice = await MissionUtils.Console.readLineAsync("구입금액을 입력해 주세요.\n");
        purchasePrice = Number(this.getPositivePrice(purchasePrice));
        lottoQuantity = this.getThousandPrice(purchasePrice) / 1000;

        isValid = true;
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }
    MissionUtils.Console.print(`\n${lottoQuantity}개를 구매했습니다.`)
    let lottoArray = [];

    for (let i = 0; i < lottoQuantity; i++) {
      lottoArray.push(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6));
      lottoArray[i].sort((a, b) => a - b);
      MissionUtils.Console.print(`[${lottoArray[i]}]`);
    }
    while (isValid) {
      try {
        const lottoNumber = await MissionUtils.Console.readLineAsync("\n당첨번호를 입력해 주세요.\n");
        const winNumber = lottoNumber.split(",").map(Number);
        const lotto = new Lotto(winNumber);
        isValid = false;

      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }
    while (!isValid) {
      try {
        const bonusNumber = Number(await MissionUtils.Console.readLineAsync("\n보너스 번호를 입력해 주세요.\n"));
        if (!(Number.isInteger(bonusNumber) && bonusNumber >= 1 && bonusNumber <= 45)) {
          throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 정수여야 합니다.");
        }
        if (winNumber.includes(bonusNumber)) {
          throw new Error("[ERROR] 보너스 번호는 당첨번호와 중복될 수 없습니다.");
        }
        isValid = true;
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }

    const lottoNumber = await MissionUtils.Console.readLineAsync("\n당첨번호를 입력해 주세요.\n");



    const lottoPrize = {
      1: 2000000000,
      2: 30000000,
      3: 1500000,
      4: 50000,
      5: 5000,
    };



  }

}

export default App;
