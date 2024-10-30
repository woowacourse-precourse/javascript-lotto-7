import { Console, MissionUtils } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
    this.printNumbers();
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (new Set(numbers).size !== 6) {
      throw new Error("[ERROR] 로또 번호는 중복될 수 없습니다.");
    }
    if (!numbers.every(num => num >= 1 && num <= 45)) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
  getNumbers() {
    return this.#numbers;
  }

  printNumbers() {
    Console.print(`[${this.#numbers.join(', ')}]`);
  }
}

class App {
  async run() {
    const count = await this.getLottoCount();
    const lottoNumbers = this.generateLottoNumbers(count);
    const lottos = lottoNumbers.map(numbers => new Lotto(numbers));

    const winningNumbers = await this.getWinningNumbers();
    const bonusNumber = await this.getBonusNumber();
  }

  async getLottoCount() {
    const purchaseCost = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    if (isNaN(Number(purchaseCost))) {
      throw new Error("[ERROR] 구입금액은 숫자여야 합니다.");
    }
    const count = Math.floor(purchaseCost / 1000);
    return count;
  }

  generateLottoNumbers(count) {
    const lottoNumbers = [];
    for (let i = 0; i < count; i++) {
      const randomLottoNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      lottoNumbers.push(randomLottoNumber.sort((a, b) => a - b));
    }
    return lottoNumbers;
  }

  async getWinningNumbers() {
    const input = await Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
    return input.split(',').map(Number);
  }

  async getBonusNumber() {
    const input = await Console.readLineAsync("보너스 번호를 입력해 주세요.\n");
    return Number(input);
  }
}

export default App;
