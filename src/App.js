import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const count = await this.getLottoCount();
    const lottoNumbers = this.generateLottoNumbers(count);
    this.printLottoNumbers(lottoNumbers);
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

  printLottoNumbers(lottoNumbers) {
    Console.print(`${lottoNumbers.length}개를 구매했습니다.`);
    lottoNumbers.forEach(numbers => Console.print(`[${numbers.join(', ')}]`));
  }
}

export default App;
