import { Random as MissionUtilsRandom, Console } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;
  
  constructor(numbers = MissionUtilsRandom.pickUniqueNumbersInRange(1, 45, 6)) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    this.#validateLength(numbers);
    this.#validateRange(numbers);
    this.#validateUnique(numbers);
  }

  #validateLength(numbers) {
    if (!Array.isArray(numbers) || numbers.length !== 6) {
      Console.print("[ERROR] 로또 번호는 6개여야 합니다.");
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  #validateRange(numbers) {
    if (!numbers.every((num) => num >= 1 && num <= 45)) {
      Console.print("[ERROR] 로또 번호는 1과 45 사이여야 합니다.");
      throw new Error("[ERROR] 로또 번호는 1과 45 사이여야 합니다.");
    }
  }

  #validateUnique(numbers) {
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      Console.print("[ERROR] 로또 번호에 중복된 숫자가 없어야 합니다.");
      throw new Error("[ERROR] 로또 번호에 중복된 숫자가 없어야 합니다.");
    }
  }

  getNumbers() {
    return this.#numbers;
  }

  static generateRandomLotto() {
    const numbers = MissionUtilsRandom.pickUniqueNumbersInRange(1, 45, 6);
    return new Lotto(numbers);
  }

  async getInputMoney() {
    const inputMoney = await Console.readLineAsync("로또 구입 금액을 입력해주세요.(천원 단위로 입력해주세요)\n");
    const amount = parseInt(inputMoney, 10);
    if (isNaN(amount) || amount % 1000 !== 0) {
      Console.print("[ERROR] 금액은 천 원 단위로 입력해야 합니다.");
      throw new Error("[ERROR] 금액은 천 원 단위로 입력해야 합니다.");
    }
    return amount;
  }

  purchaseLottos(count) {
    Console.print(`${count}개를 구매했습니다.`);
    const lottos = [];
    for (let i = 0; i < count; i++) {
      const lotto = Lotto.generateRandomLotto();
      lottos.push(lotto);
      Console.print(`[${lotto.getNumbers().join(", ")}]`);
    }
    return lottos;
  }

  async getWinningNumbers() {
    const input = await Console.readLineAsync("당첨 번호를 입력해주세요.\n");
    const numbers = input.split(",").map(Number).filter((num) => !isNaN(num));
    
    if (numbers.length !== 6 || !numbers.every((num) => num >= 1 && num <= 45) || new Set(numbers).size !== numbers.length) {
      Console.print("[ERROR] 당첨 번호는 중복되지 않는 1부터 45 사이의 숫자 6개여야 합니다.");
      throw new Error("[ERROR] 당첨 번호는 1부터 45 사이의 숫자 6개여야 합니다.");
    }

    return numbers;
  }

  async getBonusNumber(winningNumbers) {
    const input = await Console.readLineAsync("보너스 번호를 입력해주세요.\n");
    const bonusNumber = parseInt(input, 10);
    
    if (isNaN(bonusNumber) || bonusNumber < 1 || bonusNumber > 45 || winningNumbers.includes(bonusNumber)) {
      Console.print("[ERROR] 보너스 번호는 1부터 45 사이의 숫자 중 당첨 번호와 중복되지 않는 숫자여야 합니다.");
      throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 숫자 중 당첨 번호와 중복되지 않는 숫자여야 합니다.");
    }

    return bonusNumber;
  }

  calculateResults(lottos, winningNumbers, bonusNumber) {
    const prizes = {
      3: { prize: 5000, count: 0 },
      4: { prize: 50000, count: 0 },
      5: { prize: 1500000, count: 0 },
      "5+bonus": { prize: 30000000, count: 0 },
      6: { prize: 2000000000, count: 0 },
    };

    lottos.forEach((lotto) => {
      const matchCount = lotto.getNumbers().filter((num) => winningNumbers.includes(num)).length;
      const hasBonus = lotto.getNumbers().includes(bonusNumber);

      if (matchCount === 6) prizes[6].count++;
      else if (matchCount === 5 && hasBonus) prizes["5+bonus"].count++;
      else if (matchCount === 5) prizes[5].count++;
      else if (matchCount === 4) prizes[4].count++;
      else if (matchCount === 3) prizes[3].count++;
    });

    return prizes;
  }

  displayResults(prizes) {
    Console.print("당첨 통계\n---");
    Console.print(`3개 일치 (5,000원) - ${prizes[3].count}개`);
    Console.print(`4개 일치 (50,000원) - ${prizes[4].count}개`);
    Console.print(`5개 일치 (1,500,000원) - ${prizes[5].count}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${prizes["5+bonus"].count}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${prizes[6].count}개`);
  }

  async start() {
    const amount = await this.getInputMoney();
    const lottos = this.purchaseLottos(amount / 1000);
    const winningNumbers = await this.getWinningNumbers();
    const bonusNumber = await this.getBonusNumber(winningNumbers);
    
    const prizes = this.calculateResults(lottos, winningNumbers, bonusNumber);
    this.displayResults(prizes);

    const totalPrize = Object.values(prizes).reduce((acc, { prize, count }) => acc + prize * count, 0);
    const totalCost = lottos.length * 1000;
    const profitRate = ((totalPrize / totalCost) * 100).toFixed(1);

    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }
}

export default Lotto;
