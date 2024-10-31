import { Console } from "@woowacourse/mission-utils";

class LottoApp {
  async start() {

  };

  async getPaymentAmount() {
    return Console.readLineAsync("구입 금액을 입력해주세요(로또 1장 당 1000원)");
  };
  async getLottoNumbers() {
    return Console.readLineAsync("당첨 번호를 입력해주세요(쉼표로 구분하여 입력)");
  }
  async getBonusNumber() {
    return Console.readLineAsync("보너스 번호를 입력해주세요");
  }
}

export default LottoApp;