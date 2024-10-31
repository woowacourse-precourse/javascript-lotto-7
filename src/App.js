import { Console, MissionUtils } from "@woowacourse/mission-utils";
class App {
  async run() {
    const purchaseAmount = await this.getPurchaseAmount();
    const lottoCount = purchaseAmount / 1000;
    Console.print(`${lottoCount}개를 구입했습니다.`)

  }

  async getPurchaseAmount() {
    let amount = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    amount = parseInt(amount);
    validatePurchaseAmount(amount);
    return amount ;
  }
}

function validatePurchaseAmount(amount) {
  if (amount <= 0 || amount % 1000 !== 0) {
    throw new Error("[ERROR] 구입 금액은 1,000원 단위여야 합니다.");
  }
}

export default App;