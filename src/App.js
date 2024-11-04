import { Console } from "@woowacourse/mission-utils";

class App {
  run() {
    this.start();
  }

  start() {
    Console.print("구입금액을 입력해 주세요.");
    Console.readLine("구입금액: ", (input) => {
      const purchaseAmount = Number(input);
      if (this.validatePurchaseAmount(purchaseAmount)) {
        Console.print(`구입 금액이 ${purchaseAmount}원으로 설정되었습니다.`);
        // 이후 단계로 진행 (다음 기능에서 구현 예정)
      } else {
        Console.print("[ERROR] 구입 금액은 1,000원 단위로 입력해야 합니다.");
        this.start(); // 다시 입력 받기
      }
    });
  }

  validatePurchaseAmount(amount) {
    return amount >= 1000 && amount % 1000 === 0;
  }
}

export default App;
