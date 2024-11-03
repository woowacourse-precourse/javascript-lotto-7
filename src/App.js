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
    MissionUtils.Console.print(`\n${lottoQuantity}개를 구매했습니다.`);

    const allLottos = this.generateLottoNumbers(lottoQuantity);
    allLottos.forEach((lottoNumbers) => {
      MissionUtils.Console.print(`[${lottoNumbers.join(", ")}]`);
    });

    const winningNumbersInput = await MissionUtils.Console.readLineAsync(
      "당첨 번호를 입력해 주세요.\n"
    );
    const winningNumbers = winningNumbersInput.split(",").map(Number);
    this.validateWinningNumbers(winningNumbers);

    const bonusNumberInput = await MissionUtils.Console.readLineAsync(
      "보너스 번호를 입력해 주세요.\n"
    );
    const bonusNumber = Number(bonusNumberInput);
    if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error("[ERROR] : 보너스 번호는 1~45사이여야 합니다.");
    }
    if (uniqueNumbers.has(bonusNumber)) {
      throw new Error(
        "[ERROR] : 보너스 번호는 당첨 번호와 중복될 수 없습니다."
      );
    }

    const counts = {
      3: 0,
      4: 0,
      5: 0,
      "5_bonus": 0,
      6: 0,
    };

    allLottos.forEach((lottoNumbers) => {
      const matchedCount = lottoNumbers.filter((num) =>
        winningNumbers.includes(num)
      ).length;
      const hasBouns = lottoNumbers.includes(bonusNumber);

      if (matchedCount === 5 && hasBouns) {
        counts["5_bonus"]++;
      } else if (matchedCount >= 3) {
        counts[matchedCount]++;
      }
    });

    console.log(`3개 일치(5,000원) - ${counts[3]}`);
    console.log(`4개 일치(50,000원) - ${counts[4]}`);
    console.log(`5개 일치(1,500,000원) - ${counts[5]}`);
    console.log(`5개 일치(30,000,000원) - ${counts["5_bonus"]}`);
    console.log(`6개 일치(2,000,000,000원) - ${counts[6]}`);

    const prizes = {
      3: 5000,
      4: 50000,
      5: 1500000,
      "5_bonus": 30000000,
      6: 2000000000,
    };

    const totalPrize =
      counts[3] * prizes[3] +
      counts[4] * prizes[4] +
      counts[5] * prizes[5] +
      counts["5_bonus"] * prizes["5_bonus"] +
      counts[6] * prizes[6];
    const profitRate = (totalPrize / lottoPurchaseAmount) * 100;
    MissionUtils.Console.print(`총 수익률은 ${profitRate.toFixed(1)}%입니다.`);
  }

  generateLottoNumbers(quantity) {
    const allLottos = [];
    for (let i = 0; i < quantity; i++) {
      const lottoNumbers = MissionUtils.Random.pickUniqueNumbersInRange(
        1,
        45,
        6
      );
      lottoNumbers.sort((a, b) => a - b);
      allLottos.push(lottoNumbers);
    }
    return allLottos;
  }

  validateWinningNumbers(winningNumbers) {
    const uniqueNumbers = new Set(winningNumbers);
    if (!winningNumbers.every((num) => num >= 1 && num <= 45)) {
      throw new Error("[ERROR] : 당첨 번호는 1~45 사이여야 합니다.");
    }
    if (
      uniqueNumbers.size !== winningNumbers.length ||
      winningNumbers.length !== 6
    ) {
      throw new Error("[ERROR] : 6개의 숫자를 중복되지 않게 입력해야합니다.");
    }
  }
}

export default App;
