import { Console, MissionUtils } from "@woowacourse/mission-utils";
class App {
  async run() {
    this.purchaseAmount = await this.getPurchaseAmount();
    const lottoCount = this.purchaseAmount / 1000;
    Console.print(`\n${lottoCount}개를 구입했습니다.`)
    this.lottos = this.generateLottos(lottoCount);
    this.printLottoNumbers(this.lottos);
    this.winningNumbers = await this.getWinningNumbers();
    this.bonusNumber = await this.getBonusNumber();
  }

  async getPurchaseAmount() {
    let amount = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    amount = parseInt(amount);
    validatePurchaseAmount(amount);
    return amount ;
  }

  generateLottos(count) {
    return Array.from({ length: count }, () => 
      MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b)
    );
  }

  printLottoNumbers(lottoCount) {
    this.lottos.forEach(lotto => {
      Console.print(`[${lotto.join(', ')}]`);
    });
  }

  async getWinningNumbers() {
    let getNumbers = await Console.readLineAsync("\n당첨 번호를 입력해 주세요\n");
    let winNumbers = getNumbers.split(',').map(number => {
      const num = parseInt(number.trim());
      if (isNaN(num) || num < 1 || num > 45) {
        throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
      }
      return num;
    });

    if(winNumbers.length !== 6 ){
      throw new Error("[ERROR] 로또 번호는 6개만 입력할 수 있습니다.")
    }
    return winNumbers;
  }

  async getBonusNumber() {
    let bonusNumber = await Console.readLineAsync("\n보너스 번호를 입력해 주세요.\n");
    bonusNumber = parseInt(bonusNumber);
    if (bonusNumber < 1 || bonusNumber > 45 ) {
      throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
    if (this.winningNumbers.includes(bonusNumber)){
      throw new Error("[ERROR] 보너스 번호는 로또 번호와 중복될 수 없습니다.")
    }
    return bonusNumber;
  }

}

function validatePurchaseAmount(amount) {
  if (amount <= 0 || amount % 1000 !== 0) {
    throw new Error("[ERROR] 구입 금액은 1,000원 단위여야 합니다.");
  }
}

export default App;