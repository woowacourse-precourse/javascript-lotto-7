import { Console, Random } from "@woowacourse/mission-utils"
import Lotto from "./Lotto.js";

class LottoMachine {
  #lottos = []
  #bonusNumber
  #winningNumber

  async run () {
    await this.sellLotto()
    this.printSalesLottos()
  }

  async sellLotto() {
    const paid = await Console.readLineAsync('구매금액을 입력해 주세요.\n');
    this.makeLottos(paid / 1000);
  }

  makeLottoNumbers() {
    return Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
  }

  makeLottos(paid) {
    for (let i=0; i<paid; i+=1) {
      this.#lottos.push(new Lotto(this.makeLottoNumbers()))
    }
  }

  printSalesLottos() {
    this.#lottos.forEach(lotto => Console.print(lotto.getNumbers()))
  }

  validatePrice(price) {

  }
}

export default LottoMachine;