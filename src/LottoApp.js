import { Console } from "@woowacourse/mission-utils";
import PaymentValidator from "./PaymentValidator";
import LottoValidator from "./LottoValidator";

class LottoApp {
  async start() {

  };

  async getPaymentAmount() {
    while(true) {
      try {
        const price = await Console.readLineAsync("구입 금액을 입력해주세요(로또 1장 당 1000원)");
        PaymentValidator.checkThousandUnit(price);
        return price;
      } catch(error) {
        Console.print(error.message);
      }
    }
  }
  async getLottoNumbers() {
    while(true) {
      try {
        const rawLottoNumbers = await Console.readLineAsync("당첨 번호를 입력해주세요(쉼표로 구분하여 입력)");
        const parsedLottoNumbers = rawLottoNumbers.split(",").map(num => Number(num.trim()));
        LottoValidator.validateLottoNumbers(parsedLottoNumbers);
        return parsedLottoNumbers;
      } catch(error) {
        Console.print(error.message);
      }
    }
  }
  async getBonusNumber() {
    while(true) {
      try {
        const bonusNumber = await Console.readLineAsync("보너스 번호를 입력해주세요");
        return bonusNumber;
      } catch(error) {
        Console.print(error.message);
      }
    }
  }
}

export default LottoApp;