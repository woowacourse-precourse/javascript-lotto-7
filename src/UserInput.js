import { MissionUtils } from "@woowacourse/mission-utils";
import ValidatePrice from "./utils/ValidatePrice.js";

class UserInput {
  //구매 금액 입력받기 메서드

  async inputPrice() {
    const input = await MissionUtils.Console.readLineAsync(
      "로또를 얼마어치 구매하시겠습니까? \n"
    );
    // const price = parseInt(input, 10);
    const price = input;

    const validatePrice = new ValidatePrice(price);

    validatePrice.isNum();
    validatePrice.isDivisibleByThousand();
    validatePrice.isTooLessMoney();

    return price;
  }

  async inputWinningNumbers() {
    const winNums = await MissionUtils.Console.readLineAsync(
      "당첨된 숫자 6자를 쉼표로 구분하여 입력해주세요. \n"
    );

    const numbers = winNums.split(",").map((num) => Number(num.trim()));

    return numbers;
  }

  async inputBonusNumber() {
    const bonusNum = await MissionUtils.Console.readLineAsync(
      "보너스 번호를 입력해주세요. \n"
    );
    return bonusNum;
  }
}
export default UserInput;
