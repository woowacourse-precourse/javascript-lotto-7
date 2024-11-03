import { Console } from "@woowacourse/mission-utils";
import {
  WINNING_NUMBERS_COUNT,
  WINNING_NUMBERS_DELIMITER,
  LOTTO_MIN_NUMBER,
  LOTTO_MAX_NUMBER,
} from "./constants.js";

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
    Console.print("");
    Console.print(`${PURCHASED_LOTTO_COUNT}개를 구매했습니다.`);
    for (const LOTTO of LOTTOS) {
      this.printLotto(LOTTO);
    }
    Console.print("");
  };

  printLotto(LOTTO) {
    Console.print(LOTTO.getNumbers());
  }

  getWinningNumbers = async () => {
    const WINNING_NUMBERS =
      await Console.readLineAsync("당첨 번호를 입력해 주세요.\n");

    this.#validateWinningNumbers(WINNING_NUMBERS);

    return WINNING_NUMBERS;
  };

  #validateWinningNumbers = (WINNING_NUMBERS) => {
    if (WINNING_NUMBERS.trim() === "") {
      Console.print("[ERROR] 당첨 번호를 입력해 주세요.");
      throw new Error("[ERROR] 당첨 번호를 입력해 주세요.");
    }

    const WINNING_NUMBER_ARRAY = WINNING_NUMBERS.split(
      WINNING_NUMBERS_DELIMITER,
    );
    if (WINNING_NUMBER_ARRAY.length !== WINNING_NUMBERS_COUNT) {
      Console.print(
        `[ERROR] 당첨 번호는 ${WINNING_NUMBERS_COUNT}개여야 합니다.`,
      );
      throw new Error(
        `[ERROR] 당첨 번호는 ${WINNING_NUMBERS_COUNT}개여야 합니다.`,
      );
    }

    WINNING_NUMBER_ARRAY.forEach((WINNING_NUMBER) => {
      if (isNaN(WINNING_NUMBER)) {
        Console.print("[ERROR] 숫자를 입력해 주세요.");
        throw new Error("[ERROR] 숫자를 입력해 주세요.");
      }
    });

    WINNING_NUMBER_ARRAY.forEach((WINNING_NUMBER) => {
      if (
        parseInt(WINNING_NUMBER) < LOTTO_MIN_NUMBER ||
        parseInt(WINNING_NUMBER) > LOTTO_MAX_NUMBER
      ) {
        Console.print(
          `[ERROR] ${LOTTO_MIN_NUMBER}부터 ${LOTTO_MAX_NUMBER}까지의 숫자를 입력해 주세요.`,
        );
        throw new Error(
          `[ERROR] ${LOTTO_MIN_NUMBER}부터 ${LOTTO_MAX_NUMBER}까지의 숫자를 입력해 주세요.`,
        );
      }
    });

    return WINNING_NUMBER_ARRAY.map((WINNING_NUMBER) =>
      parseInt(WINNING_NUMBER),
    );
  };
}

export default View;
