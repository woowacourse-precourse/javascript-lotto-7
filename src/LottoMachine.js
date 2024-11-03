import { Console, Random } from "@woowacourse/mission-utils"
import Lotto from "./Lotto.js";

class LottoMachine {
  #lottos = []
  #winningNumber
  #bonusNumber

  async run () {
    await this.sellLotto()
    this.printLottoCount()
    this.printSalesLottos()
    await this.inputWinningNumber()
    await this.inputBonusNumber()
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
}

export default LottoMachine;