import {Console} from '@woowacourse/mission-utils'
class App {
  async run() {
    const userPurchaseAmount = this.getUserPurchaseAmount();
    const userWinningNumber = this.getUserWinningNumber();
    const userWinningBonusNumber = this.getUserWinningBonusNumber();
  }

  getUserPurchaseAmount(){
    return Console.readLineAsync('구입금액을 입력해 주세요.');
  }

  getUserWinningNumber(){
    return Console.readLineAsync('당첨 번호를 입력해 주세요.');
  }

  getUserWinningBonusNumber(){
    return Console.readLineAsync('보너스 번호를 입력해 주세요.');
  }
}

export default App;
