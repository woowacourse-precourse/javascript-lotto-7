import { Console } from "@woowacourse/mission-utils"

const InputView = {
  async getPurchaseAmount() {
    Console.print("구입 금액을 입력해주세요.");
    const input = await Console.readLineAsync();
    const amount = parseInt(input);
  }
}

export default InputView;