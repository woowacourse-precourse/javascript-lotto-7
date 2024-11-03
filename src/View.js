import { Console } from "@woowacourse/mission-utils";

class View {
  getPurchaseMoney = async () => {
    const PURCHASE_MONEY =
      await Console.readLineAsync("구입금액을 입력해 주세요.\n");

    View.validatePurchaseMoney(PURCHASE_MONEY);

    return PURCHASE_MONEY;
  };

  static validatePurchaseMoney = (PURCHASE_MONEY) => {
    if (PURCHASE_MONEY.trim() === "") {
      Console.print("[ERROR] 구입금액을 입력해 주세요.");
      throw new Error("[ERROR] 구입금액을 입력해 주세요.");
    }

    if (isNaN(PURCHASE_MONEY)) {
      Console.print("[ERROR] 숫자를 입력해 주세요.");
      throw new Error("[ERROR] 숫자를 입력해 주세요.");
    }

    return;
  };

  printLottos = (LOTTOS) => {
    const PURCHASED_LOTTO_COUNT = LOTTOS.length;
    Console.print(`${PURCHASED_LOTTO_COUNT}개를 구매했습니다.`);
    for (const LOTTO of LOTTOS) {
      this.printLotto(LOTTO);
    }
    Console.print("");
  };

  printLotto(LOTTO) {
    Console.print(LOTTO.getNumbers());
  }
}

export default View;
