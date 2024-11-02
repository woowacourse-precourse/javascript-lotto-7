import {Console} from '@woowacourse/mission-utils'
class App {
  async run() {
    const userPurchaseAmount = await this.getUserPurchaseAmount();
    const userWinningNumber = await this.getUserWinningNumber();
    const userWinningBonusNumber = await this.getUserWinningBonusNumber();

    const userLottoAmount = computeLottoForPurchase();
    
  }

  async getUserPurchaseAmount(){
    return Console.readLineAsync('구입금액을 입력해 주세요.');
  }

  async getUserWinningNumber(){
    return Console.readLineAsync('당첨 번호를 입력해 주세요.');
  }

  async getUserWinningBonusNumber(){
    return Console.readLineAsync('보너스 번호를 입력해 주세요.');
  }

  computeLottoForPurchase(purchaseAmount){
    return purchaseAmount / 1000;
  }

}

export default App;
