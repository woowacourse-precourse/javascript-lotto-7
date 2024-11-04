import { Console } from "@woowacourse/mission-utils"

const InputView = {
  async getPurchaseAmount() {
    Console.print("구입 금액을 입력해주세요.");
    const input = await Console.readLineAsync();
    const amount = parseInt(input);
    
    if (isNaN(amount) || amount % 1000 !== 0) {
      throw new Error("[ERROR] 구입 금액은 1,000원 단위여야 합니다.")
    }
    
    return amount;
  }
}

export default InputView;