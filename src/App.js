import { MissionUtils } from "@woowacourse/mission-utils";

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
    while (!isValid) {
      try {
        let purchasePrice = await MissionUtils.Console.readLineAsync("구입금액을 입력해 주세요.\n");
        purchasePrice = Number(this.getPositivePrice(purchasePrice));
        const lottoQuantity = this.getThousandPrice(purchasePrice) / 1000;
        isValid = true;
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }




  }

}

export default App;
