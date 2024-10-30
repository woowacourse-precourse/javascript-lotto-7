import { MissionUtils } from "@woowacourse/mission-utils";

const NUMBER_REGEX = /^[0-9]*$/;
class App {
  async run() {
    try {
      // purchase input
      const purchaseAmount = await MissionUtils.Console.readLineAsync(
        "구입금액을 입력해 주세요."
      );

      // purchase validate
      // 1. 숫자가 아닌 경우
      if (!NUMBER_REGEX.test(purchaseAmount)) {
        throw new Error("숫자가 아닌 문자가 입력되었습니다.");
      }
      // 2. 1000 단위로 나누어 떨어지지 않는 경우
      if (Number(purchaseAmount) % 1000 !== 0) {
        throw new Error("1000원 단위로 나누어 떨어지지 않습니다.");
      }
    } catch (error) {
      console.log(`[ERROR] ${error.message}`);
    }
  }
}

export default App;
