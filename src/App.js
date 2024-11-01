import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const lottoPurchaseAmount = await MissionUtils.Console.readLineAsync(
      "구입금액을 입력해 주세요.\n"
    );
    if (lottoPurchaseAmount % 1000 !== 0) {
      throw new Error("[ERROR] : 구입금액이 1000원 단위로 나누어지지 않음.");
    }

    const lottoQuantity = lottoPurchaseAmount / 1000;
    MissionUtils.Console.print(`${lottoQuantity}개를 구매했습니다.`);
  }
}

export default App;
