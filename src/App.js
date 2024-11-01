import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async run() {
    let amount;
    while (true) {
      try {
        amount = await this.getPurchaseAmount();
        this.validatePurchaseAmount(amount);
        Console.print(`구입 금액: ${amount}원`);

        const lottoTickets = this.generateLottos(amount);
        this.printLottos(lottoTickets);

        const mainNumbers = await this.getMainNumbers();
        const bonusNumber = await this.getBonusNumber(mainNumbers);
        Console.print(`당첨 번호: ${mainNumbers.join(", ")} + 보너스 번호: ${bonusNumber}`);

        break;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async getPurchaseAmount() {
    while (true) {
      try {
        const input = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
        const amount = Number(input);
        this.validatePurchaseAmount(amount);
        return amount;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  validatePurchaseAmount(amount) {
    if (isNaN(amount) || amount % 1000 !== 0) {
      throw new Error("[ERROR] 구입 금액은 1,000원 단위여야 합니다.");
    }
  }

  generateLottos(amount) {
    const lottoCount = amount / 1000;
    const lottos = [];
    for (let i = 0; i < lottoCount; i++) {
      const lottoNumbers = Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
      lottos.push(lottoNumbers);
    }
    return lottos;
  }

  printLottos(lottos) {
    Console.print(`${lottos.length}개를 구매했습니다.`);
    lottos.forEach((lotto) => {
      Console.print(`[${lotto.join(", ")}]`);
    });
  }

  async getMainNumbers() {
    while (true) {
      try {
        const mainInput = await Console.readLineAsync("당첨 번호를 입력해 주세요. (쉼표로 구분하여 6개의 번호 입력)\n");
        const mainNumbers = mainInput.split(",").map((num) => Number(num.trim()));

        this.validateMainNumbers(mainNumbers);
        return mainNumbers;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async getBonusNumber(mainNumbers) {
    while (true) {
      try {
        const bonusInput = await Console.readLineAsync("보너스 번호를 입력해 주세요.\n");
        const bonusNumber = Number(bonusInput.trim());

        this.validateBonusNumbers(bonusNumber, mainNumbers);
        return bonusNumber;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  validateMainNumbers(mainNumbers) {
    if (mainNumbers.length !== 6 || new Set(mainNumbers).size !== 6) {
      throw new Error("[ERROR] 당첨 번호는 중복되지 않는 6개의 숫자여야 합니다.");
    }
    if (!mainNumbers.every((num) => num >= 1 && num <= 45)) {
      throw new Error("[ERROR] 당첨 번호는 1부터 45 사이의 숫자여야 합니다.");
    }    
  }

  validateBonusNumbers(bonusNumber, mainNumbers) {    
    if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
    if (mainNumbers.includes(bonusNumber)) {
      throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복되지 않아야 합니다.");
    }
  }
}

export default App;
