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
        let purchasePrice = await MissionUtils.Console.readLineAsync("구입금액을 입력해 주세요.\n");
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
      MissionUtils.Console.print(`[${lottoArray[i]}]`);
    }
    const lottoNumber = await MissionUtils.Console.readLineAsync("\n당첨번호를 입력해 주세요.\n");
    const bonusNumber = await MissionUtils.Console.readLineAsync("\n보너스 번호를 입력해 주세요.\n");
    

  }

}

export default App;
