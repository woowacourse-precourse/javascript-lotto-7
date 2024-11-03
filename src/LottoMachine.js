import { Console, Random } from "@woowacourse/mission-utils"
import Lotto from "./Lotto.js";

class LottoMachine {
  #lottos = []
  #winningNumber
  #bonusNumber
  #lottoResult = {}

  async run () {
    await this.sellLotto()
    this.printLottoCount()
    this.printSalesLottos()
    await this.inputWinningNumber()
    await this.inputBonusNumber()
    this.calculateLottoResult()
    this.printResult()
  }

  async sellLotto() {
    const paid = await Console.readLineAsync('구매금액을 입력해 주세요.\n');
    this.makeLottos(paid / 1000);
  }

  async inputWinningNumber() {
    const winningNumber = await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
    this.#winningNumber = winningNumber.split(',').map(Number).sort((a, b) => a - b);
  }

  async inputBonusNumber() {
    const bonusNumber = await Console.readLineAsync('보너스 번호를 입력해 주세요.\n');
    this.#bonusNumber = Number(bonusNumber);
  }

  makeLottoNumbers() {
    return Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
  }

  makeLottos(paid) {
    for (let i=0; i<paid; i+=1) {
      this.#lottos.push(new Lotto(this.makeLottoNumbers()))
    }
  }

  printLottoCount() {
    Console.print(`${this.#lottos.length}개를 구매했습니다.`)
  }

  printSalesLottos() {
    this.#lottos.forEach(lotto => Console.print(lotto.getNumbers()))
  }

  printResult() {
    Console.print('당첨 통계')
    Console.print('---')
    Console.print(`3개 일치 (5,000)원 - ${this.#lottoResult[3] ?? 0}개`)
    Console.print(`4개 일치 (50,000)원 - ${this.#lottoResult[4] ?? 0}개`)
    Console.print(`5개 일치 (1,500,000)원 - ${this.#lottoResult[5] ?? 0}개`)
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000)원 - ${this.#lottoResult[7] ?? 0}개`)
    Console.print(`6개 일치 (2,000,000,000)원 - ${this.#lottoResult[6] ?? 0}개`)
    Console.print(`총 수익률은 62.5%입니다.`)
  }

  calculateLottoResult() {
    this.#lottos.forEach(lotto => {
      const correctCount = lotto.getCorrectCount(this.#winningNumber, this.#bonusNumber)
      if (correctCount in this.#lottoResult) this.#lottoResult[correctCount] += 1
      else this.#lottoResult[correctCount] = 1
    })
  }
}

export default LottoMachine;