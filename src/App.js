import { Console } from "@woowacourse/mission-utils";
import LottoMachine from "./LottoMachine.js";

class App {
  run() {
    this.start();
  }

  start() {
    Console.print("구입금액을 입력해 주세요.");
    Console.readLine("구입금액: ", (input) => {
      const purchaseAmount = Number(input);
      if (this.validatePurchaseAmount(purchaseAmount)) {
        const lottoCount = purchaseAmount / 1000;
        this.purchaseLottos(lottoCount);
      } else {
        Console.print("[ERROR] 구입 금액은 1,000원 단위로 입력해야 합니다.");
        this.start(); // 다시 입력 받기
      }
    });
  }

  validatePurchaseAmount(amount) {
    return amount >= 1000 && amount % 1000 === 0;
  }

  purchaseLottos(count) {
    Console.print(`${count}개를 구매했습니다.`);
    const lottoMachine = new LottoMachine();
    const lottos = lottoMachine.generateLottos(count);
    lottos.forEach((lotto) => Console.print(`[${lotto.numbers.join(", ")}]`));
    this.getWinningNumbers(); // 다음 단계로 이동
  }

  getWinningNumbers() {
    Console.print("당첨 번호를 입력해 주세요.");
    Console.readLine("당첨 번호: ", (input) => {
      const winningNumbers = input.split(",").map(Number);
      if (this.validateWinningNumbers(winningNumbers)) {
        this.getBonusNumber(winningNumbers);
      } else {
        Console.print(
          "[ERROR] 당첨 번호는 1부터 45 사이의 숫자 6개여야 합니다."
        );
        this.getWinningNumbers(); // 잘못된 입력이므로 다시 입력 받기
      }
    });
  }

  validateWinningNumbers(numbers) {
    const uniqueNumbers = new Set(numbers);
    return (
      numbers.length === 6 &&
      uniqueNumbers.size === 6 &&
      numbers.every((num) => num >= 1 && num <= 45)
    );
  }

  getBonusNumber(winningNumbers) {
    Console.print("보너스 번호를 입력해 주세요.");
    Console.readLine("보너스 번호: ", (input) => {
      const bonusNumber = Number(input);
      if (this.validateBonusNumber(bonusNumber, winningNumbers)) {
        Console.print(`당첨 번호: ${winningNumbers.join(", ")}`);
        Console.print(`보너스 번호: ${bonusNumber}`);
      } else {
        Console.print(
          "[ERROR] 보너스 번호는 당첨 번호와 중복되지 않는 1~45 사이의 숫자여야 합니다."
        );
        this.getBonusNumber(winningNumbers);
      }
    });
  }

  validateBonusNumber(bonus, winningNumbers) {
    return bonus >= 1 && bonus <= 45 && !winningNumbers.includes(bonus);
  }
}

export default App;
